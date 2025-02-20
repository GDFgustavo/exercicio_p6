import ProductList from '../../components/ProductList'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

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
  const [food, setFoods] = useState<Foods[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setFoods(res))
  }, [])

  return (
    <>
      <Header />
      <ProductList foods={food} grid={'two'} type="restaurant" cardapio={[]} />
    </>
  )
}

export default Home
