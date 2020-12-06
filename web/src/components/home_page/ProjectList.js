import React from 'react';
import ProjectCard from './ProjectCard';
import { Grid, makeStyles } from '@material-ui/core';
import theme from '../../theme';

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(3),
  },
});

export default function ProjectList() {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.root}>
      <Grid>
        <ProjectCard />
      </Grid>
    </Grid>
  );
}
