import React from 'react';
import DatePicker from "react-datepicker";
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import {locale} from './util'

export default class DaysVars extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date();
        this.state = {
            startDate: new Date(today.getFullYear(), today.getMonth(), 2),
            minDate: new Date(2020,0,1)
        };

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleAbsentChange = this.handleAbsentChange.bind(this);
    }


  handleDateChange = date => {
      this.setState({startDate: date});
    this.props.onChangeDate(date);
  };

    handleAbsentChange = a => {
        this.props.onChangeAbsent(a.target.value);
    };

  render() {
    return (
        <div className = "daysVars" >
          <div>
            <span> Mesec: </span><DatePicker locale={locale} dateFormat="MMMM yyyy" showMonthYearPicker showFullMonthYearPicker selected={this.state.startDate} onChange={this.handleDateChange} minDate={this.state.minDate}/>
          </div>
          <div>
              <label>
                  Broj odsustva: <input type="text" className="dayInput" value={this.state.absent} onChange={this.handleAbsentChange} />
              </label>
          </div>
        </div>);
  }
}

