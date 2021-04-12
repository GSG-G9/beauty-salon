import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';

import { AdminRoute, UserRoute, GuestRoute } from '../component/route';

import {
  HOME_PAGE,
  BLOGS,
  SIGNIN_PAGE,
  SIGNUP_PAGE,
  PROFILE,
  CONTACTS,
  BOOK,
  SERVICES,
  DASHBOARD,
  DASHBOARD_APPOINTMENT,
  NOT_FOUND,
} from '../utils/router.constant';

import {
  Blogs,
  Book,
  Contacts,
  Dashboard,
  Appointment,
  Home,
  Profile,
  Services,
  Signin,
  Signup,
  NotFound,
} from '../pages';
import { UserProvider } from '../utils';

const App = () => (
  <ThemeProvider theme={theme}>
    <UserProvider>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path={HOME_PAGE}>
            <Home />
          </Route>
          <Route path={BLOGS}>
            <Blogs />
          </Route>
          <Route path={CONTACTS}>
            <Contacts />
          </Route>
          <Route path={SERVICES}>
            <Services />
          </Route>
          <GuestRoute path={SIGNIN_PAGE} component={Signin} />
          <GuestRoute path={SIGNUP_PAGE} component={Signup} />
          <UserRoute path={PROFILE} component={Profile} />
          <UserRoute path={BOOK} component={Book} />
          <AdminRoute path={DASHBOARD} component={Dashboard} />
          <AdminRoute path={DASHBOARD_APPOINTMENT} component={Appointment} />
          <Route path={NOT_FOUND}>
            <NotFound />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  </ThemeProvider>
);

export default App;
