import React from 'react';
import styles from './Monitoring.module.scss';
import LineChart from '../../components/Charts/LineChart/LineChart';
import { Card, Content, Breadcrumb,  ObjectImages } from '../../components';
import Info from './Info/Info';

const breadcrumbLabels = ['Dashboard', 'Monitoring'];

function Monitoring() {
  
  return (
    <>
      <Content>
        <Breadcrumb labels={breadcrumbLabels} />
        <Info  />
        <Card className={styles.imagesCard}>
          <ObjectImages  />
        </Card>
        <Card className={styles.lineChartCard}>
          <LineChart />
        </Card>
      </Content>
    </>
  );
}

export default Monitoring;
