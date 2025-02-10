import { Button, Card, CardContent, Description, Infos, Titulo } from './styles'

import Tag from '../Tag'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  infos: string[]
  description: string
  image: string
  reviews?: string
  card: 'cardDefault' | 'cardProfile'
  onClick?: () => void
}

const Product = ({
  title,
  infos,
  description,
  image,
  reviews,
  card,
  onClick
}: Props) => (
  <Card cardStyles={card}>
    <img src={image} alt="Foods" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardContent cardStyles={card}>
      <Titulo cardStyles={card}>
        {title}
        {reviews && <img src={reviews} alt="Reviews" />}
      </Titulo>
      <Description cardStyles={card}>{description}</Description>
      {card === 'cardDefault' ? (
        <Link to="/profile">
          <Button cardStyles={card}>Saiba mais</Button>
        </Link>
      ) : (
        <Button cardStyles={card} onClick={onClick}>
          Mais detalhes
        </Button>
      )}
    </CardContent>
  </Card>
)

export default Product
