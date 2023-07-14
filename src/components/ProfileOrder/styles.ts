import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 10px;

  div {
    h5 {
      font-weight: bold;
      font-size: 16px;
    }
    p {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray550};
    }
  }
`
