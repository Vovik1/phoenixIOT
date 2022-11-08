import React, { useMemo } from 'react';
import styles from './Info.module.scss';
import { Area, Card, ColumnChart } from '../../../components';
import { AreaChartTypes } from '../../../components/Charts/types';
import { Progress } from 'antd';
// import { OutputControlledData } from 'services/output/OutputTypes';

// interface InfoProps {
//   controlledData: OutputControlledData;
// }

function Info() {
  const timestamps = new Array(100).fill(new Date())
  const heaterTemperatures = new Array(100).fill(20.5)
  const tankLevels = new Array(100).fill(35.7)

  const heaterData = useMemo(
    () => ({
      timestamp: timestamps.slice(0, 20),
      temperature: heaterTemperatures.slice(0, 20),
    }),
    []
  );

  const tankData = useMemo(
    () => ({
      timestamp: timestamps.slice(0, 20),
      temperature: tankLevels.slice(0, 20),
    }),
    []
  );

  return (
    <div className={styles.wrap}>
      <Card className={styles.card}>
        <div className={styles.title}>Температура</div>
        <div className={styles.data}>20.5 ℃</div>
        <Area data={heaterData} type={AreaChartTypes.LEVEL} />
      </Card>
      <Card className={styles.card}>
        <div className={styles.title}>Рівень</div>
        <div className={styles.data}>40 М</div>
        <Progress className={styles.progress} percent={40} showInfo={false} />
      </Card>
      <Card className={styles.card}>
        <div className={styles.title}>Тиск</div>
        <div className={styles.data}>7 кгс/см²</div>
        <Area data={heaterData} type={AreaChartTypes.PRESSURE} />
      </Card>
      <Card className={styles.card}>
        <div className={styles.title}>Температура</div>
        <div className={styles.data}>35.7 ℃</div>
        <ColumnChart data={tankData} />
      </Card>
    </div>
  );
}

export default Info;
