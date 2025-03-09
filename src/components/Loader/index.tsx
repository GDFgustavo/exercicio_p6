import { PulseLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <PulseLoader color={cores.bege} />
  </Container>
)

export default Loader
