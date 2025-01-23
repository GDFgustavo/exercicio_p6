import { Button, Card, Description, Infos, Titulo } from './styles'

import Tag from '../Tag'

type Props = {
  title: string
  infos: string[]
  description: string
  image: string
  reviews: string
}

const Product = ({ title, infos, description, image, reviews }: Props) => (
  <Card>
    <img src={image} alt="Efood" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <div className="container">
      <Titulo>
        {title}
        <img src={reviews} alt="Reviews" />
      </Titulo>
      <Description>{description}</Description>
      <Button>Saiba mais</Button>
    </div>
  </Card>
)

export default Product
