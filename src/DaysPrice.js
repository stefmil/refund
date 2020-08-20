import React from 'react';
import './App.css';

export default class DaysPrice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
    }

  render() {
    const {absent} = this.props;
    return (
        <div className="daysPrice">

          <span>Broj odsustva: </span> <span>{absent}</span>
        </div>
    );
  }
}
