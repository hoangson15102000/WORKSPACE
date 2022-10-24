
import { useEffect, useRef, useState } from 'react';
import Toggle from './Toggle';
import Content from './Content';

// useRef để tạo các giá trị qua một tham chiếu bên ngoài function component
// useRef(initialValue)
function App() {

  const [show, setShow] = useState(false);
  const [count, setCount] = useState(60);
  const timeId = useRef(99); // return lại 1 object 
  console.log('ref', timeId);
  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = count;
  }, [count])

  const handleStart = () => {
    timeId.current = setInterval(() => { setCount(prev => prev - 1) }, 1000);
    console.log("start", timeId.current);



  }
  const handleStop = () => {
    clearInterval(timeId.current);
    console.log("stop", timeId.current);


  }
  // console.log(count, prevCount.current);

  return (
    <div style={{ padding: 32 }}>

      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Toggle />}


      <h1>{count}</h1>
      <Content />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>



    </div>
  )
}


export default App;
