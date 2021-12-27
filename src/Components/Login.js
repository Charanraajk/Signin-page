import React from 'react';
import Copyright from './Copyrights';

import { FormControlLabel } from '@material-ui/core';

import { Grid } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Checkbox} from '@material-ui/core';
import { Link } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    minWidth: 1400,
  },
  image: {
    backgroundImage: 'url(https://media.istockphoto.com/videos/lottery-video-id472904383?s=640x640)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  para : {
    display: 'flex',
    alignItems:'left',
  },

  p: {
    display: 'flex',
    textalign: 'left',
    liststyle: 'square',
  },
 
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <h2 className={classes.para}>Login to your account</h2>
      <p className={classes.p}>Thank you for get back to Lottery Display, lets access our the best recommendation for you.</p>
        <div className={classes.paper}>  
          <h2>Sign in</h2>
          
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required  
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Join Lottery Display"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </CardContent>
    </Card>
  );
}