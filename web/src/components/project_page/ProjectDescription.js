
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

  const authors = [{'id':1 ,'name':'Professora Roberta Montello Amaral' },{'id':2 ,'name':'Professor Francisco Jovando Rebelo de Albuquerque' }];
  const members = [{'id':1 ,'name':'Luiz Claudio Ramos' },{'id':2 ,'name':'Thales Coelho de Azevedo' }]
  const descriptions = ['O IPC-FESO é o Índice de Preços ao Consumidor de Teresópolis, calculado pelo Centro Universitário Serra dos Órgãos (UNIFESO) e, foi criado para ser uma medida mais realista da variação de preços no município de Teresópolis e portanto, é um índice de abrangência local.',
'  O objetivo do IPC-FESO é medir as variações de preços referentes ao consumo pessoal de residentes na região urbana da cidade de Teresópolis ou, de maneira simplificada, a mesma a finalidade do Índice de Preços ao Consumidor Amplo (IPCA) calculado pelo IBGE, um índice com abrangência nacional.',
'  O IPC-FESO é baseado na fórmula de Laspeyres, a mesma metodologia utilizada no cálculo do IPCA, diferindo, uma da outra, apenas quanto à forma de agregação dos produtos da cesta pesquisada.',
'  A cesta padrão de consumo familiar, que define a estrutura de ponderação para a elaboração do índice, foi construída a partir da POAM, pesquisa de consumo realizada junto a 940 famílias durante o período de 1° de maio de 2001 a 30 de abril de 2002.  A população-alvo do IPC-FESO é constituída por famílias residentes na região urbana de Teresópolis, com renda mensal entre 1 e 25 salários mínimos e, cuja fonte de renda é o salário obtido na ocupação principal é como sua principal fonte de rendimento. ']

  return (
    <Paper className={classes.root}>
    <Typography variant="h6" className={classes.title}>Descrição</Typography>

    {descriptions.map(description=>{
      return <Typography className={classes.text} >{description}</Typography>
    })}

    <Typography variant="h6" className={classes.title}>Autores</Typography>

    {authors.map(author=>{
      return <Typography className={classes.text} key={author.id}>{author.name}</Typography>
    })}

    <Typography variant="h6" className={classes.title}>Participantes</Typography>

    {members.map(member=>{
      return <Typography className={classes.text} key={member.id}>{member.name}</Typography>
    })}

    </Paper>
  );
}
