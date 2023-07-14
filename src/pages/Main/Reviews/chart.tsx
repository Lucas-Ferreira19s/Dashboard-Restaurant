import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        font: {
          weight: 'bold',
          size: 16,
        },
      },
    },
    y: {
      display: false,
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
}

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// Array de cores alternadas
const alternatingColors = ['#EB5757', '#F8B602']

export const data = {
  labels,
  datasets: [
    {
      label: 'Reviews',
      data: [1000, 450, 420, 487, 330, 540, 650],
      backgroundColor: labels.map(
        (_label, index) => alternatingColors[index % alternatingColors.length],
      ), // Cor das barras
      borderColor: 'rgba(75, 192, 192, 1)', // Cor das bordas das barras
      borderWidth: 0, // Largura das bordas das barras
      borderRadius: 10,
    },
  ],
}

export function BarChart() {
  return <Bar options={options} data={data} />
}
