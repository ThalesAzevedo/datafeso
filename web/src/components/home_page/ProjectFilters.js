import {
  makeStyles,
  TextField,
  Typography,
  Grid,
  Button,
  ThemeProvider,
} from "@material-ui/core";
import React, { Component } from "react";
import theme from "../../theme";

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(1),
    minWidth: "240px",
  },
  box: {
    backgroundColor: "#eeeeee",
    borderRadius: "5px",
    padding: theme.spacing(2),
  },
  input: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(2),
    color: "#FFFFFF",
    backgroundColor: theme.palette.primary.main,
  },
});

export default function ProjectFilters() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.box}
        >
          <Grid item >
            <Typography variant="h6" color="primary" align="center">
              Filtrar Pesquisa
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
    </div>
  );
}
