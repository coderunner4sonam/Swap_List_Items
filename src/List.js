import React from 'react'

function List({list,handleList,select}) {

  return (
    <div
    
    >
       <div style={{ border: "1px solid black", width: "150px", height: "150px", borderRadius: "5px",marginTop:"10px" , padding:"60px"}}>
        {list.map((ele, ind) => (
          <div key={ind}>
            <input
              type="checkbox"
              id={`leftCheckbox-${ind}`}
              checked={select.includes(ind)}
              onChange={() => handleList(ind)}
            />
            {ele}
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default List
