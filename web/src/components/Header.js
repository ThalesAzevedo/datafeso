import React from "react";
import Appbar from "@material-ui/core/AppBar";
import {
  makeStyles,
  ThemeProvider,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";

import theme from "../theme";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    fontSize: '3em'
  },
  header: {
    padding: theme.spacing(3),
    alignItems: "center",
    alignContent: "center",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Appbar position="static" className={classes.header} >
        <Grid container direction="row">
          {/* <Grid item xs={3}>
            <img
              src={"http://www.unifeso.edu.br/images/logo/UNIFESO-BRANCO.png"}
              width="150vw"
              alt={"Logo da UNIFESO"}
            />
          </Grid> */}
          <Grid item ={6}>
            <Typography variant="h3" align="center" className={classes.title}>
              DataFeso
            </Typography>
          </Grid>
          {/* <Grid item xs={3}>
            <Button color="inherit" href="/">
              Tela Princial
            </Button> */}
          {/* </Grid> */}
        </Grid>
      </Appbar>
    </ThemeProvider>
  );
}
