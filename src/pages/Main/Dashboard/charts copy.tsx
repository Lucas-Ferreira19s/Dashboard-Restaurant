import { Chart } from 'react-google-charts'

const options2 = {
  height: 140,
  chartArea: {
    height: '100%',
    width: '100%',
  },
  pieHole: 0.6,
  colors: ['#F8B602', '#EB5757', '#A6C44A'],
  legend: 'none',
  pieSliceText: 'none',
  backgroundColor: 'transparent',
}

const data2 = [
  ['Categoria', 'Quantidade'],
  ['Asian Food', 27],
  ['Fast Food', 50],
  ['Western Food', 23],
]

export function DoughnutChart() {
  return <Chart chartType='PieChart' data={data2} options={options2} />
}

const options = {
  height: 200,
  chartArea: {
    height: '80%',
    width: '90%',
  },
  vAxis: {
    ticks: [0, 25, 50, 75, 100],
    baselineColor: '#ccc',
  },
  legend: {
    position: 'none',
  },
  series: {
    0: {
      pointShape: 'circle',
      pointSize: 1,
      pointSizeHover: 8,
    },
  },
  lineWidth: 4,
  seriesType: 'area',
  colors: ['rgb(235, 87, 87)', 'rgb(248, 182, 2)'],
  backgroundColor: 'transparent',
  areaOpacity: 0.5,
  curveType: 'function',
}

const data = [
  ['Month', 'Dataset 1', 'Dataset 2'],
  ['Jan', 1, 24],
  ['Feb', 25, 40],
  ['Mar', 48, 62],
  ['Apr', 20, 30],
  ['May', 2, 7],
  ['Jun', 10, 40],
  ['Jul', 28, 75],
  ['Aug', 22, 40],
  ['Sep', 18, 8],
  ['Oct', 26, 50],
  ['Nov', 48, 100],
  ['Dec', 30, 52],
]

export function LineBar() {
  return <Chart chartType='AreaChart' options={options} data={data} />
}

const option = {
  width: 750,
  height: 250,
  chartArea: {
    height: '80%',
    width: '93%',
  },
  legend: {
    position: 'none',
  },
  title: '',
  hAxis: {
    gridlines: {
      color: 'transparent',
    },
  },
  vAxis: {
    maxValue: 100,
    ticks: [0, 20, 40, 60, 80, 100],
  },
  colors: ['rgb(248, 182, 2)', 'rgb(235, 87, 87)'],
  backgroundColor: 'transparent',
}

const dat = [
  ['Month', 'Dataset 1', 'Dataset 2'],
  ['Jan', 79, 90],
  ['Feb', 37, 47],
  ['Mar', 30, 57],
  ['Apr', 62, 63],
  ['May', 25, 51],
  ['Jun', 50, 43],
  ['Jul', 60, 72],
  ['Aug', 50, 61],
  ['Sep', 42, 37],
  ['Oct', 82, 70],
  ['Nov', 20, 36],
  ['Dec', 47, 60],
]

export function ActivityBar() {
  return <Chart chartType='ColumnChart' options={option} data={dat} />
}

// const optionsBar = {
//   height: 80,
//   legend: 'none',
//   hAxis: {
//     gridlines: {
//       color: 'transparent',
//     },
//     labels: [],
//   },
//   vAxis: {
//     gridlines: {
//       color: 'transparent',
//     },
//     ticks: [],
//   },
//   chartArea: {
//     width: '100%',
//     height: 80,
//   },
//   series: {
//     0: {
//       borderRadius: 5,
//     },
//   },
// }

// const dataBar = [
//   ['Label', 'Reviews', { role: 'style' }],
//   ['', 800, 'rgb(248, 182, 2)'],
//   ['', 1000, 'rgb(235, 87, 87)'],
//   ['', 750, 'rgb(248, 182, 2)'],
//   ['', 600, 'rgb(235, 87, 87)'],
//   ['', 780, 'rgb(248, 182, 2)'],
//   ['', 1000, 'rgb(235, 87, 87)'],
//   ['', 750, 'rgb(248, 182, 2)'],
//   ['', 780, 'rgb(235, 87, 87)'],
//   ['', 1000, 'rgb(248, 182, 2)'],
//   ['', 750, 'rgb(235, 87, 87)'],
//   ['', 600, 'rgb(248, 182, 2)'],
//   ['', 800, 'rgb(235, 87, 87)'],
//   ['', 1000, 'rgb(248, 182, 2)'],
//   ['', 750, 'rgb(235, 87, 87)'],
//   ['', 800, 'rgb(248, 182, 2)'],
//   ['', 1000, 'rgb(235, 87, 87)'],
//   ['', 750, 'rgb(248, 182, 2)'],
// ]

// export const BarChart = () => {
//   return <Chart chartType='ColumnChart' options={optionsBar} data={dataBar} />
// }

export const LineChartTwo = () => {
  const data = [
    ['Ano', 'Vendas'],
    ['', 550],
    ['', 700],
    ['', 500],
    ['', 650],
    ['', 450],
    ['', 550],
    ['', 480],
  ]

  const optionsLine = {
    width: 340,
    height: 80,
    legend: 'none',
    hAxis: {
      gridlines: {
        color: 'transparent',
      },
    },
    vAxis: {
      gridlines: {
        color: 'transparent',
      },
      ticks: [],
      baselineColor: 'transparent',
    },
    chartArea: {
      width: '100%',
      height: '100%',
    },
    curveType: 'function',
    colors: ['rgb(248, 182, 2)'],
    backgroundColor: 'transparent',
  }

  return <Chart width={50} height={100} chartType='LineChart' data={data} options={optionsLine} />
}

export const LineChartTree = () => {
  const data = [
    ['Ano', 'Vendas'],
    ['', 550],
    ['', 700],
    ['', 500],
    ['', 650],
    ['', 450],
    ['', 550],
    ['', 480],
  ]

  const optionsLine = {
    width: 340,
    height: 80,
    legend: 'none',
    hAxis: {
      gridlines: {
        color: 'transparent',
      },
    },
    vAxis: {
      gridlines: {
        color: 'transparent',
      },
      ticks: [],
      baselineColor: 'transparent',
    },
    chartArea: {
      width: '100%',
      height: '100%',
    },
    curveType: 'function',
    colors: ['rgb(235, 87, 87)'],
    backgroundColor: 'transparent',
  }

  return <Chart width={50} height={100} chartType='LineChart' data={data} options={optionsLine} />
}
