import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 5px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: flex-start;
  max-width: 84rem;
  margin: auto;

  @media (max-width: 860px) {
    max-width: 42rem;
  }

  @media (max-width: 680px) {
    justify-content: center;
  }
`
