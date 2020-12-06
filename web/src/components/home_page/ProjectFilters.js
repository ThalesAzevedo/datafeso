import {
  makeStyles,
  Typography,
  Grid,
  Button,
  Paper,
  TextField,
} from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';

const useStyles = makeStyles({
  root: {
    margin: theme.spacing(1),
  },
  box: {
    borderRadius: '5px',
    padding: theme.spacing(2),
  },
  input: {
    margin: theme.spacing(1),
  },
  title: {
    color: theme.palette.primary.main,
  },
  button: {
    margin: theme.spacing(2),
    color: '#FFFFFF',
    backgroundColor: theme.palette.primary.main,
  },
});

export default function ProjectFileList() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.box}
        >
          <Grid item>
            <Typography variant="h6" color="primary" align="center">
              Filtrar Projetos
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              size="small"
              label="ID"
              className={classes.input}
            ></TextField>
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              size="small"
              label="Curso"
              className={classes.input}
            ></TextField>
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              size="small"
              label="Setor"
              className={classes.input}
            ></TextField>
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              size="small"
              label="Data Início"
              type="date"
              InputLabelProps={{ shrink: true }}
              className={classes.input}
              placeholder=""
            >
              Name
            </TextField>
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              size="small"
              label="Data Fim"
              type="date"
              InputLabelProps={{ shrink: true }}
              className={classes.input}
              placeholder=""
            >
              Name
            </TextField>
          </Grid>
          <Grid>
            <Button className={classes.button} size="large">
              Filtrar
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Paper>
  );
}
