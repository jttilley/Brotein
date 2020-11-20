import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
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
    },
  },
}))(TableRow);

function createData(name, sets, reps, weight) {
  return { name, sets, reps, weight };
}

const rows = [
  createData('Bicep Curls', 4, 10, 30),
  createData('Hammer Curls', 4, 10, 35),
  createData('Shoulder Press', 3, 10, 110),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ExcerciseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Workout</StyledTableCell>
            <StyledTableCell align="right">Sets&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Reps&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Weight&nbsp;(lbs)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.sets}</StyledTableCell>
              <StyledTableCell align="right">{row.reps}</StyledTableCell>
              <StyledTableCell align="right">{row.weight}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}