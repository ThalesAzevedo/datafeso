import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  ThemeProvider,
} from '@material-ui/core';
import theme from '../../theme';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: theme.spacing(1),
  },
  title: {
    color: theme.palette.primary.main,
  },
  text: {
    fontWeight: 500,
    '& span': {
      color: theme.palette.primary.main,
    },
  },
});

export default function ProjectCard() {
  const classes = useStyles();

  const projectData = {
    id: 0,
    title: 'IPC-Feso | Cálculo de Inflação de Teresópolis',
    projectImage:
      'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    briefDescription:
    'O IPC-FESO é o Índice de Preços ao Consumidor de Teresópolis, calculado pelo Centro Universitário Serra dos Órgãos (UNIFESO).',
    mainAuthor: 'Prof. Roberta Montello Amaral',
    nFiles: 1,
    lastUpdate: '01/12/2020',
    url: '/project',
  };
  return (
    <ThemeProvider>
      <Card className={classes.root}>
        <CardActionArea href={projectData.url}>
          <CardMedia
            component="img"
            height="120"
            image={projectData.projectImage}
          />
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h6"
              component="h2"
            >
              {projectData.title}
            </Typography>
            <Typography
              variant="body2"
              className={classes.text}
              color="textSecondary"
              component="p"
            >
              {projectData.briefDescription}
            </Typography>
            <div></div>
            <Typography
              variant="body2"
              className={classes.text}
              color="textSecondary"
              component="p"
            >
              <span>Autor Principal:</span> {projectData.mainAuthor}
            </Typography>
            <Typography
              variant="body2"
              className={classes.text}
              color="textSecondary"
              component="p"
            >
              <span>Arquivos:</span> {projectData.nFiles}
            </Typography>
            <Typography
              variant="body2"
              className={classes.text}
              color="textSecondary"
              component="p"
            >
              <span>Última Atualização:</span> {projectData.lastUpdate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
}
