import { Component } from "react";

class CounterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      patityType: 'Even'
    }
  }

  handleIncrease = () => {
    this.setState({countValue: this.state.countValue + 1})
  };

  handleDecrease = () => {
    this.setState({countValue: this.state.countValue - 1})
  };

  handleReset = () => {
    this.setState({countValue: 0})
  };

  handleCheckParity = () => {
    this.setState({patityType: this.state.countValue % 2 === 0 ? 'Even' : 'Odd'})
  }

  render() {

    return (

      <div>
        <div>0</div>
        <div>Even</div>
        <div>
          <div>
            <button>-</button>
          </div>
          <div>
            <button>+</button>
          </div>
          <div>
            <button>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CounterPage