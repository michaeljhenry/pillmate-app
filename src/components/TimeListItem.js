import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';




const TimeListItem = ({id, dispenseDay, hourOne, minuteOne, secondOne, hourTwo, minuteTwo, secondTwo}) => (
    <Link to = {`edit/${id}`}>
        <div>
            <h3>{dispenseDay} {hourOne > 12 ? (hourOne) - 12 : hourOne}:{minuteOne}:{secondOne}{hourOne > 12 ? 'PM' : 'AM'} and {hourTwo}:{minuteTwo}:{secondTwo}{hourTwo > 12 ? 'PM' : 'AM'}</h3>
        </div>
    </Link>
);

export default TimeListItem