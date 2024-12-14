import { useEffect } from 'react';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  ChartData,
} from 'chart.js';
import { PopulationCount } from '@/types/country';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController
);

interface ChartConfigurationProps {
  chartRef: React.RefObject<HTMLCanvasElement | null>;
  populationArray: PopulationCount[];
}

const ChartConfiguration: React.FC<ChartConfigurationProps> = ({
  chartRef,
  populationArray,
}) => {
  useEffect(() => {
    if (!chartRef.current || !populationArray) return;

    const chartData: ChartData<'line'> = {
      labels: populationArray.map((item) => item.year),
      datasets: [
        {
          label: 'Population Over Time',
          data: populationArray.map((item) => item.value),
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: 'rgb(75, 192, 192)',
          tension: 0.3,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top' as const,
          labels: {
            color: '#374151',
            font: {
              size: 14,
              family: 'Inter, sans-serif',
            },
          },
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#374151',
            font: {
              size: 12,
              family: 'Inter, sans-serif',
            },
          },
          grid: {
            color: 'rgba(209, 213, 219, 0.3)',
          },
        },
        y: {
          ticks: {
            color: '#374151',
            font: {
              size: 12,
              family: 'Inter, sans-serif',
            },
          },
          grid: {
            color: 'rgba(209, 213, 219, 0.3)',
          },
        },
      },
    };

    const chartInstance = new ChartJS(chartRef.current, {
      type: 'line',
      data: chartData,
      options: chartOptions,
    });

    return () => {
      chartInstance.destroy();
    };
  }, [chartRef, populationArray]);

  return null;
};

export default ChartConfiguration;
