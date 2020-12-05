
import { makeStyles, Paper, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        margin: theme.spacing(1)
    },

  title: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
  },
  text: {
    // color: theme.palette.secondary.main,
    paddingTop:theme.spacing(1)
  },
  layout: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(2),
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