import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import { useGetRestaurantQuery } from '../../services/api'
import Loader from '../../components/Loader'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Foods = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: restaurant, isLoading: isLoadingRestaurant } =
    useGetRestaurantQuery()

  if (restaurant) {
    return (
      <>
        <Header />
        <ProductList
          foods={restaurant}
          grid={'two'}
          type="restaurant"
          cardapio={[]}
          isLoading={isLoadingRestaurant}
        />
      </>
    )
  }
  return <Loader />
}

export default Home
