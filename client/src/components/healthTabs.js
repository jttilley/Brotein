import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Food from '../components/food';
import YouTube from '../components/youtube';

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
                <Tab label="Youtube" value="1" onChange={<YouTube />} />
                <Tab label="Recipes" value="2" />
                {/* <Tab label="Recipes" value="1" content={Food} /> */}

            </Tabs >
        </Paper >
    );
}
