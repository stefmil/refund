import React from 'react';
import './App.css';

export default class Final extends React.Component {
  render() {
      const {refund} = this.props;
    return (
        <div className="final">
          <span>Iznos:</span> <span>{refund} din</span>
        </div>
    );
  }
}
