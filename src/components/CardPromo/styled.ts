import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  color: #000;
  background: ${({ theme: theme }) => theme.colors.white};
  border-radius: 18px;
  /* width: 250px; */
  padding: 20px;
  margin: 10px 10px;

  /* @media (max-width: 1024px) {
    width: 220px;
    padding: 18px;
    margin: 10px 10px;
  }

  @media (max-width: 430px) {
    width: 300px;
  } */
`

export const Left = styled.div`
  position: relative;
  div {
    &.off {
      height: 30px;
      span {
        position: absolute;
        font-size: 12px;
        color: ${({ theme: theme }) => theme.colors.white};
        left: -20px;
        top: 0;
        background: ${({ theme: theme }) => theme.colors.red};
        padding: 5px 17px 5px 9px;
        border-radius: 0 5px 5px 0;
      }
    }

    &.price {
      display: flex;
      align-items: end;
      gap: 6px;
      p {
        font-size: 16px;
        font-weight: 600;
        span {
          color: ${({ theme: theme }) => theme.colors.yellow300};
        }

        &.desc {
          font-size: 14px;
          font-weight: 400;
          color: ${({ theme: theme }) => theme.colors.gray550};
          text-decoration: line-through;
        }
      }
    }
  }
`
