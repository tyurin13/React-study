import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

const Counter = ({ countValue, isEven, handleIncrease, handleDecrease, handleReset }) => {

  return (

    <div className='counterArea'>
      <div className='numberArea'>{countValue}</div>
      <div className={isEven ? 'parityAreaEven' : 'parityAreaOdd'}>{isEven ? 'Even' : 'Odd'}</div>
      <div className='btnWrapper'>
        <div>
          <button className='minusBtn' onClick={handleDecrease}>-</button>
        </div>
        <div>
          <button className='plusBtn' onClick={handleIncrease}>+</button>
        </div>
        <div>
          <button className='resetBtn' onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div>
        <Link to="/">
          <button> Go to main </button>
        </Link>
      </div>
    </div>
  )
}

Counter.propTypes = {
  countValue: PropTypes.number,
  parityType: PropTypes.string,
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func,
  handleReset: PropTypes.func

}

export default Counter