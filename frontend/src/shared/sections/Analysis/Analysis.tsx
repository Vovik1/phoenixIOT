import React from 'react';
import { Content, Breadcrumb } from '../../components';

const breadcrumbLabels = ['Monitoring', 'Analysis'];

function Analysis() {
  return (
    <Content>
      <Breadcrumb labels={breadcrumbLabels} />
      <div style={{ padding: 24, minHeight: 360 }}>Analysis</div>
    </Content>
  );
}

export default Analysis;
