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
} from "@material-ui/core";
import theme from "../../theme";

const useStyles = makeStyles({
  input: {
    margin: theme.spacing(1),
    color: "#FFFFFF",
  },
  result: {
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
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="colunm">
        <Grid container sdirection="row" className={classes.box}>
          <Grid item className={classes.box} xs="4">
            <TextField
              className={classes.input}
              type="date"
              variant="outlined"
              label="Período"
              InputLabelProps={{ shrink: true }}
              size="small"
            ></TextField>
          </Grid>
          <Grid className={classes.input} xs="4">
            <FormControl className={classes.formControl}>
              <InputLabel
                id="product-id-label"
                InputLabelProps={{ shrink: true }}
              >
                Produto
              </InputLabel>
              <Select
                labelId="product-id-label"
                id="productId"
                variant="outlined"
                // value={}
                // onChange={}
              >
                <MenuItem value={1}>Produto 1</MenuItem>
                <MenuItem value={2}>Produto 2</MenuItem>
                <MenuItem value={3}>Produto 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container xs="7" className={classes.result}>
          <Typography>
            <span>Resultado:</span> _______
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
