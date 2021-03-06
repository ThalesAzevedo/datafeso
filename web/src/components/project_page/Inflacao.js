import { useContext, useState } from 'react';
import ProjectContext from '../../context/context';
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
} from '@material-ui/core';
import theme from '../../theme';

import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  input: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  result: {
    padding: theme.spacing(2),
    '& span': {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
  },
  box: {
    // alignItems: "flex-start",
    backgroundColor: '#FEFEFE',
  },
  comment: {
    fontSize: 12,
  },
});

export default function Inflacao() {
  const classes = useStyles();
  const { state } = useContext(ProjectContext);

  const [initDate, setInitDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const [product, setProduct] = useState('');
  const [result, setResult] = useState('');

  const [firstDate, setFirstDate] = useState();
  const [lastDate, setLastDate] = useState();

  // = state.apiData[state.apiData.lenght-2].date
  const getLimits = () => {
    setFirstDate(state.apiData[0].date.split('-'));
    setLastDate(state.apiData[state.apiData.length - 2].date.split('-'));
    console.log(firstDate, lastDate);
    return (
      <Typography className={classes.comment}>
        OBS: Dados coletados do mês {firstDate[1]} de {firstDate[0]} até o mês{' '}
        {lastDate[1]} de {lastDate[0]}.
      </Typography>
    );
  };

  const getInitDate = (event) => {
    event.preventDefault();
    const date = Date.parse(event.target.value);
    setInitDate(date);
  };

  const getFinalDate = (event) => {
    event.preventDefault();
    const date = Date.parse(event.target.value);
    setFinalDate(date);
  };

  const getProduct = (event) => {
    event.preventDefault();
    setProduct(state.products[event.target.value]);
  };

  const handleButtom = (event) => {
    event.preventDefault();
    let prevMonth;
    let initValue;
    let finalValue;

    state.apiData.forEach((element) => {
      if (Date.parse(element.date) == initDate) {
        prevMonth = element.dataCollection - 1;

        state.apiData.forEach((prevElement) => {
          if (prevElement.dataCollection == prevMonth) {
            prevElement.products.forEach((item) => {
              if (item.name == product.name) {
                initValue = item.value;
              }
            });
          }
        });
      }

      if (Date.parse(element.date) == finalDate) {
        element.products.forEach((item) => {
          if (item.name == product.name) {
            finalValue = item.value;
          }
        });
      }
      let calc = finalValue / initValue - 1;
      // console.log(initValue, finalValue, calc)/


      setResult((calc * 100).toPrecision(4).toString().replace('.',',') + '%');
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Typography variant="h6" color="primary">
          Consulta de Inflação de Produtos
        </Typography>
        {state.loading ? (
          <Grid
            container
            direction="column"
            alignContent="center"
            alignItems="center"
          >
            <Typography color="primary">Carregando dados...</Typography>
            <CircularProgress />
          </Grid>
        ) : (
          <Grid container direction="column">
            <Grid container className={classes.box}>
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel id="product-id-label">Produto</InputLabel>
                <Select
                  labelId="product-id-label"
                  id="productId"
                  value={product.id ? product.id : ''}
                  onChange={getProduct}
                  label="Produto"
                >
                  {state.products.map((element) => {
                    return (
                      <MenuItem key={element.id} value={element.id}>
                        {element.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <TextField
                className={classes.input}
                type="month"
                variant="outlined"
                label="Data Início"
                InputLabelProps={{ shrink: true }}
                onChange={getInitDate}
              ></TextField>

              <TextField
                className={classes.input}
                type="month"
                variant="outlined"
                label="Data Fim"
                InputLabelProps={{ shrink: true }}
                onChange={getFinalDate}
              ></TextField>
            </Grid>
            <Typography className={classes.comment}>
              OBS: Dados coletados do mês {state.limit.firstDate[1]} de{' '}
              {state.limit.firstDate[0]} até o mês {state.limit.lastDate[1]} de{' '}
              {state.limit.lastDate[0]}.
            </Typography>
            <Grid item xs={12}>
              <Button
                type="submit"
                size="medium"
                variant="contained"
                color="primary"
                className={classes.input}
                onClick={handleButtom}
              >
                Consultar
              </Button>
            </Grid>
            <Grid container className={classes.result}>
              <Typography>
                <span>Resultado:</span> {result}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Paper>
    </ThemeProvider>
  );
}
