import React from 'react';
import {connect} from 'react-redux';
import TimeForm from './TimeForm';
import {startEditTime} from '../actions/times';


export class EditTimePage extends React.Component {
    onSubmit = (time) => {
        // console.log('time is: ', time);
        // console.log('time id is: ', time.id);
        this.props.startEditTime(time.id, time);
        this.props.history.push('/dashboard');
    }
    render() {
        return(
        <div>
            <div className = 'page-header'>
            <div className = 'content-container'>
              <h1 className = 'page-header__title'>Edit Time</h1>
            </div>
          </div>
          <div className = 'content-container'>
                <TimeForm onSubmit = {this.onSubmit} time = {this.props.time}/>
            </div>
        </div>
        )
    }
};

const mapStateToProps = (state, props) => {
    // console.log('the full array is: ', state.times);
    // console.log('props: ', props);
    // console.log(state.times.find((time) => time.id=== props.match.params.id));
    return {
        time: state.times.find((time) => time.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditTime: (id, time) => dispatch(startEditTime(id, time))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditTimePage)
