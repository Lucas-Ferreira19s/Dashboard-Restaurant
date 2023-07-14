import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray550};

  padding: 5px 20px;
  border-radius: 10px;

  h4 {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
  }

  div {
    &.right {
      display: flex;
      align-items: center;
      p {
        font-size: 16px;
        font-weight: 600;
        margin-right: 10px;
        span {
          color: ${({ theme: theme }) => theme.colors.yellow300};
        }
      }
    }
  }
`
