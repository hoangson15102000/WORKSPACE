import React from 'react';
import ReactDOM from 'react-dom';
import App from '.'



class App extends React.Component {
  constructor(props) {
    super(props);
    //Chỉ định một state
    this.state = { index: 1 };
  }
  render() {
    return (
      <div>
        <p>Giá trị {this.state.index}</p>
        <button
          onClick={() => {
            this.setState({
              index: this.state.index + 1
            })
          }}
        >
          Tăng
        </button>
        <button
          onClick={() => {
            this.setState({
              index: this.state.index - 1
            })
          }}
        >
          Giảm
        </button>
      </div>
    );
  }
}
export default App;