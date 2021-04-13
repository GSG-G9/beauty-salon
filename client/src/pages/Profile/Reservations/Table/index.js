import React from 'react';
// import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
// import Alert from '@material-ui/lab/Alert';

import useStyles from './style';
import { ButtonComponent } from '../../../../component';
// { reservations, handelDelete }
const TableComponent = () => {
  const classes = useStyles();
  return (
    <Table>
      <TableBody>
        {/* {reservations.length ? (
          reservations.map((reservation) => ( */}
        <TableRow>
          <TableCell component="th" scope="row">
            Service Name
          </TableCell>
          <TableCell align="right"> Stylists Name </TableCell>
          <TableCell align="right"> Appointment Date </TableCell>
          <TableCell align="right"> Appointment Time </TableCell>
          <TableCell align="right">
            <ButtonComponent
            // onClick={() => {
            //   handelDelete(reservation.id);
            // }}
            >
              <DeleteIcon className={classes.deleteBtn} />
            </ButtonComponent>
          </TableCell>
        </TableRow>
        {/* )) ) : (<Alert severity="info">no reservations added yet </Alert>
        )} */}
      </TableBody>
    </Table>
  );
};
// TableComponent.propTypes = {
//   reservation: PropTypes.instanceOf(Array).isRequired,
//   handelDelete: PropTypes.func.isRequired,
// };
export default TableComponent;
