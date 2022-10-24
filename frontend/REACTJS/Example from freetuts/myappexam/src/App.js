
import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Clothes from './components/Clothes';
// import React from 'react';
import LifeCycle from './components/LifeCycle'
// function App(props) {
//   console.log('props App', props);
//   return (
//     <div className="App">
//       <Welcome name="Freetuts" age="10" />
//       <Hello name='Son' />
//       <p>freetuts.net</p>
//       <Clothes name='Son Hoang' type='jeans' color='black' size='L' />
//       <Clothes name='Son Mai' type='bos' color='red' size='XL' />

//     </div>
//   );
// }
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: 1,
//       website: 'Học ReactJS cùng Freetuts.net',
//       isShow: true
//     };
//   }
//   toggeleMSG() {
//     this.setState({
//       isShow: !this.state.isShow
//     })
//   }
//   render() {
//     return (
//       <div>
//         <p>Giá trị: {Math.random()}</p>
//         <button onClick={() => this.forceUpdate()}>Reload</button>
//         <p>{this.state.website}</p>
//         <LifeCycle />
//         <p>Nội dung :{this.state.isShow ? "freetuts.net - reactjs" : ""}</p>
//         <button onClick={() => this.toggeleMSG()}>{this.state.isShow ? "Hide" : "Show"}</button>
//       </div>

//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     //Khởi tạo inital state
//     this.state = {
//       textareaChange: "",
//       buttonClick: "",
//       mouseOver: ""
//     };
//     //bind this cho function mouseOver để  tránh gặp lỗi 
//     //không tồn tại biến this.
//     this.mouseOver = this.mouseOver.bind(this)
//   }
//   changeText(e) {
//     this.setState({
//       textareaChange: e.target.value
//     });
//   }
//   mouseOver() {
//     this.setState({
//       mouseOver: this.state.mouseOver + "mouseOver..."
//     });
//   }
//   render() {
//     return (
//       <div style={{ marginTop: "5%" }}>
//         <button
//           onClick={() => {
//             this.setState({
//               buttonClick: this.state.buttonClick + "onClick..."
//             });
//           }}
//         >
//           Click me
//         </button>{" "}

//         <p>
//           button: <code>{this.state.buttonClick}</code>
//         </p>
//         <hr />
//         <textarea onChange={e => this.changeText(e)} placeholder="nhập cái gì đó..."></textarea>
//         <p>
//           textarea: <code>{this.state.textareaChange}</code>
//         </p>

//         <hr />
//         <h6 onMouseOver={this.mouseOver}>Di chuột vào đêyyyy nè :v</h6>
//         <p>
//           mouseOver: <code>{this.state.mouseOver}</code>
//         </p>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     //Khởi tạo state chứa giá trị của input
//     this.state = {
//       email: "",
//       password: ""
//     };
//   }
//   changeInputValue(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//     console.log(e.target.value);
//   }
//   validationForm() {
//     let returnData = {
//       error: false,
//       msg: ''
//     }
//     const { email, password } = this.state;
//     // Check your email
//     const re = /\S+@\S+\.\S+/;;
//     if (!re.test(email)) {
//       returnData = {
//         error: true,
//         msg: 'Không đúng định dạng email'
//       }
//     }
//     // Check your password
//     if (password.length < 8) {
//       returnData = {
//         error: true,
//         msg: "Mật khẩu phải lớn hơn 8 ký tự"
//       }
//     }
//     return returnData;
//   }
//   submitForm(e) {
//     //Chặn các event mặc định của form
//     e.preventDefault();

//     //Gọi hàm validationForm() dùng để kiểm tra form
//     const validation = this.validationForm()

//     //Kiểm tra lỗi của input trong form và hiển thị
//     if (validation.error) {
//       alert(validation.msg)
//     } else {
//       alert('Submit form success')
//     }
//   }
//   render() {
//     return (
//       <div className="container" style={{ paddingTop: "5%" }}>
//         <form
//           onSubmit={e => {
//             this.submitForm(e);
//           }}
//         >
//           <div className="form-group">
//             <label htmlFor="text">Email:</label>
//             <input
//               type="text"
//               className="form-control"
//               name="email"
//               placeholder="Enter email"
//               onChange={e => this.changeInputValue(e)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="pwd">Password:</label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               placeholder="Enter password"
//               onChange={e => this.changeInputValue(e)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>

//       </div>
//     );
//   }
// }
// export default App;

import React, { Component, Fragment, useState } from "react";
import ContextComponent from './components/ContextComponent';
import ShowGirlFriends from './components/ShowGirlFriends';

// const USDtoVND = function (props) {
//   const convert = function (usd) {
//     return usd * 23632;
//   };
//   return (
//     <div>
//       <span>USD </span>
//       <input
//         onChange={(e) => {
//           const usd = e.target.value;
//           const vnd = convert(usd);
//           props.onHandleChange({
//             usd,
//             vnd,
//           });
//         }}
//         value={props.value}
//       />
//     </div>
//   );
// };
// const VNDtoUSD = function (props) {
//   const convert = function (vnd) {
//     return vnd / 23632;
//   };
//   return (
//     <div>
//       <span>VND </span>
//       <input
//         onChange={(e) => {
//           const vnd = e.target.value;
//           const usd = convert(vnd);
//           props.onHandleChange({
//             usd,
//             vnd,
//           });
//         }}
//         value={props.value}
//       />
//     </div>
//   );
// };


// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       usd: 0,
//       vnd: 0,
//     };
//   }
//   handleChange = (data) => {
//     this.setState(data);
//   };

//   render() {
//     return (
//       <div style={{ margin: "3%" }}>
//         <USDtoVND onHandleChange={this.handleChange} value={this.state.usd} />
//         <VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd} />
//         <hr />
//         <code>freetuts.net</code>
//         <ContextComponent />
//         <ShowGirlFriends listGirlFriends={myGirlFriends} />
//       </div>
//     );
//   }
// }

function App(props) {
  //Object chứa thông tin của người iwww :))
  const myGirlFriends = [
    {
      id: 1,
      name: "Khanh Huyen",
      email: "khanhhuyen123@freetuts.net",
    },
    {
      id: 2,
      name: "Nguyen Hang",
      email: "nguyenhang3dzas@freetuts.net",
    },
    {
      id: 3,
      name: "Pham Uyen",
      email: "phamuyenz@freetuts.net",
    },
  ];
  //Component hiển thi thêm nội dung
  const MoreContent = () => {
    return (
      <p>

        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>


    );
  };
  const [show, setShow] = useState(false);

  return (<Fragment><ShowGirlFriends listGirlFriends={myGirlFriends}>
    {(data) => {
      //Nhận data từ component ShowGirlFriends khi nó trả về 
      //bằng đoạn props.children(person)
      console.log(data);
    }}
  </ShowGirlFriends>

    <div>
      <p>Leaosn asjsaj ahsfhhsdh ahshsdhsdah ahshsdahhsd</p>
      {show === true ? <MoreContent /> : ''}
      {show === false ? <button onClick={() => setShow(true)}>Show</button> : ''}
      <button onClick={() => setShow(false)}>Hide</button>

    </div>
  </Fragment>

  );
}
export default App;