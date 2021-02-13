import { Component } from "react";

import Counter from "../Counter";

class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      isEven: true
    }
  }

  handleIncrease = () => {
    this.setState(() => { return { countValue: this.state.countValue + 1 } });
  };

  handleDecrease = () => {

    if (this.state.countValue <= 0) {
      this.setState({ countValue: 0 })

    } else {
      this.setState(() => { return { countValue: this.state.countValue - 1 } });
    }
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
  };

  checkParity = () => {
    const checkParityResult = this.state.countValue % 2 === 0 ? true : false;
    this.setState({ isEven: checkParityResult })
  }

  componentDidUpdate(prevProps) {

    if (this.state.isEven !== this.prevProps) {
      this.checkParity()
    };
  }

  render() {

    return (
      <div>
        <Counter
          countValue={this.state.countValue}
          isEven={this.state.isEven}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          handleReset={this.handleReset}
        />
      </div>
    )
  }
}

export default CounterContainer