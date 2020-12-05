
import { makeStyles, Paper, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        margin: theme.spacing(1)
    },

  title: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    color:theme.palette.primary.main
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

export default function ProjectContent() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
    <Typography variant="h6" className={classes.title}>Descrição</Typography>
    <Typography className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum metus id magna venenatis elementum. Nulla eget viverra justo. Ut at iaculis sem. Donec odio lacus, sagittis eu augue id, pretium tempor ex. Morbi id ex fermentum, semper lorem ut, ornare velit. Integer id elit at ante faucibus molestie a ac orci. Nulla id dolor sit amet elit dapibus consectetur. Nulla efficitur tortor varius nulla tempus, quis porttitor nisl condimentum. Integer tincidunt est a metus vestibulum vestibulum id congue arcu. Mauris ut vulputate tortor, sed ultricies nulla. Sed luctus odio sed condimentum imperdiet. Ut dictum, felis iaculis congue bibendum, magna justo lacinia dolor, vel mattis nisl ligula sed nisl.
    <Typography className={classes.text}>Praesent scelerisque turpis sollicitudin elit porttitor, eget suscipit ex efficitur. Etiam ullamcorper velit lobortis dapibus consequat. Etiam egestas ultrices blandit. Etiam a tellus eros. Praesent ut vehicula massa. Morbi non ultrices ipsum. Suspendisse dapibus elementum pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam congue luctus mollis. Phasellus vulputate arcu et lorem blandit iaculis.</Typography></Typography>

    <Typography variant="h6" className={classes.title}>Autores</Typography>
    <Typography className={classes.text}>Professora Roberta Amaral</Typography>
    <Typography className={classes.text}>Professor Francisco Jovando Medeiros</Typography>

    <Typography variant="h6" className={classes.title}>Participantes</Typography>
    <Typography className={classes.text}>Lucas Beltrano Cicrano</Typography>
    <Typography className={classes.text}>Thales Coelho de Azevedo</Typography>
    </Paper>
  );
}