import Food from '../models/Food'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  foods: Food[]
  grid: 'two' | 'three'
  onclick?: () => void
}

const ProductList = ({ foods, grid, onclick }: Props) => (
  <Container>
    <div className="container">
      <List grid={grid}>
        {foods.map((foods) => (
          <Product
            key={foods.id}
            title={foods.title}
            infos={foods.infos}
            description={foods.description}
            image={foods.image}
            reviews={foods.reviews}
            card={foods.card}
            onClick={onclick}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
