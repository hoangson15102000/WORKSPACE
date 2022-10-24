
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
// import Toggle from './Toggle';
// import Content from './Content';

// init state
const initState = 0;
// Actions

const UP_ACTION = 'up';

const DOWN_ACTION = 'down';

// tạo ra reducer là 1 hàm nhận vào 2 tham số state và actions

const reducer = (state, action) => {
  console.log('reducer is running');
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action')
  }
}


function App1() {
  // useState
  // 1. xác định giá trị khởi tạo = 0
  // 2. hành động : up ( state+1) down ( state -1)

  // useReducer
  // 1. xác định giá trị khởi tạo = 0
  // 2. hành động : up ( state+1) down ( state -1)
  // 3. Reducer
  // 4. Dispatch là hành động giúp action kích hoạt, re render

  const [count, dispatch] = useReducer(reducer, initState)
  // useState phù hợp với các state đơn giản , array object 1 cấp
  // và số lượng state rất ít

  // Cái gì useReducer giải quyết được thì useState giải quyết được 
  // sử dụng khi nhiều state, logic phức tạp


  // dispatch truyền vào 1 action , gọi hàm reducer , lấy state hiện tại

  // init state làm state = 0, truyền action DOWN hoặc UP vào , return ra 



  return (
    <div style={{ padding: 32 }}>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(DOWN_ACTION)}
      >Down</button>
      <button
        onClick={() => dispatch(UP_ACTION)}
      >Up</button>
    </div>
  )
}


export default App1;
