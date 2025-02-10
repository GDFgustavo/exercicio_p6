import { Link } from 'react-router-dom'

import { CardDetails, Modal, ModalContent } from './styles'
import PizzaMargue from '../../assets/images/pizza_marguerita.png'
import Close from '../../assets/images/fechar.png'
import { Button, CardContent, Description, Titulo } from '../Product/styles'

type Props = {
  onClick: () => void
}

const ProductDetails = ({ onClick }: Props) => (
  <Modal>
    <ModalContent>
      <div className="container">
        <CardDetails>
          <div className="close" onClick={onClick}>
            <img src={Close} />
          </div>
          <img src={PizzaMargue} alt="Close" />
          <CardContent>
            <Titulo>Pizza Margherita</Titulo>
            <Description>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br /> <br />
              <b>Serve:</b> de 2 a 3 pessoas
            </Description>
            <Link to="#">
              <Button>Adicionar ao carrinho - R$ 60,90</Button>
            </Link>
          </CardContent>
        </CardDetails>
      </div>
    </ModalContent>
    <div className="overlay" onClick={onClick}></div>
  </Modal>
)

export default ProductDetails
