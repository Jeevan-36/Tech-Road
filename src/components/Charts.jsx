import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = ({ countTechnologyCompletion }) => {
  const completedCount = countTechnologyCompletion();
  const [dsaCompletedCount, webdevCompletedCount] = completedCount;

  const data = {
    labels: ['DSA', 'Web Development'],
    datasets: [
      {
        label: 'Completed Topics',
        data: [dsaCompletedCount, webdevCompletedCount],
        backgroundColor: 'rgba(0, 128, 0, 0.7)',
        borderColor: 'rgba(0, 128, 0, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total Topics',
        data: [447, 120],
        backgroundColor: 'rgba(0, 128, 0, 0.3)',
        borderColor: 'rgba(0, 128, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Arial, sans-serif',
            size: 12,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 128, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
            family: 'Arial, sans-serif',
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 14,
            family: 'Arial, sans-serif',
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg mt-5">
      <h2 className="text-center text-lg font-bold mb-4 text-gray-800 dark:text-white">Completed vs Total Topics</h2>
      <div className="w-full h-72">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Charts;
