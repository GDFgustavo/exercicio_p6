import { Link } from 'react-router-dom'

import { ButtonAddCart, CardDetails, Modal, ModalContent } from './styles'
import Close from '../../assets/images/fechar.png'
import { CardContent } from '../CardMenu/styles'
import { CardapioItem } from '../../Pages/Home'
import { Titulo, Description } from '../CardRestaurants/styles'

import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
  onClick?: () => void
  details: CardapioItem
}

export const formataPreco = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProductDetails = ({ onClick, details }: Props) => {
  const dispatch = useDispatch()

  const AddToCart = () => {
    dispatch(add(details))
    dispatch(open())
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
                  <ButtonAddCart onClick={AddToCart}>
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
