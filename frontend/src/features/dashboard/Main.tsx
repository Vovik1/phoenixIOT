import { Redirect, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard'

export const Main = () => {
    return (
        <Switch>
            <Route exact path={'/'}>
                <Redirect to="/dashboard/monitoring" />
            </Route>
            <Dashboard />
        </Switch>
    );
};