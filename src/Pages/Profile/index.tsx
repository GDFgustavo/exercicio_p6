import { useEffect, useState } from 'react'

import ProductDetails from '../../components/ProductDetails'
import ProductProfile from '../../components/ProductProfile'
import { CardapioItem } from '../Home'
import { useParams } from 'react-router-dom'
import ProductList from '../../components/ProductList'
import { MensageLoading } from '../../components/CardMenu/styles'

const Profile = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<CardapioItem[]>([])
  const [selectedProduct, setSelectedProduct] = useState<CardapioItem>()

  const openModal = (id: number) =>
    setSelectedProduct(cardapio.find((p) => p.id === id))

  const closeModal = () => setSelectedProduct(undefined)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res.cardapio))
  }, [id])

  return (
    <>
      <ProductProfile />
      {!cardapio ? (
        <MensageLoading>Carregando</MensageLoading>
      ) : (
        <ProductList
          grid="three"
          onClick={openModal}
          foods={[]}
          cardapio={cardapio}
        />
      )}
      {selectedProduct && (
        <ProductDetails details={selectedProduct} onClick={closeModal} />
      )}
    </>
  )
}

export default Profile
