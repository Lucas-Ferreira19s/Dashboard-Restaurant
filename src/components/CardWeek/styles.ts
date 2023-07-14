import styled from 'styled-components'

export const Container = styled.div`
  color: #000;
  background: ${({ theme: theme }) => theme.colors.white};
  border-radius: 18px;
  padding: 20px;
  width: 300px;
  margin: 10px 5px;

  /* @media (max-width: 1024px) {
    width: 220px;
    padding: 18px;
    margin: 10px 10px;
  }

  @media (max-width: 430px) {
    width: 300px;
  } */
`

export const HeadCard = styled.div`
  display: flex;
  gap: 10px;

  p {
    &.price {
      font-size: 16px;
      font-weight: 600;
      span {
        color: ${({ theme: theme }) => theme.colors.yellow300};
      }
    }
  }
`

export const DescriptionCard = styled.div`
  p {
    color: ${({ theme: theme }) => theme.colors.gray550};
    font-size: 14px;
  }
`
