import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import theme from '../../theme';
import api from '../../services/api';


const useStyles = makeStyles({
  dropzone: {
    minHeight: '100px',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    border: '2px dashed #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'height 0.2s ease',
    flexGrow: 1,
  },
  acceptFile: {
    minHeight: '100px',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    border: '2px dashed #e57878',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'height 0.2s ease',
  },
  rejectFile: {
    minHeight: '100px',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    border: '2px dashed #78e5d5',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'height 0.2s ease',
  },
  title: {
    color: theme.palette.primary.main,
  },

  button: {
    color: '#FFFFFF',
    backgroundColor: theme.palette.primary.main,
  },
});

export default function Upload() {
  const classes = useStyles();

  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return (
        <Typography
          align="center"
          alingItems="center"
          className={classes.dropzone}
        >
          Arraste ou selecione arquivos aqui...
        </Typography>
      );
    }
    if (isDragReject) {
      return (
        <Typography
          type="error"
          alignContent="center"
          className={classes.acceptFile}
        >
          Arquivo não suportado!
        </Typography>
      );
    }
    return (
      <Typography
        type="success"
        alignContent="center"
        className={classes.rejectFile}
      >
        Solte os arquivos aqui.
      </Typography>
    );
  }

  function progressView() {
    if (uploaded == 1) {
      return (
        <Grid container direction="row" align="center" justify="center">
          <Grid>
            <Typography>Enviando...</Typography>
          </Grid>
          <Grid>
            <CircularProgress size={20} />
          </Grid>
        </Grid>
      );
    }
    if (uploaded == 2) {
      return <Typography>Arquivo Enviado</Typography>;
    }
    if (uploaded == 3) {
      return <Typography>Erro ao enviar.</Typography>;
    }
  }

  const [file, setFile] = useState({ name: 'Nenhum Arquivo' });
  const [uploaded, setUploaded] = useState(0);

  const onSubmitFile = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('file', file);
    setUploaded(1);

    api
      .post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(function () {
        console.log('SUCCESS!!');
        setUploaded(2);
      })
      .catch(function (err) {
        console.log('FAILURE!!', err);
        setUploaded(3);
      });
  };

  return (
    <form
      id="uploadForm"
      action=""
      role="form"
      method="post"
      enctype="multipart/form-data"
    >
      <Grid container direction="column" align="center">
        <Typography></Typography>
        <Typography variant="h6" className={classes.title} align="center">
          Upload de Arquivos
        </Typography>
        <Dropzone
          accept={['text/csv', 'application/vnd.ms-excel']}
          onDropAccepted={(file) => setFile(file[0])}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <Container
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
              {renderDragMessage(isDragActive, isDragReject)}
            </Container>
          )}
        </Dropzone>
        <Grid>
          <Typography>Arquivo carregado: {file.name}</Typography>
          {progressView()}
          <Button
            type="submit"
            onClick={onSubmitFile}
            className={classes.button}
          >
            Upload
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
