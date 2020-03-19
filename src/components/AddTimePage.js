import React, {Component} from 'react';
import {connect} from 'react-redux';
import { render } from 'enzyme';
import TimeForm from './TimeForm';
import {addTime} from '../actions/times';


class AddTimePage extends React.Component  {
    onSubmit = (time) => {
        this.props.addTime(time);
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
        addTime: (time) => dispatch(addTime(time))
    }
};

export default connect(undefined, mapDispatchToProps)(AddTimePage);