import {
  makeStyles,
  Typography,
  Grid,
  Button,
  Link,
  Paper,
} from "@material-ui/core";
import React from "react";
import { ThemeProvider } from '@material-ui/core'
import theme from "../../theme";

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
  button: {
    margin: theme.spacing(2),
    color: "#FFFFFF",
    backgroundColor: theme.palette.primary.main,
  },
});

const fileList = [{"id":1, 'name':'arquivo1.csv', 'url':'#1'},
                  {"id":2, 'name':'arquivo2.csv', 'url':'#2'},
                  {"id":3, 'name':'arquivo3.csv', 'url':'#3'},
                  {"id":4, 'name':'arquivo4.csv', 'url':'#4'}]

export default function ProjectFileList() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.box}
        >
          <Grid item >
            <Typography
              variant="h6"
              align="center"
              className={classes.title}
            >
              Arquivos do Projeto
            </Typography>
          </Grid>

          {fileList.map(file =>{
            return(
              <Grid item key={file.id} >
                <Link variant="body2" align="center" href={file.url}>
                  {file.name}
                </Link>
              </Grid>
            )
          })}
          
          <Grid>
            <Button className={classes.button} size="medium" href='#download'>
              Download
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Paper>
  );
}
