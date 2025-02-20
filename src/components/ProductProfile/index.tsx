import { Link, useParams } from 'react-router-dom'

import { BannerProfile, Imagem, Items, SubTitle, Title } from './styles'

import logo from '../../assets/images/logo.svg'
import banner from '../../assets/images/fundo.png'
import { useEffect, useState } from 'react'
import { Foods } from '../../Pages/Home'

const ProductProfile = () => {
  const { id } = useParams()

  const [foods, setFoods] = useState<Foods>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFoods(res))
  }, [id])

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
            <li>
              <a href="#">0 produto(s) no carrinho</a>
            </li>
          </Items>
        </div>
      </BannerProfile>
      <Imagem style={{ backgroundImage: `url(${foods?.capa})` }}>
        <div className="container">
          <SubTitle>{foods?.tipo}</SubTitle>
          <Title>{foods?.titulo}</Title>
        </div>
      </Imagem>
    </>
  )
}

export default ProductProfile
