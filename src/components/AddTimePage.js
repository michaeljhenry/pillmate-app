import React, {Component} from 'react';
import {connect} from 'react-redux';
import { render } from 'enzyme';
import TimeForm from './TimeForm';
import {startAddTime} from '../actions/times';
import {startAddDay} from '../actions/days';


class AddTimePage extends React.Component  {
    onSubmit = (time) => {
        this.props.startAddTime(time);
        this.props.startAddDay(time);
        this.props.history.push('/dashboard');
    }
    render() {
        return(
            <div>
                <TimeForm onSubmit = {this.onSubmit}/>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    
    return{
        startAddTime: (time) => dispatch(startAddTime(time)),
        startAddDay: (day) => dispatch(startAddDay(day))
    }
};

export default connect(undefined, mapDispatchToProps)(AddTimePage);