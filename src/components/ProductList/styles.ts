import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section`
  padding: 80px;
`

export const List = styled.ul<Omit<Props, 'foods'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.grid ? '1fr 1fr ' : '320px 320px 320px'};
  column-gap: ${(props) => (props.grid ? '80px' : '32px')};
`
