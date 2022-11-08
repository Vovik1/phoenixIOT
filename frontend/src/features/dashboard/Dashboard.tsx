import React from 'react';
import { PageLayout } from '../../shared/components';
import { Analysis, Header, LeftMenuPanel, Monitoring } from '../../shared/sections';
import { Switch, Route } from 'react-router-dom';

function Dashboard() {
  return (
    <PageLayout>
      <LeftMenuPanel />
      <PageLayout>
        <Header />
        <Switch>
          <Route exact path="/dashboard/analysis" component={() => <Analysis />} />
          <Route path="/dashboard/monitoring" component={() => <Monitoring />} />
        </Switch>
      </PageLayout>
    </PageLayout>
  );
}

export default Dashboard;
