import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  ThemeProvider,
} from "@material-ui/core";
import theme from "../theme";

const useStyles = makeStyles({
  root: {
    paddingRight: theme.spacing(2),
    minWidth: "240px",
  },
  box: {
    backgroundColor: "#eeeeee",
    borderRadius: "5px",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(2),
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
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          className={classes.box}
          direction="column"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h6" color="primary" align="center">
              Área do Pesquisador
            </Typography>
          </Grid>
          <Grid>
            <TextField
              className={classes.input}
              size="small"
              InputLabelProps={{ shrink: true }}
              color="inherit"
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
              color="inherit"
              label="Senha"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <Button className={classes.button} href="#" color="secundary">
              Login
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
