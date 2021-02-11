import PropTypes from 'prop-types';
import s from './style.css';

const Counter = ({ countValue, parityType, handleIncrease, handleDecrease, handleReset }) => {

  return (

    <div className='counterArea'>
      <div className='numberArea'>{countValue}</div>
      <div className='parityArea'>{parityType}</div>
      <div className='btnWrapper'>
        <div>
          <button onClick={handleDecrease}>-</button>
        </div>
        <div>
          <button onClick={handleIncrease}>+</button>
        </div>
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div>
        <button> <a href="/">Go to main</a> </button>
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