import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
<<<<<<< HEAD
//import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import {TabPanel} from '@material-ui/lab'
//import React, { useEffect } from "react";
//import { Link } from "react-router-dom";
import ExcerciseTable from './exerciseTable';
import API from '../utils/API';

function loadWorkout() {
  API.getAllWorkouts()
    .then(res => 
      setWorkout(res.data)
    )
    .catch(err => console.log(err));
};

function deleteWorkout(id) {
  API.deleteWorkout(id)
    .then(res => loadWorkout())
    .catch(err => console.log(err));
}
=======
import Youtube from '../components/youtube';
import Food from '../components/food';
import "../css/main.css"
>>>>>>> f228e3eae19bf44c245b1a5c30bace3a8633a63e


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <TabList onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Fitness" value="1" />
          <Tab label="Meals" value="2" />
        </TabList>
      </Tabs>
      <TabPanel value="1" ><ExcerciseTable /> </TabPanel>
      <TabPanel value="2" > </TabPanel>

    </Paper>
  );
}

