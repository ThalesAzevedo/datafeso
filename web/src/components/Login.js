import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  ThemeProvider,
  Paper,
} from "@material-ui/core";
import theme from "../theme";

const useStyles = makeStyles({
  root: {
    margin: theme.spacing(1),
  },
  box: {
    borderRadius: "5px",
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
  },
  input: {
    margin: theme.spacing(1),
    color: "#FFFFFF",
  },
  button: {
    color: "#FFFFFF",
    backgroundColor: theme.palette.primary.main,
  },
});

export default function AppLogin() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid xs='auto'
          container
          className={classes.box}
          direction="column"
          alignItems="center"
        >
          <Grid item >
            <Typography variant="h6" 
              className={classes.title} align="center">
              Área do Pesquisador
            </Typography>
          </Grid>
          <Grid>
            <TextField
              className={classes.input}
              size="small"
              InputLabelProps={{ shrink: true }}
              label="Usuário"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField
              type="password"
              className={classes.input}
              size="small"
              InputLabelProps={{ shrink: true }}
              label="Senha"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <Button className={classes.button} href="#" color="secondary">
              Login
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Paper>
  );
}
