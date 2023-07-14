import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import { Bar, Line, Doughnut } from 'react-chartjs-2'

// Chart Time
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
}

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

const alternatingColors = ['#EB5757', '#F8B602']

const data = {
  labels,
  datasets: [
    {
      label: 'Reviews',
      data: [
        800, 1000, 750, 600, 780, 1000, 750, 780, 1000, 750, 600, 800, 1000, 750, 800, 1000, 750,
      ],
      backgroundColor: labels.map(
        (_label, index) => alternatingColors[index % alternatingColors.length],
      ), // Cor das barras
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 0,
      borderRadius: 5,
      barThickness: 12,
    },
  ],
}

export const BarChart = () => {
  return <Bar options={options} data={data} />
}

// Chart Bar

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options3 = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      max: 100,
      ticks: {
        stepSize: 20,
      },
    },
  },
}

const labels3 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const data3 = {
  labels: labels3,
  datasets: [
    {
      label: 'Dataset 1',
      data: [79, 37, 30, 62, 25, 50, 60, 50, 42, 82, 20, 47],
      backgroundColor: 'rgba(248, 182, 2, 1)',
    },
    {
      label: 'Dataset 2',
      data: [90, 47, 57, 63, 51, 43, 72, 61, 37, 70, 36, 60],
      backgroundColor: 'rgba(235, 87, 87, 1)',
    },
  ],
}

export function ActivityBar() {
  return <Bar options={options3} data={data3} />
}

// Line chart 1

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
)

const options1 = {
  scales: {
    y: {
      grid: {
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        stepSize: 25,
        padding: 5,
      },
    },
    x: {
      grace: 50,
      grid: {
        drawTicks: false,
        spacing: 50,
      },
      ticks: {
        padding: 5,
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 1,
      hoverRadius: 8,
    },
  },
}

const labels1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const data1 = {
  labels: labels1,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [1, 25, 48, 20, 2, 10, 28, 22, 18, 26, 48, 30],
      borderColor: 'rgba(235, 87, 87, 1)',
      backgroundColor: 'rgba(235, 87, 87, 0.5)',
      tension: 0.4,
      borderWidth: 5,
    },
    {
      fill: true,
      label: 'Dataset 2',
      data: [24, 40, 62, 30, 7, 40, 75, 40, 8, 50, 100, 52],
      borderColor: 'rgb(248, 182, 2)',
      backgroundColor: 'rgba(248, 182, 2, 0.5)',
      tension: 0.4,
      borderWidth: 4,
    },
  ],
}

export function LineBar() {
  return (
    <>
      <strong>Order Rate</strong>
      <Line options={options1} data={data1} />
    </>
  )
}

// Chart Doughnut

ChartJS.register(ArcElement, Tooltip, Legend)

const options2 = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  cutout: 70,
  rotation: 50,
}

const data2 = {
  labels: ['Asian Food', 'Fast Food', 'Western Food'],
  datasets: [
    {
      label: '# of Votes',
      data: [27, 50, 23],
      backgroundColor: ['rgba(248, 182, 2, 1)', 'rgba(235, 87, 87, 1)', 'rgba(166, 196, 74, 1)'],
      borderColor: ['rgba(248, 182, 2, 1)', 'rgba(235, 87, 87, 1)', 'rgba(166, 196, 74, 1)'],
      borderWidth: 1,
    },
  ],
}

export function DoughnutChart() {
  return <Doughnut data={data2} options={options2} />
}
