import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalculationGroup from './Calculation.js'



const calcCircle = [
  ['Area', (x) => Math.PI*x*x],
  ['Circumference', (x) => Math.PI*2*x],
];
const calcSquare = [
  ['Area of square', (x) => x*x],
  ['Circumference of square', (x) => 4*x],
]

ReactDOM.render(
  <div className='calculation-box'>
    <CalculationGroup label='Circle'calculations={calcCircle}/>
    <CalculationGroup label='Square (equal side lengths)'calculations={calcSquare}/>
  </div>,
  document.getElementById('root')
);
