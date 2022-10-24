import { useState } from 'react';
import Content from './Content';
/// component Context 
// comA --> ComB ---> comC


// theme: Dark/ Light
function App() {
  const [theme, setTheme] = useState('dark');
  // const toggleTheme 
  return (
    <div style={{ padding: 20 }}>
      <button>Toggle theme</button>
      <Content theme={theme} />

    </div>
  );
}

export default App;
