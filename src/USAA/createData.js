import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein,rate,quantity,quality,vitamin,availability) {
  return { name, calories, fat, carbs, protein,rate,quantity,quality,vitamin,availability};
}

const rows = [
  createData('Yoghurt', 159, 6.0, 24, 4.0,20,2,'Good',20,'Yes'),
  createData('Icecream', 237, 9.0, 37, 4.3,34,5,'Good',34,'Yes'),
  createData('Eclair', 262, 16.0, 24, 6.0,56,10,'Average',34,67,'No'),
  createData('Cupcake', 305, 3.7, 67, 4.3,65,24,'Good',23,56,'Yes'),
  createData('Gingerbread', 356, 16.0, 49, 3.9,123,24,'Good',23,56,'Yes'),
  createData('Garlicbread', 467, 20.0, 78, 3.9,678,29,'Bad',29,556,'No'),
  createData('BlackForest', 560, 29.0, 45, 5.4,23,29,'Bad',29,556,'No'),
  createData('Pizza', 345, 56.0, 89, 9.9,79,35,'Good',29,556,'Yes'),
  createData('Burger', 245, 49.0, 78, 3.9,678,29,'Bad',29,556,'No'),
  createData('French Fries', 341, 98.0, 78, 3.9,567,88,'Bad',29,556,'No'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
      <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Rate&nbsp;(g)</TableCell>
            <TableCell align="right">Quantity&nbsp;(g)</TableCell>
            <TableCell align="right">Quality&nbsp;(g)</TableCell>
            <TableCell align="right">Vitamin&nbsp;(g)</TableCell>
            <TableCell align="right">Availability&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.rate}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.quality}</TableCell>
              <TableCell align="right">{row.vitamin}</TableCell>
              <TableCell align="right">{row.availability}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer><br/>


    



<div class="container">
  <h2> Table Using Bootstrap</h2>
 
  <table class="table" border="1">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Age</th>
        <th>Address</th>
        <th>Qualification</th>
        <th>College Name</th>
        <th>Highest Degree</th>
        <th>Date of Birth</th>
        <th>Marks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Divya</td>
        <td>Lakshmi</td>
        <td>divya@example.com</td>
        <td>22</td>
        <td>India</td>
        <td>B.E</td>
        <td>Sathyabama</td>
        <td>B.E</td>
        <td>28/11/98</td>
        <td>97</td>

      </tr>
      <tr>
        <td>Uma</td>
        <td>Maheswari</td>
        <td>uma@example.com</td>
        <td>26</td>
        <td>India</td>
        <td>B.E</td>
        <td>SKR</td>
        <td>B.E</td>
        <td>25/12/92</td>
        <td>98</td>
      </tr>
      <tr>
        <td>Sreejith</td>
        <td>PR</td>
        <td>sree@example.com</td>
        <td>27</td>
        <td>USA</td>
        <td>BSc</td>
        <td>Jain</td>
        <td>BSc</td>
        <td>08/11/89</td>
        <td>86</td>

      </tr>

      <tr>
        <td>Varun</td>
        <td>Rajesh</td>
        <td>varun@example.com</td>
        <td>22</td>
        <td>USA</td>
        <td>B.E</td>
        <td>Sathyabama</td>
        <td>B.E</td>
        <td>05/16/97</td>
        <td>86</td>

      </tr>

      <tr>
        <td>Viji</td>
        <td>Murali</td>
        <td>viji@example.com</td>
        <td>45</td>
        <td>India</td>
        <td>BSc</td>
        <td>Nidhi</td>
        <td>BSc</td>
        <td>20/04/66</td>
        <td>78</td>

      </tr>

      <tr>
        <td>Murali</td>
        <td>K</td>
        <td>murali@example.com</td>
        <td>45</td>
        <td>UK</td>
        <td>BSc</td>
        <td>Jain</td>
        <td>BSc</td>
        <td>09/12/89</td>
        <td>86</td>

      </tr>

      <tr>
        <td>Rithwik</td>
        <td>Sree</td>
        <td>rith@example.com</td>
        <td>20</td>
        <td>USA</td>
        <td>MBBS</td>
        <td>Chettinad</td>
        <td>MBBS</td>
        <td>19/04/17</td>
        <td>99</td>

      </tr>

      <tr>
        <td>Lucky</td>
        <td>Avvari</td>
        <td>lucky@example.com</td>
        <td>22</td>
        <td>USA</td>
        <td>BSc</td>
        <td>Jain</td>
        <td>BSc</td>
        <td>09/12/89</td>
        <td>67</td>

      </tr>

      <tr>
        <td>shalini</td>
        <td>P</td>
        <td>shalu@example.com</td>
        <td>25</td>
        <td>Canada</td>
        <td>Agri</td>
        <td>Jain</td>
        <td>Agri</td>
        <td>09/12/89</td>
        <td>86</td>

      </tr>

      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
        <td>45</td>
        <td>USA</td>
        <td>BSc</td>
        <td>Jain</td>
        <td>BSc</td>
        <td>09/12/89</td>
        <td>86</td>

      </tr>

      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
        <td>45</td>
        <td>USA</td>
        <td>BSc</td>
        <td>Jain</td>
        <td>BSc</td>
        <td>09/12/89</td>
        <td>86</td>

      </tr>
    </tbody>
  </table>
</div>
</div>
  );
}
