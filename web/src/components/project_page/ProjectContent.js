import { useState } from "react";
import { makeStyles, Tab, Tabs, Container, Grid } from "@material-ui/core";

import Valores from "./Valores";
import Inflacao from "./Inflacao";
import ProjectDescription from "./ProjectDescription";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EEEE99",
  },
  appBarSpacer: {
    ...theme.mixins.toolbar,
  },
  content: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
  },
  tabTitle: {
    color: theme.palette.secondary.main,
  },
  layout: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(2),
  },
}));

export default function ProjectContent() {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);
  return (
    <div className={classes.root}>
      <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)}>
        <Tab className={classes.tabTitle} label={"Dados do Pesquisa/Projeto"} />
        <Tab className={classes.tabTitle} label={"Valores dos Produtos"} />
        <Tab className={classes.tabTitle} label={"Cálculo de Inflação"} />
      </Tabs>
      <main className={classes.layout}>
        <Container maxWidth={"lg"} className={classes.content}>
          {tabValue === 0 && <div></div>}
          {tabValue === 1 && (
            <div>
              <Valores />
            </div>
          )}
          {tabValue === 2 && (
            <div>
              <Inflacao />
            </div>
          )}
        </Container>
      </main>
    </div>
  );
}
