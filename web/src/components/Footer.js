import { ThemeProvider, makeStyles, Container, Grid } from "@material-ui/core";
import theme from "../theme";

const styles = makeStyles({
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: theme.palette.grey["900"],
  },
});

export default function Footer() {
  const classes = styles();

  return (
    <ThemeProvider theme={theme}>
      <footer className={classes.footer}>
        <Container>
          <Grid container alignItems={"center"} direction={"column"}>
            <Grid item>
              <img
                src={"http://www.unifeso.edu.br/images/logo/UNIFESO-BRANCO.png"}
                height={60}
                alt={"Logo da UNIFESO"}
              />
            </Grid>
          </Grid>
        </Container>
      </footer>
    </ThemeProvider>
  );
}
