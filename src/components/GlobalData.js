import { useEffect, useState } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { Pie } from 'react-chartjs-2';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(16),
    },
  },
}));

export default function GlobalData() {
  const classes = useStyles();
  const [gdata, setGD] = useState();

  useEffect(() => {
    async function fetchData() {
      const apiResponse = await fetch(
        "https://api.thevirustracker.com/free-api?global=stats"
      );
      const dataFromAPI = await apiResponse.json();
      setGD(dataFromAPI);
      console.log(gdata);
    }
    fetchData();
  }, []);


  

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

  return (
      <div>
    <div className={classes.root}>
      <Paper elevation={3} style={{color: 'orange'}}>
      <div>
      <h3>{gdata && gdata.results && gdata.results[0].total_cases}<br />Total Cases</h3>
    </div>
      </Paper>
      <Paper elevation={3} style={{color: 'green'}}>
      <div>
      <h3>{gdata && gdata.results && gdata.results[0].total_recovered}<br />Total Recoverd</h3>
    </div>
      </Paper>
      <Paper elevation={3} style={{color: 'red'}}>
      <div>
      <h3>{gdata && gdata.results && gdata.results[0].total_deaths}<br />Total Deaths</h3>
    </div>
      </Paper>
    </div>
    <div>
            <Pie data={data} height={60} />
        </div>
        </div>
  );
}



