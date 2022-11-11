import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox/ColorBox';
import TodoList from './components/TodoList';
import { useState } from 'react';
import TodoForm from './components/TodoForm';


function App() {
  const initialArray = [{ id: 1, title: 'I love React' }, { id: 2, title: 'I love you React' }
    , { id: 3, title: 'I love ABC React' }]
  const [todoList, setTodoList] = useState(initialArray);
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  const handleTodoFormSubmit = (value) => {
    console.log(value);
    const newTodo = {
      id: todoList.length + 1,
      ...value,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList)

  }
  return (
    <div className="App">
      <h1>Welcome to react hooks</h1>
      <ColorBox />
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
