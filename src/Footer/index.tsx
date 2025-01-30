import { Container, Links } from './styles'
import logo from '../assets/images/logo.svg'
import logoFacebook from '../assets/images/logo_facebook.png'
import logoInstagram from '../assets/images/logo_instagram.png'
import logoTwitter from '../assets/images/logo_twitter.png'

const Footer = () => (
  <Container>
    <div>
      <img src={logo} alt="Efood" />
    </div>
    <div>
      <Links>
        <li>
          <a>
            <img src={logoInstagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a>
            <img src={logoFacebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a>
            <img src={logoTwitter} alt="Twitter" />
          </a>
        </li>
      </Links>
    </div>
    <div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
