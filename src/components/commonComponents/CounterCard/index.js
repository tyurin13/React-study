import PropTypes from 'prop-types';
import './styles.css';

const CounterCard = ({countValue, isEven, handleRemove}) => {
  return (
    <div className='wrapper'>
      <div className='userData'>
        <div>{countValue}</div>
        <div>{isEven ? 'Even' : 'Odd'}</div>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default CounterCard