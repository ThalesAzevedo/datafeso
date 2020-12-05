import {
  makeStyles,
  TextField,
  Typography,
  Grid,
  Button,
  Link,
  Paper,
} from "@material-ui/core";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

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
  button: {
    margin: theme.spacing(2),
    color: "#FFFFFF",
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
          <Grid item >
            <Typography
              variant="h6"
              align="center"
              className={classes.title}
            >
              Arquivos do Projeto
            </Typography>
          </Grid>
          <Grid item >
            <Link variant="body2" align="center">
              arquivo.csv
            </Link>
          </Grid>
          <Grid item >
            <Link variant="body2"  align="center">
              arquivo.csv
            </Link>
          </Grid>
          <Grid item >
            <Link variant="body2" align="center">
              arquivo.csv
            </Link>
          </Grid>
          <Grid item >
            <Link variant="body2" align="center">
              arquivo.csv
            </Link>
          </Grid>
          <Grid item >
            <Link variant="body2" align="center">
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
    </Paper>
  );
}
