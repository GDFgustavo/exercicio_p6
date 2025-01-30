import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

type PropsStyles = {
  cardStyles: boolean
}

export const Card = styled.div<PropsStyles>`
  background-color: ${(props) =>
    props.cardStyles ? cores.branco : cores.rosa};
  position: relative;
  margin-bottom: 48px;
  border: 8px solid ${(props) => (props.cardStyles ? '0px' : cores.rosa)};

  .container {
    padding: 8px;
    border: 1px solid ${cores.rosa};
  }

  img {
    display: block;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h2<PropsStyles>`
  display: flex;
  justify-content: space-between;
  color: ${(props) => (props.cardStyles ? cores.rosa : cores.bege)};
  font-size: 16px;
  font-weight: 700;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const Description = styled.p<PropsStyles>`
  color: ${(props) => (props.cardStyles ? cores.rosa : cores.bege)};
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Button = styled.div<PropsStyles>`
  background-color: ${(props) => (props.cardStyles ? cores.rosa : cores.bege)};
  color: ${(props) => (props.cardStyles ? cores.bege : cores.rosa)};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 8px;
  display: inline-block;
  cursor: pointer;
`
