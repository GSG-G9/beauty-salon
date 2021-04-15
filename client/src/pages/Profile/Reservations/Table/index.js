import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './style';
import { ButtonComponent } from '../../../../component';

const TableComponent = ({ reservations, handelDelete }) => {
  const classes = useStyles();
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Service Name</TableCell>
          <TableCell align="left" className={classes.hidden}>
            Stylists Name
          </TableCell>
          <TableCell align="left">Date</TableCell>
          <TableCell align="left">Time</TableCell>
          <TableCell align="left" />
        </TableRow>
      </TableHead>
      <TableBody>
        {reservations.map((reservation) => (
          <TableRow key={reservation.id}>
            <TableCell component="th" scope="row">
              {reservation.service_name}
            </TableCell>
            <TableCell align="left" className={classes.hidden}>
              {reservation.stylist_name}
            </TableCell>
            <TableCell align="left">{reservation.appointment_date}</TableCell>
            <TableCell align="left">{reservation.appointment_time}</TableCell>
            <TableCell align="left">
              <ButtonComponent
                onClick={() => {
                  handelDelete(reservation.id);
                }}
              >
                <DeleteIcon className={classes.deleteBtn} />
              </ButtonComponent>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
TableComponent.propTypes = {
  reservations: PropTypes.instanceOf(Array).isRequired,
  handelDelete: PropTypes.func.isRequired,
};
export default TableComponent;
