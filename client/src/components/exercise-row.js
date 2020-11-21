import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import "./exercise-row.css"
import Box from '@material-ui/core/Box';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      // minWidth: 100,
    
    },
  },
}))(TableRow);

function createData(name, sets, reps, weight, time) {
  return { name, sets, reps, weight, time };
}

const rows = [
  createData('Bicep Curls', 4, 10, 30, 7),
  createData('Hammer Curls', 4, 10, 35, 5),
  createData('Shoulder Press', 3, 10, 110, 6),
];

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

export default function ExcerciseTable() {
  const classes = useStyles();

  return (
    <Grid item xs={6}>
    <Box boxShadow={0}>
    <Card className={classes.card} style={{borderRadius: '15px', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)' }}>
     <CardContent>
     <TableContainer component={Paper}> 
      <Table className={classes.table} aria-label="excercise table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Workout</StyledTableCell>
            <StyledTableCell align="left">Sets&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Reps&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Weight&nbsp;(lbs)</StyledTableCell>
            <StyledTableCell align="left">Times&nbsp;(minutes)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.sets}</StyledTableCell>
              <StyledTableCell align="left">{row.reps}</StyledTableCell>
              <StyledTableCell align="left">{row.weight}</StyledTableCell>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </CardContent>
    </Card>
    </Box>
    </Grid> 

  );
}