
import  GlobalData  from './GlobalData';
import PakistanData from './PakistanData' 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}><GlobalData /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><PakistanData /></Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}