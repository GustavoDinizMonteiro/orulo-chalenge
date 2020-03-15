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

export const SpacedRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 82rem;
  margin: auto;

  @media (max-width: 680px) {
    align-items: center;
    flex-direction: column;
  }
`

export const Paragraph = styled.p`
  color: gray;
`