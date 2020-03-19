import React from 'react';
import {connect} from 'react-redux';
import TimeForm from './TimeForm';
import {editTime} from '../actions/times';


export class EditTimePage extends React.Component {
    onSubmit = (time) => {
        // console.log('time is: ', time);
        // console.log('time id is: ', time.id);
        this.props.editTime(time.id, time);
        this.props.history.push('/dashboard');
    }
    render() {
        return(
            <div>
                <TimeForm onSubmit = {this.onSubmit} time = {this.props.time}/>
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
        editTime: (id, time) => dispatch(editTime(id, time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTimePage)
