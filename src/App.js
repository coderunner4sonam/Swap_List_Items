import React, { useState } from 'react';
import List from './List';
import ButtonList from './ButtonList';

const list = ["hello", "my", "name", "is", "?"];
function App() {
  const [leftList, setLeftList] = useState(list);
  const [rightList, setRightList] = useState([]);
  const [selectLeft, setSelectLeft] = useState([]);
  const [selectRight, setSelectRight] = useState([]);

  function LeftListButton() {
    const rightData = leftList.filter((ele, ind) => selectLeft.includes(ind));
    setRightList([...rightList, ...rightData]);

    const leftData = leftList.filter((ele, ind) => !selectLeft.includes(ind));
    setLeftList(leftData);

    setSelectLeft([]);
  }

  function RightListButton() {
    const leftData = rightList.filter((ele, ind) => selectRight.includes(ind));
    setLeftList([...leftList, ...leftData]);

    const rightData = rightList.filter((ele, ind) => !selectRight.includes(ind));
    setRightList(rightData);

    setSelectRight([]);
  }

  function handleLeftList(index) {
    setSelectRight([]);
    if (selectLeft.includes(index)) {
      const remainingList = selectLeft.filter((ele) => ele !== index);
      setSelectLeft(remainingList);
    } else {
      setSelectLeft([...selectLeft, index]);
    }
  }

  function handleRightList(index) {
    setSelectLeft([]);
    if (selectRight.includes(index)) {
      const remainingList = selectRight.filter((ele) => ele !== index);
      setSelectRight(remainingList);
    } else {
      setSelectRight([...selectRight, index]);
    }
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",width:"90%",}}>
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
      
          <List list={leftList} handleList={handleLeftList} select={selectLeft}/> 
          <ButtonList LeftListButton={LeftListButton} RightListButton={RightListButton}/>
          <List list={rightList} handleList={handleRightList} select={selectRight}/> 
      </div>
    </div>
  );
}

export default App;
