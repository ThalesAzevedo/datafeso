import {useContext} from 'react'
import { makeStyles, Paper, ThemeProvider, Typography, Grid} from "@material-ui/core";

import CircularProgress from '@material-ui/core/CircularProgress';
import ProjectContext  from "../../context/context";
import theme from '../../theme'


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        margin: theme.spacing(1)
    },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    flexGrow: 1,
  },
}));

export default function Chart() {
  const classes = useStyles();
  const {state} = useContext(ProjectContext);
  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Typography variant="h6" color="primary">Histórico de Preços</Typography>

      {state.loading?
        <Grid container direction='column'  alignContent='center' alignItems='center'>
        <Typography color='primary'>Carregando dados...</Typography>
        <CircularProgress/>
        </Grid>
      :
      <Typography variant="h6" className={classes.title}>Em produção...</Typography>
      }
      </Paper>
    </ThemeProvider>
  );
}

