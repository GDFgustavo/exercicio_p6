import styled from 'styled-components'
import { cores } from '../../styles'
import { Description, Titulo } from '../CardRestaurants/styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  position: relative;
  margin-bottom: 48px;
  border: 8px solid ${cores.rosa};
  border-radius: 8px;

  img {
    display: block;
    width: 100%;
    height: 217px;
    border-radius: 8px;
    object-fit: cover;
  }
`
export const CardContent = styled.div`
  padding: 0px;
  border: 1px solid ${cores.rosa};

  ${Titulo} {
    color: ${cores.bege};
  }

  ${Description} {
    color: ${cores.bege};
  }
`
export const Button = styled.div`
  font-size: 14px;
  font-weight: 700;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  text-align: center;
  width: 100%;
  padding: 4px 8px;
  cursor: pointer;
`

export const MensageLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  font-size: 18px;
  font-weight: bold;
`
