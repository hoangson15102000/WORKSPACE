
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Toggle from './Toggle';
import Content from './Content';
// 1. memo()-> Higher Order Component (HOC)
// 2. useCallback() tránh tạo ra hàm mới k cần thiết - hiệu năng performance

// - reference types
// - react memo
// - phải dùng react memo thì dùng usecallback mới có tác dụng nhé

//useMemo là một Hooks , viết trong phần thân COmponent tránh thực hiện
// 1 logic nào đó k cần thiết 
function App() {

  const [count, setCount] = useState(0);
  // Sử dụng useCallback để tăng hiệu năng
  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const nameRef = useRef()
  const handleSubmit = () => {
    setProducts([...products, {
      name,
      // price: Number(price) || ParseInt(price) 
      price: +price
    }])
    setName('');
    nameRef.current.focus()
  }
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log('tinh toan lai');
      return result + prod.price
    }, 0)
    return result;
  }, [products])

  return (
    <div style={{ padding: 32 }}>
      <Content
        onIncrease={handleIncrease} />
      <h1>{count}</h1>
      <br />

      <input
        ref={nameRef}
        value={name}
        placeholder='Enter name'
        onChange={e => setName(e.target.value)}

      ></input>
      <br />
      <input value={price}
        placeholder='Enter price'
        onChange={e => setPrice(e.target.value)}

      ></input>
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <p>Total:{total}</p>
      <ul>
        {products.map((product, index) => (
          <li key={index} >{product.name}  - {product.price}</li>))}
      </ul>
    </div>
  )
}


export default App;
