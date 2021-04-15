import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './style';
import { Footer, Header, ButtonComponent } from '../../component';

const ComingSoon = () => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div>
      <Header />
      <div className={classes.main}>
        <div className={classes.root}>
          <div className={classes.left}>
            {!isMobile && (
              <Typography
                color="primary"
                variant="h4"
                className={classes.text1}
              >
                Oops! Page is not ready yet?
              </Typography>
            )}

            <Typography className={classes.text2} variant="h6">
              The page you are looking for is not ready yet, We will make it
              available very soon
            </Typography>
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
            <Typography
              variant="h2"
              color="primary"
              className={classes.right404}
            >
              Coming Soon!
            </Typography>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;
