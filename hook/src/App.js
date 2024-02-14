import './App.css';
import React, {useEffect, useState} from "react";

function App() {
  const [time,setTime]=useState(0);
  // const [val,setVal]=useState(0);
  // useEffect(()=> {
  //   console.log("My Component 2")
  //   return function()
  //   {
  //     console.log("unmounting 2");
  //   };
  // },[]);
  // useEffect(()=> {
  //   console.log("My Component")
  //   return function()
  //   {
  //     console.log("unmounting");
  //   };
  // },[val]);
 
//  
 useEffect(()=> {
  const timer=setInterval(()=>setTime(time+1), 1000);
  return function(){
    clearInterval(timer);
  }
},[time]);
  
  return (
    <div className="App">
      {/* <h1>count = {val}</h1>
      <button onClick={()=>setVal(val+1)}>but</button> */}
      <h1>Stop Watch</h1>
      <p>Current Time is {time}</p>
    </div>
  );
}

export default App;
