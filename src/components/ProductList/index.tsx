import { CardapioItem, Foods } from '../../Pages/Home'
import CardMenu from '../CardMenu'
import CardRestaurants from '../CardRestaurants'
import Loader from '../Loader'
import { Container, List } from './styles'

export type Props = {
  foods: Foods[]
  cardapio: CardapioItem[]
  grid: 'two' | 'three'
  type?: 'restaurant'
  onClick?: (id: number) => void
  isLoading: boolean
}

const ProductList = ({
  foods,
  cardapio,
  grid,
  type,
  onClick,
  isLoading
}: Props) => {
  const handleClick = (id: number) => {
    if (onClick) {
      onClick(id)
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <div className="container">
        {type === 'restaurant' ? (
          <List grid={grid}>
            {foods.map((foods) => (
              <li key={foods.id}>
                <CardRestaurants
                  id={foods.id}
                  title={foods.titulo}
                  infos={foods.tipo}
                  description={foods.descricao}
                  image={foods.capa}
                  reviews={foods.avaliacao}
                />
              </li>
            ))}
          </List>
        ) : (
          <List grid={grid}>
            {cardapio.map((cardapio) => (
              <li key={cardapio.id}>
                <CardMenu
                  title={cardapio.nome}
                  description={cardapio.descricao}
                  image={cardapio.foto}
                  onClick={() => handleClick(cardapio.id)}
                />
              </li>
            ))}
          </List>
        )}
      </div>
    </Container>
  )
}

export default ProductList
