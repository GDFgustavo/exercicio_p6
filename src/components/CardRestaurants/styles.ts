import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  position: relative;
  margin-bottom: 48px;

  img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid ${cores.rosa};
  height: 210px;

  div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 18px;
      font-weight: 700;
      color: ${cores.rosa};
      margin-right: 8px;
    }
  }

  img {
    width: 21px;
    height: 21px;
  }
`

export const Titulo = styled.h2`
  color: ${cores.rosa};
  font-size: 16px;
  font-weight: 700;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const Description = styled.p`
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Button = styled.button`
  display: inline-block;
  background-color: ${cores.rosa};
  color: ${cores.bege};
  font-size: 14px;
  font-weight: 700;
  align-self: flex-end;
  padding: 4px 8px;
  cursor: pointer;
`
