import { Link } from 'react-router-dom'

import { BackgroundProfile, Imagem, Overlay, SubTitle, Title } from './styles'
import logo from '../../assets/images/logo.svg'
import banner from '../../assets/images/fundo.png'
import DolceVita from '../../assets/images/la_dolce_vita_trattoria.png'
import PizzaMargue from '../../assets/images/pizza_marguerita.png'

import Food from '../../components/models/Food'
import ProductList from '../../components/ProductList'

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
    <BackgroundProfile style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <ul>
          <li>
            <h4>Restaurantes</h4>
          </li>
          <li>
            <Link to="/">
              <img src={logo} alt="Efood" />
            </Link>
          </li>
          <li>
            <a href="#">0 produto(s) no carrinho</a>
          </li>
        </ul>
      </div>
    </BackgroundProfile>
    <Imagem style={{ backgroundImage: `url(${DolceVita})` }}>
      <Overlay />
      <div className="container">
        <SubTitle>Italiana</SubTitle>
        <Title>La Dolce Vita Trattoria</Title>
      </div>
    </Imagem>
    <ProductList foods={foods} />
  </>
)

export default Profile
