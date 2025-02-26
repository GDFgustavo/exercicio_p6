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

  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
    color: ${cores.bege};
  }

  .margin-bottom {
    margin-bottom: 16px;
  }
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

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`

export const InputGroup = styled.div`
  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${cores.bege};
  }

  input {
    padding: 8px;
    height: 32px;
    margin-bottom: 8px;
    background-color: ${cores.bege};
    border: 1px solid ${cores.bege};
    color: #4b4b4b;
    width: 100%;
    font-size: 14px;
    font-weight: 700;

    &.max-width {
      width: 228px;
    }
  }
`

export const OrderPlaced = styled.div`
  margin-bottom: 24px;

  p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 24px;
    color: ${cores.bege};
  }
`
