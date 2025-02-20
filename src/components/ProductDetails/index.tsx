import { Link } from 'react-router-dom'

import { ButtonAddCart, CardDetails, Modal, ModalContent } from './styles'
import Close from '../../assets/images/fechar.png'
import { CardContent } from '../CardMenu/styles'
import { CardapioItem } from '../../Pages/Home'
import { Titulo, Description } from '../CardRestaurants/styles'

type Props = {
  onClick?: () => void
  details: CardapioItem
}

const ProductDetails = ({ onClick, details }: Props) => {
  const formataPreco = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <Modal>
      <ModalContent>
        <div className="container">
          <>
            <CardDetails>
              <div className="close" onClick={onClick}>
                <img src={Close} alt="Ìcone de fechar" />
              </div>
              <img src={details.foto} alt="" />
              <CardContent>
                <Titulo>{details.nome}</Titulo>
                <Description>
                  {details.descricao} <br /> <br />
                  <b>Serve:</b> {details.porcao}
                </Description>
                <Link to="#">
                  <ButtonAddCart>
                    Adicionar ao carrinho - {formataPreco(details.preco)}
                  </ButtonAddCart>
                </Link>
              </CardContent>
            </CardDetails>
          </>
        </div>
      </ModalContent>
      <div className="overlay" onClick={onClick}></div>
    </Modal>
  )
}

export default ProductDetails
