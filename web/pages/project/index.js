import Header from '../../src/components/Header';
import ProjectContent from '../../src/components/project_page/ProjectContent';
import Footer from '../../src/components/Footer';
import { useContext } from 'react';
import { makeStyles, ThemeProvider, Grid, Typography } from '@material-ui/core';
import theme from '../../src/theme';
import ProjectContext, { ProjectProvider } from '../../src/context/context';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  title: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
  },
  subtitle: {
    paddingLeft: theme.spacing(3),
    justifyItems: 'start',
  },
  content: {
    padding: theme.spacing(2),
    justifyItems: 'center',
    alignItems: 'center',
  },
  sidebar: {
    padding: theme.spacing(2),

    minWidth: '240px',
  },
});

export default function ProjectView() {
  const classes = useStyles();

  // const {state} = useContext(ProjectContext);

  return (
    <ThemeProvider theme={theme}>
      <ProjectProvider>
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
              <Grid item className={classes.subtitle}>
                <Typography variant="body1" color="primary">
                  Autora: Prof. Roberta
                </Typography>
                <Typography variant="body1" color="primary">
                  Ultima Atualização: 10/09/2020{}
                </Typography>
              </Grid>

              <Grid container direction="row">
                <Grid item xs={12} className={classes.content}>
                  <ProjectContent />
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
      </ProjectProvider>
    </ThemeProvider>
  );
}
