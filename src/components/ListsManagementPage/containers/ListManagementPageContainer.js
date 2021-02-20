import CounterManagementPage from "../components/CounterManagementPage";
import mockCounterList from '../../ListsPage/userList';
import { useMemo, useState, useCallback } from "react";

const CounterManagementPageContainer = () => {
  
  const [counterList, changeCounterList] = useState(mockCounterList);

  const handleRemove = useCallback((index) => {
    const counterListCopy = [...counterList];

    counterListCopy.splice(index, 1);
    changeCounterList(counterListCopy)
  }, [counterList])

  const handleResetCounters = useCallback(() => {
    changeCounterList([])
  }, [counterList]);

  const handleIncrease = useCallback(() => {
    const counterListCopy = [...counterList];
    
  }, [counterList])
  
  const handleCreate = useCallback(() => {
    
    const newCounter = {
      countValue: 0,
      isEven: true
    }
    changeCounterList([newCounter, ...counterList])
  }, [counterList])

  return (
    <CounterManagementPage counterList={counterList} handleRemove={handleRemove} handleCreate={handleCreate} handleResetCounters={handleResetCounters} />
  )
}

export default CounterManagementPageContainer