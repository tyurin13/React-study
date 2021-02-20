import CounterCard from "../../../commonComponents/CounterCard";
import {v4 as uuidv4} from 'uuid';

const CounterManagementPage = ({counterList, handleRemove, handleCreate, handleResetCounters}) => {
  return(
    <div key={uuidv4}>
      <button onClick={handleCreate}>Add Counter</button>
      <button onClick={handleResetCounters}>Reset</button>
      {counterList.map(({countValue, isEven}, index) => (
        <CounterCard key={index} countValue={countValue} isEven={isEven} handleRemove={handleRemove}/>
      ))}
    </div>
  )
}

export default CounterManagementPage