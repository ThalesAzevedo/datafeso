
import { makeStyles, Paper, Typography } from "@material-ui/core";

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
  return (
    <Paper className={classes.root}>
    <Typography variant="h6" className={classes.title}>Em produção...</Typography>
    
    </Paper>
  );
}

