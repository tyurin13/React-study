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
    this.setState((state) => ({ countValue: state.countValue + 1 }) );
  };

  handleDecrease = () => {
    if (this.state.countValue > 0) {
      this.setState((state) => ({ countValue: state.countValue - 1 }) )
    };
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
  };

  componentDidUpdate(prevProps, prevState) {

    if (this.state.countValue !== prevState.countValue) {
      const isEven = this.state.countValue % 2 === 0;

      this.setState((state) => {

        return {
          ...state,
          isEven
        }
      })
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