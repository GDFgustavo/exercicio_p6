import { Button, Card, CardContent, Description, Infos, Titulo } from './styles'

import Tag from '../Tag'
import { Link } from 'react-router-dom'

import avaliacao from '../../assets/images/avaliacao.png'

type Props = {
  id: number
  title: string
  infos: string
  description: string
  image: string
  reviews: number
}

const CardRestaurants = ({
  id,
  title,
  infos,
  description,
  image,
  reviews
}: Props) => (
  <Card>
    <img src={image} alt="Foods" />
    <Infos>
      <Tag>{infos}</Tag>
    </Infos>
    <CardContent>
      <div>
        <Titulo>{title}</Titulo>
        <div>
          <p>{reviews}</p>
          <img src={avaliacao} alt="" />
        </div>
      </div>
      <Description>{description}</Description>
      <Link to={`/profile/${id}`}>
        <Button>Saiba mais</Button>
      </Link>
    </CardContent>
  </Card>
)

export default CardRestaurants
