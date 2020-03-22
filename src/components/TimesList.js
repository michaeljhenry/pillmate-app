import React from 'react';
import {connect} from 'react-redux';
import TimeListItem from '../components/TimeListItem';


export const TimesList = (props) => (
    <div className = 'content-container'>
    <div className = 'list-header'>
        <div className = 'show-for-desktop'>Day</div>
        <div className = 'show-for-desktop'>Time One</div>
        <div className = 'show-for-desktop'>Time Two</div>
    </div>
        <div className = 'list-body'>
            {
                props.times.length === 0 ? (
                    <div>
                    No Times
                    </div>
                ) : (
                    props.times.map((time) => {
                    return <TimeListItem key = {time.id} {...time}/>
                    })
                )
        }
        </div>
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