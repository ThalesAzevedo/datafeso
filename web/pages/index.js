import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import AppLogin from "../src/components/Login";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import theme from "../src/theme";
import ProjectFilters from "../src/components/home_page/ProjectFilters";
import ProjectList from "../src/components/home_page/ProjectList";
import MyApp from "./_app";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  title: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(3),
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header />
        <main>
          <Grid container direction="column">
            <Grid item xs={12}>
              <Typography
                variant="h4"
                color="primary"
                className={classes.title}
              >
                Projetos e Pesquisas
              </Typography>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={10} padding="spacing(3)">
                <ProjectList />
              </Grid>

              <Grid item xs={2}>
                <AppLogin />
                <ProjectFilters />
              </Grid>
            </Grid>
          </Grid>
        </main>
        <Footer />
      </div>
      <style jsx global>
        {`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}
      </style>
    </ThemeProvider>
  );
}
