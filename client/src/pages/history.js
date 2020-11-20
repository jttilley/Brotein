import React from 'react';
import { makeStyles } from = "@material-ui/core/styles";
import { Grid, Paper } from = "@material-ui/core";

const useStyles = makeStyles((theme) => ({


}));

function HistoryPage() {

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>History</Paper>
            </Grid>
            <Grid container xs={6}
                direction="row"
                justify="center"
                alignItem="stretch">
                <Paper className={classes.paper}>YOUTUBE</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>ARTICLES</Paper>
            </Grid>
        </Grid>



    );
};
export default HistoryPage;