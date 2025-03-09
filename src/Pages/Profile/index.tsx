import { useState } from 'react'

import ProductDetails from '../../components/ProductDetails'
import ProductProfile from '../../components/ProductProfile'
import { CardapioItem } from '../Home'
import { useParams } from 'react-router-dom'
import ProductList from '../../components/ProductList'
import { useGetMenuQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Profile = () => {
  const { id } = useParams()
  const { data: menu, isLoading: isLoadingMenu } = useGetMenuQuery(id ?? '')

  const [selectedProduct, setSelectedProduct] = useState<CardapioItem>()

  const openModal = (id: number) => {
    if (menu) {
      setSelectedProduct(menu.cardapio.find((p) => p.id === id))
    }
  }
  const closeModal = () => setSelectedProduct(undefined)

  if (menu) {
    return (
      <>
        <ProductProfile />
        <ProductList
          grid="three"
          onClick={openModal}
          foods={[]}
          cardapio={menu.cardapio}
          isLoading={isLoadingMenu}
        />
        {selectedProduct && (
          <ProductDetails details={selectedProduct} onClick={closeModal} />
        )}
      </>
    )
  }
  return <Loader />
}

export default Profile
