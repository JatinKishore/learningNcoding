import React from 'react'
import {useState} from 'react';



const Content = () => {
  const[name,setName] = useState('Dave');
  const[count,setCount] = useState(0);
  const nameChange = () =>{
      const arr = ["Dave","Sam","Altman"];
      const num = Math.floor(Math.random()*3)
      setName(arr[num])
  } 

  const countChange = () =>{
    setCount(count+1);    
    console.log(count)
  }

  return (
        <main>
        <p>Hello {name}</p>
        <button onClick={nameChange}> Click</button>
        <button onClick={countChange}> Click2</button>

      </main>    
  )
}

export default Content