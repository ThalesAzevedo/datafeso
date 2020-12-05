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
                <MenuItem value={1}>Produto 1</MenuItem>
                <MenuItem value={2}>Produto 2</MenuItem>
                <MenuItem value={3}>Produto 3</MenuItem>
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
        <Grid container className={classes.result}>
          <Typography>
            <span>Resultado:</span> _______
          </Typography>
        </Grid>
      </Grid>
      </Paper>
    </ThemeProvider>
  );
}
