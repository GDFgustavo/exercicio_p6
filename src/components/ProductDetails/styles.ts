import styled from 'styled-components'
import {
  Button,
  Card,
  CardContent,
  Description,
  Titulo
} from '../Product/styles'
import { cores } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
`

export const CardDetails = styled(Card)`
  display: flex;
  margin-top: 0px;
  border: 32px solid ${cores.rosa};
  position: relative;

  ${CardContent} {
    padding-top: 0;
  }

  ${Titulo} {
    margin-top: 0;
    color: ${cores.branco};
  }

  ${Description} {
    width: 656px;
    height: 176px;
    margin-bottom: 0px;
    color: ${cores.branco};
  }

  ${Button} {
    margin-top: 20px;
  }

  .close {
    position: absolute;
    top: -24px;
    right: -24px;
    cursor: pointer;
  }

  > img {
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
  }
`
