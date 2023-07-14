import styled from 'styled-components'

interface Props {
  display?: boolean
}

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
  padding: 2rem 1.875rem 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 30px;

  @media (max-width: 1024px) {
    column-gap: 10px;
    padding: 1rem 1rem;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 0 1.875rem 2rem;
  }

  @media (max-width: 450px) {
    padding: 0 1rem 2rem;
  }
`

export const Conversations = styled.div<Props>`
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 15px;

  h4 {
    margin: 5px 0;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    display: ${({ display }) => (display ? 'none' : 'block')};
  }
`

export const ContainerMessage = styled.div<Props>`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 15px;

  @media (max-width: 768px) {
    display: ${({ display }) => (display ? 'block' : 'none')};
  }

  hr {
    margin: 20px 0;
  }

  svg {
    &.icons {
      color: ${({ theme }) => theme.colors.gray550};
    }
  }

  div {
    &.flexEnd {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 440px;
    }
  }
`

export const ContainerOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`

export const DetailsOrder = styled.div`
  border: solid 1px #dbdbdb;
  padding: 20px;
  border-radius: 15px;
  margin-top: 20px;
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    &.total {
      font-size: 18px;
      font-weight: 500;
    }
    &.price {
      font-size: 22px;
      font-weight: 600;
      span {
        color: ${({ theme: theme }) => theme.colors.yellow300};
      }
    }
  }
`
export const MainDetails = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    &.address {
      width: 50%;
    }
  }
`

export const FoodDetails = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
  padding: 20px;
  padding-bottom: 0;
`
