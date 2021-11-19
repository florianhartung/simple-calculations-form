import React from 'react';
import './Calculation.css'

class Calculation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 0,
    };
  }

  updateResult(event) {
    this.setState((state,props) => ({
      result: props.formula(event.target.value),
    }));
  }

  render() {
    return (
      <div className='calculation-container'>
        <div className='calculation-label'>{this.props.label}</div>
        <div className='calculation-input-wrapper'>
          <input className='calculation-input' onChange={(e) => this.updateResult(e)}/>
        </div>
        <div className='calculation-result'>{this.state.result}</div>
      </div>
    );
  }
}

function CalculationGroup(props) {
  return (
    <div>
      <div className='calculation-group-label'>{props.label}</div>
      <div className='calculation-group'>
        {props.calculations.map(a => (
          <Calculation label={a[0]} formula={a[1]} />
        ))}
      </div>
    </div>
  );
}

export default CalculationGroup;
