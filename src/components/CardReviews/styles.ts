import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 1rem;
  div {
    &.info {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 0.5rem 0;
    }
    &.description {
      font-size: 13px;
      color: ${({ theme }) => theme.colors.gray550};
    }
  }
  p {
    &.label {
      font-weight: 500;
      margin-top: 10px;
    }
  }
`
