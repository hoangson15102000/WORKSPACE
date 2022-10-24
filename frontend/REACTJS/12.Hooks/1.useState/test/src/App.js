import { useState } from 'react';
import Toggle from './Toggle';
/// Ví dụ đơn giản setState khi click chuột tăng
// function App() {
//   const [count, setCount] = useState(100);
//   const order = [100, 200, 300];
//   const [total, setTotal] = useState(() => {
//     const sum = order.reduce((value1, value2) => {

//       return value1 + value2;

//     })
//     console.log(sum);
//     return sum;
//   })

//   // handle when click
//   const handleOnClick = () => {
//     setCount(prev => prev + 1);
//     setTotal(prev => prev + 1)
//   }
//   const handleOnClickdown = () => {
//     setCount(prev => prev - 1)
//     setTotal(prev => prev - 1)
//   }
//   return (
//     <div style={{ padding: 50, color: "violet" }} className="App">
//       <h2>{count}</h2>
//       <h2>{total}</h2>

//       <button onClick={handleOnClick} >Click to increase number</button>
//       <button onClick={handleOnClickdown} >Click to decrease number</button>



//     </div>
//   );
// }

// export default App;
/// ví dụ set state các thông tin của 1 người 
function App() {
  const [info, setInfo] = useState({
    name: 'Nguyễn Văn Hoàng Nam',
    age: 20,
    address: '609 Trương Định , Hà Nội'
  })
  const updateInfo = () => {
    setInfo({
      ...info,
      bio: 'Yêu màu hồng ghét sự giả dối trong tim '
    })
  }
  const [show, setShow] = useState(false)

  return (
    <div style={{ padding: 50, color: "red" }} className="App">
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={updateInfo}>Update information</button>
      <div style={{ padding: 32 }}></div>

      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Toggle />}
    </div >
  );
}

export default App;


/// UseEffect lafm viec voi setInterval va setTimeout

