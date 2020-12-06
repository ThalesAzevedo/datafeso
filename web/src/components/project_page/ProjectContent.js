import { useState } from 'react';
import { makeStyles, Tab, Tabs, Container, Grid } from '@material-ui/core';

import Valores from './Valores';
import Inflacao from './Inflacao';
import ProjectDescription from './ProjectDescription';
import AppLogin from '../Login';
import ProjectFileList from './ProjectFileList';
import Chart from './DataChart';

const useStyles = makeStyles((theme) => ({
  root: {},
  appBarSpacer: {
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-around',
    justifyItems: 'center',
    alignItems: 'center',
  },
  tabTitle: {
    color: theme.palette.secondary.main,
  },
  layout: {
    marginBottom: theme.spacing(1),
  },
}));

export default function ProjectContent() {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  return (
    <div className={classes.root}>
      <Tabs
        variant="scrollable"
        value={tabValue}
        indicatorColor="secondary"
        onChange={(_, newValue) => setTabValue(newValue)}
      >
        <Tab className={classes.tabTitle} label={'Dados do Pesquisa/Projeto'} />
        <Tab className={classes.tabTitle} label={'Consulta de Dados'} />
        <Tab className={classes.tabTitle} label={'Gráfico'} />
      </Tabs>
      <main className={classes.layout}>
        <Container className={classes.content}>
          {tabValue === 0 && (
            <Grid container direction="row">
              <Grid item sm={12} md={9}>
                <ProjectDescription />
              </Grid>
              <Grid item xs={12} md={3}>
                <AppLogin />
                <ProjectFileList />
              </Grid>
            </Grid>
          )}
          {tabValue === 1 && (
            <>
              <Valores />
              <Inflacao />
            </>
          )}
          {tabValue === 2 && <Chart />}
        </Container>
      </main>
    </div>
  );
}
