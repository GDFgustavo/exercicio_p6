import { useState } from 'react'
import PizzaMargue from '../../assets/images/pizza_marguerita.png'

import Food from '../../components/models/Food'
import ProductDetails from '../../components/ProductDetails'
import ProductList from '../../components/ProductList'
import ProductProfile from '../../components/ProductProfile'

const foods: Food[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaMargue,
    card: 'cardProfile'
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaMargue,
    card: 'cardProfile'
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaMargue,
    card: 'cardProfile'
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaMargue,
    card: 'cardProfile'
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaMargue,
    card: 'cardProfile'
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: PizzaMargue,
    card: 'cardProfile'
  }
]

const Profile = () => {
  const [modal, setModal] = useState(false)

  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)

  return (
    <>
      <ProductProfile />
      <ProductList foods={foods} grid="three" onclick={openModal} />
      {modal && <ProductDetails onClick={closeModal} />}
    </>
  )
}

export default Profile
