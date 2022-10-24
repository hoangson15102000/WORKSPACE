import TodoList from "./components/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button'
import { Fragment, useState } from "react";
function App() {
  // state và props
  // state các dữ liệu hiện tại trong compo
  const [todoList, setTodoList] = useState([]); // array
  const [textInput, setTextInput] = useState('');
  const onTextInputChange = (e) => {
    setTextInput(e.target.value)

  }
  const onAddBtnClick = (e) => {
    // thêm text input vào danh sách todolist
    setTodoList([...todoList, { id: '', name: textInput, isCompleted: false }]
    )

  }


  return (<Fragment> <h3>Danh sách những việc cần làm</h3>
    <Textfield name='add-todo' placeholder="Thêm những việc cần làm ......" elemAfterInput={<Button isDisabled={true}
      appearance='primary'
      onClick={onAddBtnClick}
    >Thêm</Button>}
      value={textInput}
      onChange={onTextInputChange}
      css={{ padding: "2px 4px 2px" }}
    ></Textfield>
    <TodoList />
  </Fragment>

  );
}

export default App;
