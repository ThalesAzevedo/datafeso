import {useContext, useState} from 'react'
import {
  Grid,
  makeStyles,
  TextField,
  Typography,
  ThemeProvider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Button,
} from "@material-ui/core";
import ProjectContext  from "../../context/context";
import theme from "../../theme";

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(2),
    margin:theme.spacing(1)
  },
  input: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  result: {
    padding: theme.spacing(2),
    "& span": {
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
  },
  box: {
    alignItems: "flex-start",
  },
});



export default function Valores() {
  const classes = useStyles();
  const {state} = useContext(ProjectContext);

  const [date, setDate] = useState('');
  const [product, setProduct] = useState('');
  const [result, setResult] = useState('');
  
  const getDate = (event)=>{
    const date = Date.parse(event.target.value);
    setDate(date)
  }

  const getProduct = (event) =>{
    event.preventDefault();
    setProduct(state.products[event.target.value])
  }

  const handleButtom = event => {
    event.preventDefault();
    console.log(date, product)

    state.apiData.forEach(element => {
      if (Date.parse(element.date) == date) {
        element.products.forEach( item =>{
          if (item.name == product.name){
            setResult("R$ "+item.value.toString());
          }
        })
      }
  })
}
  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Typography variant="h6" color="primary">Consulta de Preços de Produtos</Typography>

        {state.loading?
        <Typography>Carregando dados...</Typography>
      :
      <Grid container direction="column" >
        <Grid container className={classes.box}>
            <FormControl variant="outlined" className={classes.input}>
              <InputLabel 
                id="product-id-label"
              >
                Produto
              </InputLabel>
              <Select
                labelId="product-id-label"
                id="productId"
                label="Produto"
                value={product.id? product.id: 0}
                onChange={getProduct}
              >
                {state.products.map((element) => {
                  return <MenuItem key={element.id} value={element.id}>{element.name}</MenuItem>
                })}
              </Select>
            </FormControl>
          
            <TextField
              className={classes.input}
              type="month"
              variant="outlined"
              label="Período"
              InputLabelProps={{ shrink: true }}
              onChange={getDate}
            ></TextField>
        </Grid>
        <Grid item xs={12}>
        <Button  type='submit' size='medium' variant='contained' color='primary' className={classes.input} onClick={handleButtom}>Consultar</Button>
        </Grid>
        <Grid container className={classes.result}>
          <Typography>
            <span>Resultado:</span> {result}
          </Typography>
        </Grid>
      </Grid>
      }
      </Paper>
    </ThemeProvider>
  );
}
