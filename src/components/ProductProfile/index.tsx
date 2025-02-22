import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Link, useParams } from 'react-router-dom'

import { BannerProfile, Imagem, Items, SubTitle, Title } from './styles'

import logo from '../../assets/images/logo.svg'
import banner from '../../assets/images/fundo.png'
import { open } from '../../store/reducers/cart'
import { useGetMenuQuery } from '../../services/api'

const ProductProfile = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const { id } = useParams()
  const { data: menu } = useGetMenuQuery(id ?? '')

  const openCart = () => {
    dispatch(open())
  }

  if (menu) {
    return (
      <>
        <BannerProfile style={{ backgroundImage: `url(${banner})` }}>
          <div className="container">
            <Items>
              <li>
                <h4>Restaurantes</h4>
              </li>
              <li>
                <Link to="/">
                  <img src={logo} alt="Efood" />
                </Link>
              </li>
              <li className="cart" onClick={openCart}>
                {items.length} produto(s) no carrinho
              </li>
            </Items>
          </div>
        </BannerProfile>
        <Imagem style={{ backgroundImage: `url(${menu.capa})` }}>
          <div className="container">
            <SubTitle>{menu.tipo}</SubTitle>
            <Title>{menu.titulo}</Title>
          </div>
        </Imagem>
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default ProductProfile
