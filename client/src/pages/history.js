import React from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>

    createStyles({
        root: {
            flexGrow: 1,
        },
        grid: {
            width: '80%',
            marigin: '0xp',
        },
        paper: {
            padding: theme.spacing(8),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            //background: theme.palette.success.light,
        },
    })
);

function HistoryPage() {
    const classes = useStyles();

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    image="/Photos/history.jpg"</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>History</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>Meals</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>Workouts</Paper>
            </Grid>

        </Grid>


    );
};
export default HistoryPage;