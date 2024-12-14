'use client';

import { useRef } from 'react';
import { PopulationData } from '@/types/country';
import NoDataMessage from './NoData';
import ChartConfiguration from './ChartConfiguration';

interface PopulationChartProps {
  populationData: PopulationData;
}

const PopulationChart: React.FC<PopulationChartProps> = ({
  populationData,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const populationArray = populationData?.populationCounts;

  if (!populationArray) {
    return <NoDataMessage />;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Population Over Time
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        This chart displays the population changes of the country from the
        earliest recorded year to the most recent available year.
      </p>
      <div className="relative h-96">
        <canvas ref={chartRef} />
      </div>
      <ChartConfiguration
        chartRef={chartRef}
        populationArray={populationArray}
      />
    </div>
  );
};

export default PopulationChart;
