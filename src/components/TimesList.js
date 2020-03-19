import React from 'react';
import {connect} from 'react-redux';
import TimeListItem from '../components/TimeListItem';


export const TimesList = (props) => (
    <div>
        {
            props.times.length === 0 ? (
                <div>
                No Expenses
                </div>
            ) : (
                props.times.map((time) => {
                return <TimeListItem key = {time.id} {...time}/>
                })
            )
    }
    </div>
);

const mapStateToProps = (state) => {
    //console.log(state.times);
    let num = 0;
    //console.log(state.times);
    return {
        times: state.times,
        number: num++
    }
}
export default connect(mapStateToProps)(TimesList);