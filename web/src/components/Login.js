import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  ThemeProvider,
  Paper,
  Input,
} from '@material-ui/core';
import theme from '../theme';
import Upload from './project_page/UploadFile';

const useStyles = makeStyles({
  root: {
    margin: theme.spacing(1),
  },
  box: {
    borderRadius: '5px',
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
  },
  input: {
    margin: theme.spacing(1),
    color: '#FFFFFF',
  },
  button: {
    margin: theme.spacing(2),
    color: '#FFFFFF',
    backgroundColor: theme.palette.primary.main,
  },
});

export default function AppLogin() {
  const classes = useStyles();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [logged, setLogged] = useState(false);

  const handleLogin = () => {
    console.log(logged);
    if (user === 'feso' && pass === 'data') {
      setLogged(true);
    }
  };

  const handleLogout = () => {
    console.log(logged);
    setUser('');
    setPass('');
    setLogged(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Grid
          container
          className={classes.box}
          direction="column"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6" className={classes.title} align="center">
              Área do Pesquisador
            </Typography>
          </Grid>
          {!logged ? (
            <>
              <Grid>
                <TextField
                  className={classes.input}
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  label="Usuário"
                  name="user"
                  variant="outlined"
                  onChange={(event) => setUser(event.target.value)}
                />
              </Grid>
              <Grid>
                <TextField
                  type="password"
                  className={classes.input}
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  label="Senha"
                  name="pass"
                  variant="outlined"
                  onChange={(event) => setPass(event.target.value)}
                />
              </Grid>
              <Grid>
                <Button
                  className={classes.button}
                  href="#"
                  color="secondary"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Grid>
            </>
          ) : (
            <>
              <Typography>Olá {user}</Typography>
              <Button
                className={classes.button}
                href="#"
                color="secondary"
                onClick={handleLogout}
              >
                Logout
              </Button>
              <Upload />
            </>
          )}
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
