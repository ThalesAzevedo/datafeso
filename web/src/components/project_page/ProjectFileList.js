import { makeStyles, Typography, Grid, Button, Paper } from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';
import { baseURL } from '../../services/api';

const useStyles = makeStyles({
  root: {
    margin: theme.spacing(1),
  },
  box: {
    borderRadius: '5px',
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
  },
  button: {
    margin: theme.spacing(2),
    color: '#FFFFFF',
    backgroundColor: theme.palette.primary.main,
  },
});

const fileList = [{ id: 1, name: 'IPCFeso.csv', url: '/download/IPCFeso.csv' }];

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
          <Grid item>
            <Typography variant="h6" align="center" className={classes.title}>
              Arquivos do Projeto
            </Typography>
          </Grid>

          {fileList.map((file) => {
            return (
              <Grid item key={file.id}>
                <Typography variant="body2" align="center" href={'#'}>
                  {file.name}
                </Typography>
              </Grid>
            );
          })}

          <Grid>
            <Button
              className={classes.button}
              size="medium"
              href={baseURL + fileList[0].url}
            >
              Download
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Paper>
  );
}
