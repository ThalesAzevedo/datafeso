import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import theme from "../../theme";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: theme.spacing(1),
  },
  title: {
    color: theme.palette.primary.main,
  },
  text: {
    fontWeight: "bold",
    "& span": {
      color: theme.palette.primary.main,
    },
  },
});

export default function ProjectCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Descriçao da Imagem"
          height="120"
          image="https://entrepreneurhandbook.co.uk/wp-content/uploads/2014/11/Summary-of-quantative-research-report.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h6"
            component="h2"
          >
            Título da Pesquisa
          </Typography>
          <Typography
            variant="body2"
            className={classes.text}
            color="textSecondary"
            component="p"
          >
            Descriçao breve da pesquisa, objetivos e resutados esperados.
          </Typography>
          <div></div>
          <Typography
            variant="body2"
            className={classes.text}
            color="textSecondary"
            component="p"
          >
            <span>Autor:</span> Thales Azevedo
          </Typography>
          <Typography
            variant="body2"
            className={classes.text}
            color="textSecondary"
            component="p"
          >
            <span>N de Arquivos:</span> 10
          </Typography>
          <Typography
            variant="body2"
            className={classes.text}
            color="textSecondary"
            component="p"
          >
            <span>Última Atualização:</span> 12/12/2020
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="/project">
          Conhecer Pesquisa
        </Button>
      </CardActions>
    </Card>

    // <CardWarp>
    // <CardHeader>
    //     <p>ID #000000</p>
    //     <h3>Nome do Projeto</h3>
    // </CardHeader>
    // <CardDescription>
    //     <p><span>Autor:</span> Thales Azevedo</p>
    //     <p><span>Descrição:</span> O projeto com tal nome tem a roposta de pesquisar tal assunto e obter resutados que podem causar tais impactos.</p>
    //     <p>
    //     <p><span>Ultima Atualização:</span> 00/00/0000</p>
    // </CardDescription>
    // </CardWarp>
  );
}
