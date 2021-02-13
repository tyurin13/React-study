import { Component } from "react";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render () {

    return (
      <div>
        <button> <Link to="/counter">Go To Counter</Link></button>
      </div>
    )
  }
}

export default MainPage