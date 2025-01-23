import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const Background = styled.div`
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    margin-top: 40px;
    margin-bottom: 140px;
  }
`

export const Titulo = styled.h2`
  width: 539px;
  font-size: 36px;
  margin-bottom: 40px;

  font-weight: 900;
  text-align: center;
  color: ${cores.rosa};
`
