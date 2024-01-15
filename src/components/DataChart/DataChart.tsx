import React, { useEffect, useRef } from "react";
import { months } from "@/components/helper/Util";
import { Chart, registerables, ChartConfiguration } from 'chart.js/auto';

const DataChart = (props: ChartConfiguration) => {
  const { data, options } = props;
  const chartRef = useRef<HTMLCanvasElement>(null);

  const labels = months({ count: 7 });
  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: 'bar', // Set the chart type (bar, line, etc.)
        data: {
          ...props.data, // You might want to modify this part based on your actual data structure
          datasets: [
            {
              ...props.data?.datasets?.[0], // You might want to modify this part based on your actual data structure
              backgroundColor: 'rgba(255, 99, 132, 0.2)', // Set the background color
              borderColor: 'rgba(255, 99, 132, 1)', // Set the border color
              borderWidth: 1, // Set the border width
            },
          ],
        },
        options: {
          ...options,
        },
      });
      return () => {
        chart.destroy();
      };
    }
  }, [data, options, props]);

  return <canvas ref={chartRef} />;
};

Chart.register(...registerables);

export default DataChart;
