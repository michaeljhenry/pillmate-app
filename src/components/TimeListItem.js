import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';




const TimeListItem = ({id, dispenseDay, hourOne, minuteOne, secondOne, hourTwo, minuteTwo, secondTwo}) => (
    <Link to = {`edit/${id}`}>
        <div>
            <h3>{dispenseDay} {hourOne} {minuteOne} {secondOne} and {hourTwo} {minuteTwo} {secondTwo}</h3>
        </div>
    </Link>
);

export default TimeListItem