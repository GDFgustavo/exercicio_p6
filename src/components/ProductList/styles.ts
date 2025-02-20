import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section`
  padding: 80px;
`

export const List = styled.ul<Omit<Props, 'foods' | 'cardapio'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.grid === 'two' ? '1fr 1fr ' : 'repeat(3, 320px)'};
  column-gap: ${(props) => (props.grid === 'two' ? '80px' : '32px')};
`
