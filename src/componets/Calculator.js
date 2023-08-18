import React from 'react';
import classes from './Home.module.css';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {},
    };
    this.btn = '';
  }

  handleClick = (btn) => {
    const { obj } = this.state;
    this.setState({ obj: calculate(obj, btn) });
    this.btn = btn;
  };

  showData = (obj) => {
    if (obj.next === 'AC') {
      return 0;
    }

    if (this.btn === '=') {
      return obj.total;
    }
    return obj.next;
  }

  render() {
    const buttons = [
      'AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
    ];
    const { obj } = this.state;
    return (
      <div className={classes.home}>
        <div className={classes.inner}>
          <div className={classes.result}>
            <input className={classes.resbox} value={this.showData(obj)} />
          </div>
          <div className={classes.btns}>
            {buttons.map((value) => (
              <Button
                value={value}
                key={value}
                onClick={() => this.handleClick(value)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
