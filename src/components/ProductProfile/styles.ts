import styled from 'styled-components'
import { Background } from '../../components/Header/styles'
import { cores } from '../../styles'

export const BannerProfile = styled(Background)`
  width: 100%;
  height: 170px;
  color: ${cores.rosa};

  a {
    color: ${cores.rosa};
    text-decoration: none;
  }

  img {
    margin: 0;
  }
`
export const Items = styled.ul`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding-top: 40px;
  column-gap: 270px;
  font-weight: bold;
`

export const Imagem = styled.div`
  height: 280px;
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .container {
    z-index: 1;
    position: relative;
  }
`

export const SubTitle = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
  padding-top: 25px;
  margin-bottom: 156px;
  z-index: 1;
`

export const Title = styled.h2`
  font-size: 32px;
  color: ${cores.branco};
`
