import styled from 'styled-components'

export const Container = styled.div`
  color: #000;
  background: ${({ theme: theme }) => theme.colors.white};
  border-radius: 18px;
  /* width: 250 */
  padding: 20px;
  margin: 10px 10px;

  div {
    img {
      width: 160px;
      height: 160px;
    }
  }

  /* @media (max-width: 1024px) {
    width: 220px;
    padding: 18px;
    margin: 10px 10px;
  }

  @media (max-width: 430px) {
    width: 300px;
  } */
`
export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: 600;
    span {
      color: ${({ theme: theme }) => theme.colors.yellow300};
    }
  }
`

export const FoodCard = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  p {
    font-size: 14px;
    font-weight: 400;

    &.sold {
      color: ${({ theme: theme }) => theme.colors.gray550};
    }
    &.percentage {
      color: ${({ theme: theme }) => theme.colors.teal};
      font-weight: 600;
    }
  }
`
