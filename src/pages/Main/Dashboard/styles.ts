import styled from 'styled-components'

type GridItemProps = {
  x: string
  y: string
}

export const Container = styled.div`
  padding: 2rem 1.875rem;
`

export const HeadDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  div {
    &.top-left {
      display: flex;
      align-items: center;
      gap: 40px;
    }
    &.input {
      display: flex;
      align-items: center;
      padding: 10px;
      background: ${({ theme }) => theme.colors.white};
      border-radius: 12px;
      width: 450px;
      height: 45px;
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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Define 3 colunas com largura igual */
  grid-template-rows: repeat(6, 140px); /* Define 4 linhas com altura igual */
  grid-gap: 20px; /* Define o espaçamento entre os elementos do grid */

  div {
    &.bar-chart {
      padding: 10px;
      p {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.gray550};
      }
      canvas {
        height: 97px !important;
      }
    }
    &.flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
    &.card-one {
      padding: 25px 0 25px 20px;
    }
    &.charts-line {
      padding: 10px;
      padding-bottom: 30px;
    }
  }
`
export const GridItem = styled.div<GridItemProps>`
  background-color: ${({ theme }) => theme.colors.white}; /* Define a cor de fundo dos elementos */
  border-radius: 15px;

  /* Definir o tamanho e posicionamento dos elementos */
  grid-column: ${(props) => props.x};
  grid-row: ${(props) => props.y};

  div {
    &.send {
      display: flex;
      padding: 15px;
      background-color: ${({ theme }) => theme.colors.yellow300};
      gap: 10px;
      color: ${({ theme }) => theme.colors.white};
      border-radius: 10px 0 0 10px;
    }
    &.card-primary {
      width: 25%;
      strong {
        font-size: 24px;
      }
    }
    &.card-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
    &.index {
      display: flex;
      margin-top: 5px;
      align-items: center;
      gap: 6px;
      p {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.teal};
        font-size: 14px;
        &.percentage {
          color: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }
`
export const Overview = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 15px;

  div {
    &.icon-overview {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid ${({ theme }) => theme.colors.gray400};
      padding: 5px;
      border-radius: 8px;
      width: 30px;
      height: 30px;
    }
  }
`
