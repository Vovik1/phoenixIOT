import React, { useRef } from 'react';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import Highcharts from 'highcharts/highstock';
import { getChartConfig } from './getChartConfig';
import { useSetChartSize } from '../hooks/Chart.hook';
import { ChartRef } from '../types';
import styles from './LineChart.module.scss';

HighchartsMore(Highcharts);
// Highcharts.setOptions(styleOptions);

function LineChart() {
  const timestamps = new Array(100).fill(new Date())
  const heaterTemperatures = new Array(100).fill(20.5)

  const heaterData = {
    timestamp: timestamps || [],
    temperature: heaterTemperatures || [],
  };

  const chartRef = useRef<ChartRef>(null);

  const wrapRef = useSetChartSize(chartRef);

  const options = getChartConfig(heaterData);

  return (
    <div className={styles.root} ref={wrapRef}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={options.constructorType}
        options={options}
        ref={chartRef}
      />
    </div>
  );
}

export default LineChart;
