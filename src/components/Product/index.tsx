import { Button, Card, Description, Infos, Titulo } from './styles'

import Tag from '../Tag'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  infos: string[]
  description: string
  image: string
  reviews?: string
  button: string
  card?: boolean
}

const Product = ({
  title,
  infos,
  description,
  image,
  reviews,
  button,
  card
}: Props) => (
  <Card card={card}>
    <img src={image} alt="Efood" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <div className="container">
      <Titulo card={card}>
        {title}
        {reviews && <img src={reviews} alt="Reviews" />}
      </Titulo>
      <Description card={card}>{description}</Description>
      <Link to="/profile">
        <Button card={card}>{button}</Button>
      </Link>
    </div>
  </Card>
)

export default Product
