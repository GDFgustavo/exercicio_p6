import Food from '../models/Food'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  foods: Food[]
}

const ProductList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((foods) => (
          <Product
            key={foods.id}
            title={foods.title}
            infos={foods.infos}
            description={foods.description}
            image={foods.image}
            reviews={foods.reviews}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
