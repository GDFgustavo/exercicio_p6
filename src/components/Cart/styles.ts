import styled from 'styled-components'
import { cores } from '../../styles'

import lixeira from '../../assets/images/lixeira.svg'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  .cart {
    color: ${cores.bege};
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 8px 32px 8px;
  max-width: 360px;
  width: 100%;
  overflow: auto;
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  padding: 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    border-radius: 4px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px 16px;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.bege};
`
