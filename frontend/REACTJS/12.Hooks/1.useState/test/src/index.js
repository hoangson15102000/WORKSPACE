import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Toggle from './Toggle';

/// fake comment
function editComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung comment cua lesson ${id}`
      })
    )
  }, 3000)
}
editComment(1)
editComment(2)
editComment(3)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

