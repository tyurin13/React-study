import { Component } from "react";
import Counter from "../Counter";


class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      parityType: 'Even'
    }
  }

  handleIncrease = () => {
    this.setState({countValue: this.state.countValue + 1});
    this.checkParity();
  };

  handleDecrease = () => {

    if (this.state.countValue <= 0) {
      this.setState({countValue: 0})
    } else {
      this.setState({countValue: this.state.countValue - 1});
    }

    this.checkParity();
  };

  handleReset = () => {
    this.setState({countValue: 0});
    this.checkParity();
  };

  checkParity = () => {
    const checkParityResult = this.state.countValue % 2 === 0 ? 'Odd' : 'Even'
    this.setState({parityType: checkParityResult})
  }

  render() {

    return (
      <div>
        <Counter 
          countValue={this.state.countValue}
          parityType={this.state.parityType}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          handleReset={this.handleReset}
        />
      </div>
    )
  }
}

export default CounterContainer