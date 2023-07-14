import styled from 'styled-components'

export const ContainerHerder = styled.div`
  display: flex;
`

export const MainDashboard = styled.section`
  display: block;
  width: 100%;
  padding: 2rem 1.5rem;

  div {
    &.head {
      display: flex;
      margin-bottom: 20px;
    }
  }

  div {
    &.mb {
      margin-bottom: 15px;
    }
  }

  @media (max-width: 1024px) {
    div {
      &.head {
        margin-right: 35px;
      }
    }
  }
`

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
  }
`
