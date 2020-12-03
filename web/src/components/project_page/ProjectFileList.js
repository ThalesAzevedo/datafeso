import {
  makeStyles,
  TextField,
  Typography,
  Grid,
  Button,
  Link,
} from "@material-ui/core";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

const useStyles = makeStyles({
  root: {
    paddingRight: theme.spacing(2),
    minWidth: "240px",
  },
  box: {
    backgroundColor: "#eeeeee",
    borderRadius: "5px",
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
  },
  button: {
    margin: theme.spacing(2),
    color: "#FFFFFF",
    backgroundColor: theme.palette.primary.main,
  },
});

export default function ProjectFileList() {
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
          <Grid item xs="12">
            <Typography
              variant="h6"
              color="inherit"
              align="center"
              className={classes.title}
            >
              Arquivos do Projeto
            </Typography>
          </Grid>
          <Grid item xs="12">
            <Link variant="body2" color="inherit" align="center">
              arquivo.csv
            </Link>
          </Grid>
          <Grid item xs="12">
            <Link variant="body2" color="inherit" align="center">
              arquivo.csv
            </Link>
          </Grid>
          <Grid item xs="12">
            <Link variant="body2" color="inherit" align="center">
              arquivo.csv
            </Link>
          </Grid>
          <Grid item xs="12">
            <Link variant="body2" color="inherit" align="center">
              arquivo.csv
            </Link>
          </Grid>
          <Grid item xs="12">
            <Link variant="body2" color="inherit" align="center">
              arquivo.csv
            </Link>
          </Grid>
          <Grid>
            <Button className={classes.button} size="medium">
              Download
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
