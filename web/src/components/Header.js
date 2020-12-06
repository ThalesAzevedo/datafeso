import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import {
  makeStyles,
  ThemeProvider,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

import theme from '../theme';

const useStyles = makeStyles({
  title: {
    fontWeight: 'bold',
    fontSize: '3em',
  },
  header: {
    padding: theme.spacing(3),
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Appbar position="static" className={classes.header}>
        <Grid container direction="row" justify="space-between">
          <Grid item xs={4}>
            <Typography variant="h3" align="center" className={classes.title}>
              DataFeso
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Button color="inherit" href="/">
              Voltar
            </Button>
          </Grid>
        </Grid>
      </Appbar>
    </ThemeProvider>
  );
}
