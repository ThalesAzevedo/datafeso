import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  ThemeProvider,
  Paper,
} from "@material-ui/core";
import theme from "../theme";
import api from "../services/api";

const useStyles = makeStyles({
  root: {
    margin: theme.spacing(1),
  },
  box: {
    borderRadius: "5px",
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
  },
  input: {
    margin: theme.spacing(1),
    color: "#FFFFFF",
  },
  button: {
    color: "#FFFFFF",
    backgroundColor: theme.palette.primary.main,

  },
});


export default function AppLogin() {
  const classes = useStyles();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [logged, setLogged] = useState(false);

  const [file, setFile] = useState();


  const onSubmitFile = (event) =>{
    event.preventDefault();

    let formData = new FormData();
    formData.append('file', file)

    console.log(file)

    api.post('/upload', formData , {headers:{
      'Content-Type': 'multipart/form-data',
    }}).then(function () {
      console.log('SUCCESS!!');
    })
    .catch(function (err) {
      console.log('FAILURE!!', err);
    });

  }

  const handleLogin = ()=>{
    console.log(logged)
    if(user==="tha"&&pass==="th"){

    setLogged(true)
    }
  }

  const handleLogout = ()=>{
    console.log(logged)
    setUser('');
    setPass('');
    setLogged(false)
  }

  return (
    <Paper className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          className={classes.box}
          direction="column"
          alignItems="center"
        >
          <Grid item >
            <Typography variant="h6"
              className={classes.title} align="center">
              Área do Pesquisador
            </Typography>
          </Grid>
            {!logged?
              <>
                <Grid>
                  <TextField
                    className={classes.input}
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    label="Usuário"
                    name="user"
                    variant="outlined"
                    onChange={event => setUser(event.target.value)}
                  />
                </Grid>
                <Grid>
                  <TextField
                    type="password"
                    className={classes.input}
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    label="Senha"
                    name ='pass'
                    variant="outlined"
                    onChange={event => setPass(event.target.value)}
                  />
                </Grid>
                <Grid>
                  <Button  className={classes.button} href="#" color="secondary" onClick={handleLogin}>
                    Login
                  </Button>
              </Grid>
            </>
         :<>
            <Typography>Olá {user}</Typography>

            <form id="uploadForm"action='#' role="form" method="post" enctype='multipart/form-data'>
                <input type="file" id="file" name="file" onChange={event => setFile(event.target.files[0])}/>
                <input type='submit' value='Upload' onClick={onSubmitFile}/>
            </form>

            <Button  className={classes.button} href="#" color="secondary" onClick={handleLogout} >
              Logout
            </Button>
          </>
        }
        </Grid>

      </ThemeProvider>
    </Paper>
  );
}
