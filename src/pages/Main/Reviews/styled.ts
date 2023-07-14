import styled from 'styled-components'

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 2rem 1.875rem;

  div {
    &.userMobile {
      display: none;
    }
  }

  @media (max-width: 460px) {
    div {
      &.userMobile {
        display: block;
      }
      &.userMenu {
        display: none;
      }
    }
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 0rem 1.875rem 2rem 1.875rem;
`

export const ContainerReviewCharts = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 550px 550px;
  margin: auto;
  gap: 30px;
`
export const CardReviewCharts = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 20px;

  div {
    &.head-right {
      margin-bottom: 15px;
    }
    &.index {
      display: flex;
      margin-top: 5px;
      align-items: center;
      gap: 6px;
      p {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.teal};
        &.percentage {
          color: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }

  p {
    &.title-card {
      font-weight: bold;
    }
  }
`

export const Review = styled.div`
  display: flex;
  align-items: end;
  p {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.gray550};
    &.number {
      font-weight: bold;
      font-size: 22px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
  div {
    &:last-child {
      margin-bottom: 6px;
      margin-left: 5px;
    }
  }
`

export const CardsReviews = styled.div`
  margin-top: 20px;
  div {
    &.input {
      margin: 20px 0;
      display: flex;
      align-items: center;
      padding: 10px;
      background: ${({ theme }) => theme.colors.white};
      border-radius: 12px;
      width: 450px;
      height: 45px;
    }
    &.grid-card {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* Define 4 colunas com largura igual */
      grid-gap: 10px; /* Define o espaçamento entre os elementos do grid */
    }
  }

  input {
    border: none;
    width: 100%;
    padding-left: 8px;
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray550};
    }
    &:focus {
      outline: none;
    }
  }
`
