import PizzaMargue from '../../assets/images/pizza_marguerita.png'

import Food from '../../components/models/Food'
import ProductList from '../../components/ProductList'
import ProductProfile from '../../components/ProductProfile'

const foods: Food[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho',
    image: PizzaMargue,
    card: false
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho',
    image: PizzaMargue,
    card: false
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho',
    image: PizzaMargue,
    card: false
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho',
    image: PizzaMargue,
    card: false
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho',
    image: PizzaMargue,
    card: false
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    infos: [],
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho',
    image: PizzaMargue,
    card: false
  }
]

const Profile = () => (
  <>
    <ProductProfile />
    <ProductList foods={foods} />
  </>
)

export default Profile
