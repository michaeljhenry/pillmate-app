import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';
import TimesList from '../components/TimesList'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const DashboardPage = () => {

  return(
    <div>
        <div className = 'content-container'>
          <Link className = 'button' to='/create'>Add Time</Link>
        </div>
        <TimesList/>
    </div>
  )
};

export default DashboardPage;