import React, { useEffect, useState } from 'react'

 const App = () => {
  const[count, setCount] = useState();

  // useEffect(()=>{

  //   document.title( `count: ${count}`)
  // },[count])
  useEffect(() => {
    
  document.title = `count: ${count}`
  
  }, [count])
  
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  )
}
export default App;