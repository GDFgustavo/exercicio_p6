import Food from '../../components/models/Food'
import ProductList from '../../components/ProductList'
import HiokiSushi from '../../assets/images/hioki_sushi.png'
import Reviews4_9 from '../../assets/images/nota_4-9.svg'
import DolceVita from '../../assets/images/la_dolce_vita_trattoria.png'
import Reviews4_6 from '../../assets/images/nota_4-6.svg'
import Header from '../../components/Header'

const foods: Food[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: HiokiSushi,
    reviews: Reviews4_9,
    button: 'Saiba mais',
    card: true
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: DolceVita,
    reviews: Reviews4_6,
    button: 'Saiba mais',
    card: true
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: DolceVita,
    reviews: Reviews4_6,
    button: 'Saiba mais',
    card: true
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: DolceVita,
    reviews: Reviews4_6,
    button: 'Saiba mais',
    card: true
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: DolceVita,
    reviews: Reviews4_6,
    button: 'Saiba mais',
    card: true
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: DolceVita,
    reviews: Reviews4_6,
    button: 'Saiba mais',
    card: true
  }
]

const Home = () => (
  <>
    <Header />
    <ProductList foods={foods} grid={true} />
  </>
)

export default Home
