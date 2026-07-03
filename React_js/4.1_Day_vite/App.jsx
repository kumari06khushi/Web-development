
import { useState } from "react";

// useState,count = 2, setcount
//setcount ki value ko update kr sakte ho, and app function ko re-render kar skte ho

function App (){

  let [count, setCount] = useState(0);
  ///let count = 0;

//    function increaseNumber (){
//    count++;

//      const para = document.querySelector('p'); 
//   para.textContent = `Counter : ${count}`;

//   const button = document.querySelector('button');
//   para.textContent = `Increment : ${count}`;
//  }


// -----other method--------

function increaseNumber(){
  count++;
  setCount(count);  //setCount(count) means --> update state
}

return(
<>
<p> Counter: {count}</p>
<button onClick={increaseNumber}>Increment</button>
</>
)
}
export default App;