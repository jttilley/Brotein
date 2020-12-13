import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Food from '../components/food';
import YouTube from '../components/youtube';
//import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
// import TabPanel from '@material-ui/lab';
import {TabPanel} from '@material-ui/lab'
import AppBar from '@material-ui/core/AppBar';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function CenteredTabs() {
    const classes = useStyles();
    const [tabValue, setTabValue] = React.useState("2");

    const handleChange = (event, newValue) => {
        console.log('newValue: ', newValue);
        setTabValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <TabContext value={tabValue}>
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="secondary"
                    centered
                >

                    <TabList value="1" onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Youtube" value="1" index="0" />
                        <Tab label="Recipes" value="2" index="1"/>
                    </TabList>
                </Tabs>

                <TabPanel value="1" index="0"> <span> <YouTube /> </span> </TabPanel>
                <TabPanel value="2" index="1"><span><Food /> </span></TabPanel>


            </TabContext>
        </Paper >
    );
}
