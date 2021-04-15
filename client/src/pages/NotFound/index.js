import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './style';
import { Footer, Header, ButtonComponent } from '../../component';

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.root}>
        <div className={classes.left}>
          {!isMobile && (
            <Typography color="primary" variant="h4" className={classes.text1}>
              Oops! Looks like you lost?
            </Typography>
          )}

          <Typography className={classes.text2} variant="h6">
            The page you are looking for is now beyond our reach.
          </Typography>
          {!isMobile && (
            <Typography className={classes.text3} variant="h6">
              Let us take you home
            </Typography>
          )}

          <ButtonComponent
            color="secondary"
            className={classes.btn}
            variant="outlined"
            onClick={() => history.push('/')}
          >
            Go Home
          </ButtonComponent>
        </div>
        <div className={classes.right}>
          <Typography variant="h2" color="primary" className={classes.right404}>
            404
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
