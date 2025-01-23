import logo from '../../assets/images/logo.svg'
import banner from '../../assets/images/fundo.png'
import { Background, Titulo } from './styles'

const Header = () => (
  <Background style={{ backgroundImage: `url(${banner})` }}>
    <div>
      <img src={logo} alt="Efood" />
    </div>
    <div>
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </Background>
)

export default Header
