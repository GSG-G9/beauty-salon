import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';

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
import { SelectInput } from '../component';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path={HOME_PAGE}>
          <Home />
        </Route>
        <Route path={BLOGS}>
          <Blogs />
        </Route>
        <Route path={SIGNIN_PAGE}>
          <Signin />
        </Route>
        <Route path={SIGNUP_PAGE}>
          <Signup />
        </Route>
        <Route path={PROFILE}>
          <Profile />
        </Route>
        <Route path={CONTACTS}>
          <Contacts />
        </Route>
        <Route path={BOOK}>
          <Book />
        </Route>
        <Route path={SERVICES}>
          <Services />
        </Route>
        <Route path={DASHBOARD}>
          <Dashboard />
        </Route>
        <Route path={DASHBOARD_APPOINTMENT}>
          <Appointment />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
