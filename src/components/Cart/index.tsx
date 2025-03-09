import { useEffect, useState } from 'react'
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
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { CardapioItem } from '../../Pages/Home'
import InputMask from 'react-input-mask'
import { clear } from '../../store/reducers/cart'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const [cartCheckout, setCartCheckout] = useState(1)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = (items: CardapioItem[]) => {
    return items.reduce((accumulator, currentItem) => {
      if (currentItem.preco) {
        return (accumulator += currentItem.preco)
      }
      return 0
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().min(5).required(),
      address: Yup.string().min(8).required(),
      city: Yup.string().required(),
      cep: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      cardDisplayName: Yup.string().required(),
      cardNumber: Yup.string().required(),
      cardCode: Yup.string().required(),
      expiresMonth: Yup.string().required(),
      expiresYear: Yup.string().required()
    }),
    onSubmit: (values) => {
      try {
        purchase({
          delivery: {
            receiver: values.receiver,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.cep,
              number: Number(values.number),
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.cardDisplayName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          },
          products: items.map((item) => ({
            id: item.id,
            price: item.preco as number
          }))
        })
        setCartCheckout(4)
      } catch (error) {
        console.error('Erro ao finalizar a compra:', error)
      }
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const finallyCart = () => {
    navigate('/')
    form.resetForm()
    setCartCheckout(1)
    closeCart()
  }

  const checkInputHasError = (filedName: string) => {
    const isTouched = filedName in form.touched
    const isInvalid = filedName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {cartCheckout === 1 && (
          <div>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <CartItem key={item.id}>
                      <img src={item.foto} alt="" />
                      <div>
                        <h3>{item.nome}</h3>
                        <p>{formataPreco(item.preco)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      />
                    </CartItem>
                  ))}
                </ul>
                <Prices>
                  Valor total <span>{formataPreco(getTotalPrice(items))}</span>
                </Prices>
                <Button onClick={() => setCartCheckout(2)}>
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <p className="empyt-text">
                O carrinho está vazio, adicione um produto para continuar com a
                compra
              </p>
            )}
          </div>
        )}
        <form onSubmit={form.handleSubmit}>
          {cartCheckout === 2 && (
            <>
              <h2>Entrega</h2>
              <InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  id="receiver"
                  type="text"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('address') ? 'error' : ''}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </InputGroup>
              <Row>
                <InputGroup>
                  <label htmlFor="cep">CEP</label>
                  <input
                    id="cep"
                    type="text"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cep') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="number">Número</label>
                  <input
                    id="number"
                    type="text"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <InputGroup className="margin-bottom">
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
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
              <h2>
                Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}
              </h2>
              <InputGroup>
                <label htmlFor="cardDisplayName">Nome no cartão</label>
                <input
                  id="cardDisplayName"
                  type="text"
                  name="cardDisplayName"
                  value={form.values.cardDisplayName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('cardDisplayName') ? 'error' : ''
                  }
                />
              </InputGroup>
              <Row>
                <InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('cardNumber') ? 'max-width' : ''
                    }
                    mask="9999 9999 9999 9999"
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    id="cardCode"
                    type="text"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                    mask="999"
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="expiresMonth">Mês de expiração</label>
                  <InputMask
                    id="expiresMonth"
                    type="text"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                    mask="99"
                  />
                </InputGroup>
                <InputGroup className="margin-bottom">
                  <label htmlFor="expiresYear">Ano de expiração</label>
                  <InputMask
                    id="expiresYear"
                    type="text"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    mask="99"
                  />
                </InputGroup>
              </Row>
              <Button
                onClick={() => form.handleSubmit()}
                className="margin-bottom"
              >
                Finalizar o pagamento
              </Button>
              <Button onClick={() => setCartCheckout(2)}>
                Voltar para a edição de endereço
              </Button>
            </>
          )}
        </form>

        {cartCheckout === 4 && (
          <>
            {data ? (
              <>
                <h2>Pedido realizado - {data.orderId}</h2>
                <OrderPlaced>
                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
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
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                </OrderPlaced>
                <Button onClick={finallyCart}>Concluir</Button>
              </>
            ) : (
              ''
            )}
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
