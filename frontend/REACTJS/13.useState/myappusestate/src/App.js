import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const MoreContent = () => {
  return (<p>

    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but
    also the leap into electronic typesetting, remaining essentially
    unchanged. It was popularised in the 1960s with the release of Letraset
    sheets containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem
    Ipsum.
  </p>

  )
}
function App() {
  const [isShow, setShow] = useState(false);

  return (
    <div className="App">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
      {isShow === true ? <MoreContent /> : ''}
      {isShow === false ? <a href='/#' onClick={() => {
        setShow(true)
      }}>Readmore</a> : ""
      }

    </div>
  );
}

export default App;
