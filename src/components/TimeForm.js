import React from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';

export class TimeForm extends React.Component {
    constructor(props) {
        let num = 0;
        super(props);
        //console.log('props.time is: ', props.time);
        this.state = {
            id: props.time ? props.time.id : null,
            dispenseDay: props.time ? props.time.dispenseDay : '',
            hourOne: props.time ? props.time.hourOne : null,
            minuteOne: props.time ? props.time.minuteOne : null,
            secondOne: props.time ? props.time.secondOne : null,
            hourTwo: props.time ? props.time.hourTwo : null,
            minuteTwo: props.time ? props.time.minuteTwo : null,
            secondTwo: props.time ? props.time.secondTwo : null,
            errorState: ''
        };
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.dispenseDay || !this.state.hourOne || !this.state.minuteOne || !this.state.secondOne || !this.state.hourTwo || !this.state.minuteTwo || !this.state.secondTwo) {
                this.setState(() => ({error: 'Please provide a description and amount'
            }))
        } else {
            this.props.onSubmit(this.state);
        }
        
    }
    onDispenseDayChange = (e) => {
        const dispenseDay = e.target.value;
        this.setState(() => ({dispenseDay}))
        
    }
    onHourOneChange = (e) => {
        const hourOne = e.target.value;
        this.setState(() => ({hourOne}));
    }
    onMinuteOneChange = (e) => {
        const minuteOne = e.target.value;
        this.setState(() => ({minuteOne}));
    }
    onSecondOneChange = (e) => {
        const secondOne = e.target.value;
        this.setState(() => ({secondOne}))
    }
    onHourTwoChange = (e) => {
        const hourTwo = e.target.value;
        this.setState(() => ({hourTwo}));
    }
    onMinuteTwoChange = (e) => {
        const minuteTwo = e.target.value;
        this.setState(() => ({minuteTwo}));
    }
    onSecondTwoChange = (e) => {
        const secondTwo = e.target.value;
        this.setState(() => ({secondTwo}))
    }
    render() {
        return(
            <div>
            Add Times
                <form onSubmit = {this.onSubmit}>
                {this.state.error && <p className = 'form__error'>{this.state.error}</p>}
                <select disabled = {this.props.time ? true : false} onChange = {this.onDispenseDayChange} className = 'dispenseDay'size="1">
                    <option value = {this.state.dispenseDay === '' ? '' : this.state.dispenseDay}>{this.state.dispenseDay === '' ? '' : this.state.dispenseDay}</option>
                    <option disabled = {this.props.daysTaken.findIndex((element) => 'Sunday' === element) !== -1 ? true : false } value = 'Sunday'>Sun</option>
                    <option disabled =  {this.props.daysTaken.findIndex((element) => 'Monday' === element) !== -1 ? true : false } value = 'Monday'>Mon</option>
                    <option disabled =  {this.props.daysTaken.findIndex((element) => 'Tuesday' === element) !== -1 ? true : false } value = 'Tuesday'>Tues</option>
                    <option disabled =  {this.props.daysTaken.findIndex((element) => 'Wednesday' === element) !== -1 ? true : false } value = 'Wednesday'>Wed</option>
                    <option disabled =  {this.props.daysTaken.findIndex((element) => 'Thursday' === element) !== -1 ? true : false } value = 'Thursday'>Thurs</option>
                    <option disabled =  {this.props.daysTaken.findIndex((element) => 'Friday' === element) !== -1 ? true : false } value = 'Friday'>Fri</option>
                    <option disabled =  {this.props.daysTaken.findIndex((element) => 'Saturday' === element) !== -1 ? true : false } value = 'Saturday'>Sat</option>
                </select>
                  <select onChange = {this.onHourOneChange} className = 'hourOne'size="1">
                    <option value = ''></option>
                    <option value = '00'>00</option>
                    <option value = '01'>01</option>
                    <option value = '02'>02</option>
                    <option value = '03'>03</option>
                    <option value = '04'>04</option>
                    <option value = '05'>05</option>
                    <option value = '06'>06</option>
                    <option value = '07'>07</option>
                    <option value = '08'>08</option>
                    <option value = '09'>09</option>
                    <option value = '10'>10</option>
                    <option value = '11'>11</option>
                    <option value = '12'>12</option>
                    <option value = '13'>13</option>
                    <option value = '14'>14</option>
                    <option value = '15'>15</option>
                    <option value = '16'>16</option>
                    <option value = '17'>17</option>
                    <option value = '18'>18</option>
                    <option value = '19'>19</option>
                    <option value = '20'>20</option>
                    <option value = '21'>21</option>
                    <option value = '22'>22</option>
                    <option value = '23'>23</option>
                </select>
                <select onChange = {this.onMinuteOneChange} className = 'minuteOne' size="1">
                    <option value = ''></option>
                  <option value = '00'>00</option>
                  <option value = '01'>01</option>
                  <option value = '02'>02</option>
                  <option value = '03'>03</option>
                  <option value = '04'>04</option>
                  <option value = '05'>05</option>
                  <option value = '06'>06</option>
                  <option value = '07'>07</option>
                  <option value = '08'>08</option>
                  <option value = '09'>09</option>
                  <option value = '10'>10</option>
                  <option value = '11'>11</option>
                  <option value = '12'>12</option>
                  <option value = '13'>13</option>
                  <option value = '14'>14</option>
                  <option value = '15'>15</option>
                  <option value = '16'>16</option>
                  <option value = '17'>17</option>
                  <option value = '18'>18</option>
                  <option value = '19'>19</option>
                  <option value = '20'>20</option>
                  <option value = '21'>21</option>
                  <option value = '22'>22</option>
                  <option value = '23'>23</option>
                  <option value = '24'>24</option>
                  <option value = '25'>25</option>
                  <option value = '26'>26</option>
                  <option value = '27'>27</option>
                  <option value = '28'>28</option>
                  <option value = '29'>29</option>
                  <option value = '30'>30</option>
                  <option value = '31'>31</option>
                  <option value = '32'>32</option>
                  <option value = '33'>33</option>
                  <option value = '34'>34</option>
                  <option value = '35'>35</option>
                  <option value = '36'>36</option>
                  <option value = '37'>37</option>
                  <option value = '38'>38</option>
                  <option value = '39'>39</option>
                  <option value = '40'>40</option>
                  <option value = '41'>41</option>
                  <option value = '42'>42</option>
                  <option value = '43'>43</option>
                  <option value = '44'>44</option>
                  <option value = '45'>45</option>
                  <option value = '46'>46</option>
                  <option value = '47'>47</option>
                  <option value = '48'>48</option>
                  <option value = '49'>49</option>
                  <option value = '50'>50</option>
                  <option value = '51'>51</option>
                  <option value = '52'>52</option>
                  <option value = '53'>53</option>
                  <option value = '54'>54</option>
                  <option value = '55'>55</option>
                  <option value = '56'>56</option>
                  <option value = '57'>57</option>
                  <option value = '58'>58</option>
                  <option value = '59'>59</option>
                  <option value = '60'>60</option>
              </select>
              <select className = 'secondOne' onChange = {this.onSecondOneChange}size="1">
              <option value = ''></option>
                <option value = '00'>00</option>
                <option value = '01'>01</option>
                <option value = '02'>02</option>
                <option value = '03'>03</option>
                <option value = '04'>04</option>
                <option value = '05'>05</option>
                <option value = '06'>06</option>
                <option value = '07'>07</option>
                <option value = '08'>08</option>
                <option value = '09'>09</option>
                <option value = '10'>10</option>
                <option value = '11'>11</option>
                <option value = '12'>12</option>
                <option value = '13'>13</option>
                <option value = '14'>14</option>
                <option value = '15'>15</option>
                <option value = '16'>16</option>
                <option value = '17'>17</option>
                <option value = '18'>18</option>
                <option value = '19'>19</option>
                <option value = '20'>20</option>
                <option value = '21'>21</option>
                <option value = '22'>22</option>
                <option value = '23'>23</option>
                <option value = '24'>24</option>
                <option value = '25'>25</option>
                <option value = '26'>26</option>
                <option value = '27'>27</option>
                <option value = '28'>28</option>
                <option value = '29'>29</option>
                <option value = '30'>30</option>
                <option value = '31'>31</option>
                <option value = '32'>32</option>
                <option value = '33'>33</option>
                <option value = '34'>34</option>
                <option value = '35'>35</option>
                <option value = '36'>36</option>
                <option value = '37'>37</option>
                <option value = '38'>38</option>
                <option value = '39'>39</option>
                <option value = '40'>40</option>
                <option value = '41'>41</option>
                <option value = '42'>42</option>
                <option value = '43'>43</option>
                <option value = '44'>44</option>
                <option value = '45'>45</option>
                <option value = '46'>46</option>
                <option value = '47'>47</option>
                <option value = '48'>48</option>
                <option value = '49'>49</option>
                <option value = '50'>50</option>
                <option value = '51'>51</option>
                <option value = '52'>52</option>
                <option value = '53'>53</option>
                <option value = '54'>54</option>
                <option value = '55'>55</option>
                <option value = '56'>56</option>
                <option value = '57'>57</option>
                <option value = '58'>58</option>
                <option value = '59'>59</option>
                <option value = '60'>60</option>
          </select>
          <select onChange = {this.onHourTwoChange} className = 'hourTwo' size="1">
          <option value = ''></option>
            <option value = '00'>00</option>
            <option value = '01'>01</option>
            <option value = '02'>02</option>
            <option value = '03'>03</option>
            <option value = '04'>04</option>
            <option value = '05'>05</option>
            <option value = '06'>06</option>
            <option value = '07'>07</option>
            <option value = '08'>08</option>
            <option value = '09'>09</option>
            <option value = '10'>10</option>
            <option value = '11'>11</option>
            <option value = '12'>12</option>
            <option value = '13'>13</option>
            <option value = '14'>14</option>
            <option value = '15'>15</option>
            <option value = '16'>16</option>
            <option value = '17'>17</option>
            <option value = '18'>18</option>
            <option value = '19'>19</option>
            <option value = '20'>20</option>
            <option value = '21'>21</option>
            <option value = '22'>22</option>
            <option value = '23'>23</option>
        </select>
        <select onChange = {this.onMinuteTwoChange} className = 'minuteTwo' size="1">
        <option value = {''}></option>
            <option value = '00'>00</option>
            <option value = '01'>01</option>
            <option value = '02'>02</option>
            <option value = '03'>03</option>
            <option value = '04'>04</option>
            <option value = '05'>05</option>
            <option value = '06'>06</option>
            <option value = '07'>07</option>
            <option value = '08'>08</option>
            <option value = '09'>09</option>
            <option value = '10'>10</option>
            <option value = '11'>11</option>
            <option value = '12'>12</option>
            <option value = '13'>13</option>
            <option value = '14'>14</option>
            <option value = '15'>15</option>
            <option value = '16'>16</option>
            <option value = '17'>17</option>
            <option value = '18'>18</option>
            <option value = '19'>19</option>
            <option value = '20'>20</option>
            <option value = '21'>21</option>
            <option value = '22'>22</option>
            <option value = '23'>23</option>
            <option value = '24'>24</option>
            <option value = '25'>25</option>
            <option value = '26'>26</option>
            <option value = '27'>27</option>
            <option value = '28'>28</option>
            <option value = '29'>29</option>
            <option value = '30'>30</option>
            <option value = '31'>31</option>
            <option value = '32'>32</option>
            <option value = '33'>33</option>
            <option value = '34'>34</option>
            <option value = '35'>35</option>
            <option value = '36'>36</option>
            <option value = '37'>37</option>
            <option value = '38'>38</option>
            <option value = '39'>39</option>
            <option value = '40'>40</option>
            <option value = '41'>41</option>
            <option value = '42'>42</option>
            <option value = '43'>43</option>
            <option value = '44'>44</option>
            <option value = '45'>45</option>
            <option value = '46'>46</option>
            <option value = '47'>47</option>
            <option value = '48'>48</option>
            <option value = '49'>49</option>
            <option value = '50'>50</option>
            <option value = '51'>51</option>
            <option value = '52'>52</option>
            <option value = '53'>53</option>
            <option value = '54'>54</option>
            <option value = '55'>55</option>
            <option value = '56'>56</option>
            <option value = '57'>57</option>
            <option value = '58'>58</option>
            <option value = '59'>59</option>
            <option value = '60'>60</option>
    </select>
    <select className = 'secondTwo' onChange = {this.onSecondTwoChange}size="1">
    <option value = ''></option>
        <option value = '00'>00</option>
        <option value = '01'>01</option>
        <option value = '02'>02</option>
        <option value = '03'>03</option>
        <option value = '04'>04</option>
        <option value = '05'>05</option>
        <option value = '06'>06</option>
        <option value = '07'>07</option>
        <option value = '08'>08</option>
        <option value = '09'>09</option>
        <option value = '10'>10</option>
        <option value = '11'>11</option>
        <option value = '12'>12</option>
        <option value = '13'>13</option>
        <option value = '14'>14</option>
        <option value = '15'>15</option>
        <option value = '16'>16</option>
        <option value = '17'>17</option>
        <option value = '18'>18</option>
        <option value = '19'>19</option>
        <option value = '20'>20</option>
        <option value = '21'>21</option>
        <option value = '22'>22</option>
        <option value = '23'>23</option>
        <option value = '24'>24</option>
        <option value = '25'>25</option>
        <option value = '26'>26</option>
        <option value = '27'>27</option>
        <option value = '28'>28</option>
        <option value = '29'>29</option>
        <option value = '30'>30</option>
        <option value = '31'>31</option>
        <option value = '32'>32</option>
        <option value = '33'>33</option>
        <option value = '34'>34</option>
        <option value = '35'>35</option>
        <option value = '36'>36</option>
        <option value = '37'>37</option>
        <option value = '38'>38</option>
        <option value = '39'>39</option>
        <option value = '40'>40</option>
        <option value = '41'>41</option>
        <option value = '42'>42</option>
        <option value = '43'>43</option>
        <option value = '44'>44</option>
        <option value = '45'>45</option>
        <option value = '46'>46</option>
        <option value = '47'>47</option>
        <option value = '48'>48</option>
        <option value = '49'>49</option>
        <option value = '50'>50</option>
        <option value = '51'>51</option>
        <option value = '52'>52</option>
        <option value = '53'>53</option>
        <option value = '54'>54</option>
        <option value = '55'>55</option>
        <option value = '56'>56</option>
        <option value = '57'>57</option>
        <option value = '58'>58</option>
        <option value = '59'>59</option>
        <option value = '60'>60</option>
</select>
          <button>Submit</button>
          </form>
        </div>

        )
    }
    
};

const mapPropsToState = (state) => {
    console.log('This is the state: ', state);
    return {
        daysTaken: state.days
    }
}

export default connect(mapPropsToState)(TimeForm);