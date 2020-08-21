import React from 'react';
import './App.css';
import './index.css';
import FixedVars from './FixedVars';
import DaysVars from './DaysVars';
import DaysPrice from './DaysPrice';
import Final from './Final';
import {numOfNonWorkingDays, numOfWorkingDays} from './util.js'

export default class Refund extends React.Component {

    constructor(props){
        super(props);
        this.numOfNonWorkingDays = numOfNonWorkingDays.bind(this);
        this.numOfWorkingDays = numOfWorkingDays.bind(this);
    }

    state = {
        date: new Date(),
        absent: 0,
        refund: 0
    };

    onChangeAbsent = (a) => {
        this.setState({absent: a}, () => {
            this.calculate();
        });
    };

    onChangeDate = (d) => {
        this.setState({date: d}, () => {
            this.calculate();
        });
    };

    calculate = () => {
        var economicPrice=27976,
            statePrice=5590,
            numOfWorkingDays=this.numOfWorkingDays(this.state.date),
            numOfNonWorkingDays=this.numOfNonWorkingDays(this.state.date),
            finalWorkingDays=numOfWorkingDays-numOfNonWorkingDays,
            absent=this.state.absent,
            present=numOfWorkingDays-numOfNonWorkingDays-absent;
        console.log("Date: " + this.state.date);
        console.log("NumOfWorkingDays: " + this.numOfWorkingDays(this.state.date));
        console.log("NumOfNonWorkingDays: " + this.numOfNonWorkingDays(this.state.date));
        console.log("Absent: " + this.state.absent);

        var presentPrice=economicPrice/finalWorkingDays,
            absentPrice=presentPrice/2;

        var refund = (present*presentPrice + absent*absentPrice) - statePrice;
        this.setState({refund: refund.toFixed(2)});

    };

    render () {
        return (<div className="conCol">
                    <div className="conRow">
                        <FixedVars />
                        <div className="line" />
                        <DaysVars onChangeDate ={this.onChangeDate} onChangeAbsent={this.onChangeAbsent} />
                        <div className="line" />
                        <DaysPrice absent={this.state.absent} />
                    </div>
                    <div>
                        <Final refund={this.state.refund}/>
                    </div>
                </div>
    );
  }
}
