import { Switch, Route } from 'react-router-dom';

import CounterContainer from '../CounterPage/CounterContainer';
import MainPage from '../MainPage';

import { ROUTES } from '../Routes/routeNames';

const Routes = () => {

  return (
    <Switch>
      <Route exact path={ROUTES.MAIN_PAGE} component={MainPage} />
      <Route exact path={ROUTES.COUNTER_PAGE} component={CounterContainer} />
    </Switch>
  )
}

export default Routes