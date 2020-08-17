import React from 'react';
import DatePicker from "react-datepicker";
import './App.css';
import "react-datepicker/dist/react-datepicker.css";

class Example extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
        <div className = "daysVars" >
          <div>
            <span> Mesec: </span> <DatePicker dateFormat="MM/yyyy"
    showMonthYearPicker selected = {this.state.startDate} onChange = {this.handleChange} />
          </div>
          <div>
            <span> Broj prisustva: </span> <input className = "dayInput" value = "" />
          </div>

          <div>
            <span> Brod odsustva </span> <input className="dayInput" value="" />
          </div>
        </div>);
  }
}

export default Example;
