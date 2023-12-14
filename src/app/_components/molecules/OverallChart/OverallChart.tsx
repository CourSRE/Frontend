import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRation: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    
  },
};

const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Score',
      data: labels.map(() => Math.random()),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
type TProps = {}

export const OverallChart: React.FC<TProps> = () => {
  return (
    <Line options={options} data={data} />
  )
}