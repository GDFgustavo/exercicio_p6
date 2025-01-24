import { BackgroundFooter, Links, Link } from './styles'
import logo from '../assets/images/logo.svg'
import logoFacebook from '../assets/images/logo_facebook.png'
import logoInstagram from '../assets/images/logo_instagram.png'
import logoTwitter from '../assets/images/logo_twitter.png'

const Footer = () => (
  <BackgroundFooter>
    <div>
      <img src={logo} alt="Efood" />
    </div>
    <div>
      <Links>
        <li>
          <Link>
            <img src={logoInstagram} alt="Instagram" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={logoFacebook} alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={logoTwitter} alt="Twitter" />
          </Link>
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
  </BackgroundFooter>
)

export default Footer
