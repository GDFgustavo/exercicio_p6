import styled from 'styled-components'
import { cores } from '../styles'

export const Container = styled.footer`
  height: 298px;
  background-color: ${cores.bege};

  div {
    display: flex;
    justify-content: center;
  }

  img {
    margin-top: 32px;
  }

  p {
    font-size: 10px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    width: 480px;
    margin-top: 80px;
    color: ${cores.rosa};
  }
`

export const Links = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin-right: 8px;
  }

  a {
    text-decoration: none;
  }
`
