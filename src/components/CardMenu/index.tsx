import { Titulo, Description } from '../CardRestaurants/styles'
import { Button, Card, CardContent } from './styles'

type Props = {
  title: string
  description: string
  image: string
  onClick: () => void
}

const CardMenu = ({ title, description, image, onClick }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 121) {
      return description.slice(0, 118) + '...'
    }
    return description
  }
  return (
    <Card>
      <img src={image} alt="Foods" />
      <CardContent>
        <Titulo>{title}</Titulo>
        <Description>{getDescription(description)}</Description>
        <Button onClick={onClick}>Mais detalhes</Button>
      </CardContent>
    </Card>
  )
}

export default CardMenu
