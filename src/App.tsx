import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './Footer'
import Home from './Pages/Home'
import { GlobalCss } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Home />
      <Footer />
    </BrowserRouter>
  )
}

export default App
