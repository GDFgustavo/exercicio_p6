import { Link } from 'react-router-dom'

import { BannerProfile, Imagem, Items, SubTitle, Title } from './styles'

import logo from '../../assets/images/logo.svg'
import banner from '../../assets/images/fundo.png'
import DolceVita from '../../assets/images/la_dolce_vita_trattoria.png'

const ProductProfile = () => (
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
          <li>
            <a href="#">0 produto(s) no carrinho</a>
          </li>
        </Items>
      </div>
    </BannerProfile>
    <Imagem style={{ backgroundImage: `url(${DolceVita})` }}>
      <div className="container">
        <SubTitle>Italiana</SubTitle>
        <Title>La Dolce Vita Trattoria</Title>
      </div>
    </Imagem>
  </>
)

export default ProductProfile
