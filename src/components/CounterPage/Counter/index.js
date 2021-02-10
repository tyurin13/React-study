import PropTypes from 'prop-types';

const Counter = ({ countValue, parityType, handleIncrease, handleDecrease, handleReset }) => {

  return (

    <div>
        <div>{countValue}</div>
        <div>{parityType}</div>
        <div>
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