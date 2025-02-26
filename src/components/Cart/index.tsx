import { useState } from 'react'
import {
  CartContainer,
  CartItem,
  InputGroup,
  OrderPlaced,
  Overlay,
  Prices,
  Row,
  Sidebar
} from './styles'

import { Button } from '../CardMenu/styles'

import { close, remove } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formataPreco } from '../ProductDetails'

const Cart = () => {
  const [cartCheckout, setCartCheckout] = useState(1)
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {cartCheckout === 1 && (
          <div>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt="" />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formataPreco(item.preco)}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            {items.length > 0 ? (
              ''
            ) : (
              <p className="cart">{items.length} produtos (s) no carrinho</p>
            )}
            <Prices>
              Valor total <span>{formataPreco(getTotalPrice())}</span>
            </Prices>
            <Button onClick={() => setCartCheckout(2)}>
              Continuar com a entrega
            </Button>
          </div>
        )}

        {cartCheckout === 2 && (
          <>
            <h2>Entrega</h2>
            <InputGroup>
              <label htmlFor="recipient">Quem irá receber</label>
              <input id="recipient" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input id="address" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input id="city" type="text" />
            </InputGroup>
            <Row>
              <InputGroup>
                <label htmlFor="cep">CEP</label>
                <input id="cep" type="number" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="number">Número</label>
                <input id="number" type="text" />
              </InputGroup>
            </Row>
            <InputGroup className="margin-bottom">
              <label htmlFor="complement">Complemento (opcional)</label>
              <input id="complement" type="text" />
            </InputGroup>
            <Button
              className="margin-bottom"
              onClick={() => setCartCheckout(3)}
            >
              Continuar com o pagamento
            </Button>
            <Button onClick={() => setCartCheckout(1)}>
              Voltar para o carrinho
            </Button>
          </>
        )}

        {cartCheckout === 3 && (
          <>
            <h2>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h2>
            <InputGroup>
              <label htmlFor="cardDisplayName">Nome no cartão</label>
              <input id="cardDisplayName" type="text" />
            </InputGroup>
            <Row>
              <InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input className="max-width" id="cardNumber" type="text" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cardCode">CVV</label>
                <input id="cardCode" type="number" />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input id="expiresMonth" type="number" />
              </InputGroup>
              <InputGroup className="margin-bottom">
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input id="expiresYear" type="text" />
              </InputGroup>
            </Row>
            <Button
              className="margin-bottom"
              onClick={() => setCartCheckout(4)}
            >
              Finalizar o pagamento
            </Button>
            <Button onClick={() => setCartCheckout(2)}>
              Voltar para a edição de endereço
            </Button>
          </>
        )}

        {cartCheckout === 4 && (
          <>
            <h2>Pedido realizado - {'{ORDER_ID}'}</h2>
            <OrderPlaced>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </OrderPlaced>
            <Button onClick={() => setCartCheckout(1)}>Concluir</Button>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
