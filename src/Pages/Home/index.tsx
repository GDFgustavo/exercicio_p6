import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import { useGetRestaurantQuery } from '../../services/api'

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
  const { data: restaurant } = useGetRestaurantQuery()

  if (restaurant) {
    return (
      <>
        <Header />
        <ProductList
          foods={restaurant}
          grid={'two'}
          type="restaurant"
          cardapio={[]}
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
