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
import "../css/exerciseTable.css"
import Box from '@material-ui/core/Box';

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

function createData(name, fat, carbs, protein, calories) {
  return { name, fat, carbs, protein, calories };
}

const rows = [
  createData('Frozen yoghurt', 6.0, 24, 4.0, 159),
  createData('Ice cream sandwich', 9.0, 37, 4.3, 237),
  createData('Eclair', 16.0, 24, 6.0, 262),
  createData('Cupcake', 3.7, 67, 4.3, 305),
  createData('Gingerbread', 16.0, 49, 3.9, 356),
];

const useStyles = makeStyles({
  table: {
    minWidth: 340,
  },
});

function MealTable() {
  const classes = useStyles();

  return (
    <Grid item xs={10}>
    <Box boxShadow={0}>
    <Card className={classes.card} style={{borderRadius: '15px', boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)', marginTop:'25px',}}>
     <CardContent>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Food For the Day</StyledTableCell>
            <StyledTableCell align="center">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="center">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="center">Calories</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
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

export default MealTable;