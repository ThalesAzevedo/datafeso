import Header from "../../src/components/Header";
import AppLogin from "../../src/components/Login";
import ProjectContent from "../../src/components/project_page/ProjectContent";
import ProjectFileList from "../../src/components/project_page/ProjectFileList";
import Footer from "../../src/components/Footer";

import { makeStyles, ThemeProvider, Grid, Typography } from "@material-ui/core";
import theme from "../../src/theme";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  title: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
  },
  subtitle: {
    paddingLeft: theme.spacing(3),
    // justifyContent: "space-around",
    justifyItems: 'start'
  },
  content: {
    padding: theme.spacing(2),
    // margin: theme.spacing(1),
    // backgroundColor: '#EEEEEE'
    // justifyContent: "space-around",
    justifyItems: 'center',
    alignItems: 'center'
  },
  sidebar: {
    padding: theme.spacing(2),

    minWidth: "240px",
  },
});

export default function ProjectView() {
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
                IPC-Feso | Cálculo de Inflação de Teresópolis
              </Typography>
            </Grid>
            <Grid item direction="row" className={classes.subtitle}>
                <Typography variant="body1" color="primary">
                  Autora: Prof. Roberta
                </Typography>
                <Typography variant="body1" color="primary">
                  Ultima Atualização: 01/12/2020
                </Typography>
            </Grid>

            <Grid container direction="row">
              <Grid item xs={12} className={classes.content}>
                <ProjectContent />
              </Grid>
              {/* <Grid item className={classes.sidebar}>
                <AppLogin />
                <ProjectFileList />
              </Grid> */}
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
