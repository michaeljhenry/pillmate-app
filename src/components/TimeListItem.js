import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';




const TimeListItem = ({id, dispenseDay, hourOne, minuteOne, secondOne, hourTwo, minuteTwo, secondTwo}) => (
    <Link className = 'list-item' to = {`edit/${id}`}>
        <div>
            <h3 className= 'list-item__title'>{dispenseDay.slice(0,3)}</h3> 
        </div>
        <h3 className = 'list-item__data'>{hourOne > 12 ? (hourOne == 22 || hourOne == 23 ? hourOne - 12 : '0' + ((hourOne) - 12)) : hourOne}:{minuteOne}:{secondOne}{hourOne > 12 ? 'PM' : 'AM'}</h3>
        <h3 className = 'list-item__data'>{hourTwo > 12 ? (hourTwo == 22 || hourTwo == 23 ? hourTwo - 12 : '0' + ((hourTwo) - 12)) : hourTwo}:{minuteTwo}:{secondTwo}{hourTwo > 12 ? 'PM' : 'AM'}</h3>
        
    </Link>
);

export default TimeListItem