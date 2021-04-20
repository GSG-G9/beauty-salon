import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { UserProvider } from '../utils';

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
  PRODUCTS,
  CART,
} from '../utils/router.constant';

import {
  Blogs,
  Book,
  Contacts,
  Home,
  Profile,
  Services,
  Signin,
  Signup,
  NotFound,
  ComingSoon,
} from '../pages';

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
          <Route path={PRODUCTS}>
            <ComingSoon />
          </Route>
          <GuestRoute path={SIGNIN_PAGE} component={Signin} />
          <GuestRoute path={SIGNUP_PAGE} component={Signup} />
          <UserRoute path={PROFILE} component={Profile} />
          <UserRoute path={BOOK} component={Book} />
          <UserRoute path={CART} component={ComingSoon} />
          <AdminRoute path={DASHBOARD} component={ComingSoon} />
          <AdminRoute path={DASHBOARD_APPOINTMENT} component={ComingSoon} />
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
