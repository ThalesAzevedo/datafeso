import {useContext, useState} from 'react'
import ProjectContext from '../../context/context'
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
import theme from "../../theme";

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(1)
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
    // alignItems: "flex-start",
    backgroundColor: '#FEFEFE'
  },
});

export default function Inflacao() {
  const classes = useStyles();
  const {state} = useContext(ProjectContext);
  const [result, setResult] = useState("")

  const handleButtom = e => {
    e.preventDefault();
    setResult("Resultado esperado.")
  }


  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
      <Grid container direction="colunm" >
      <Typography variant="h6" color="primary">Consulta de Inflação de Produtos</Typography>
        <Grid container  className={classes.box}>
            <FormControl variant="outlined" className={classes.input}>
              <InputLabel
                id="product-id-label"
                InputLabelProps={{ shrink: true }}
              >
                Produto
              </InputLabel>
              <Select
                labelId="product-id-label"
                id="productId"
                // value={}
                // onChange={}
                label="Produto"
              >
                {state.products.map((element) => {
                  return <MenuItem value={element.id}>{element.name}</MenuItem>
                })}
              </Select>
            </FormControl>
          
            <TextField
              className={classes.input}
              type="date"
              variant="outlined"
              label="Data Início"
              InputLabelProps={{ shrink: true }}
            ></TextField>
          
            <TextField
              className={classes.input}
              type="date"
              variant="outlined"
              label="Data Fim"
              InputLabelProps={{ shrink: true }}
            ></TextField>
            
            
        </Grid>
        <Grid xs={12}>
        <Button  type='submit' size='medium' variant='contained' color='primary' className={classes.input} onClick={handleButtom}>Consultar</Button>
        </Grid>
        <Grid container className={classes.result}>
        
          <Typography>
              <span>Resultado:</span> {result}
          </Typography>
        </Grid>
      </Grid>
      </Paper>
    </ThemeProvider>
  );
}
