import { useState } from "react";

function TodoList() {
    const initArray = ['love', 'easy', 'frontend']
    const [TodoList, setTodoList] = useState(initArray)
    function removeTodo(index) {
        const newTodoList = [...TodoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList)
    }
    return (
        <ul>
            {TodoList.map((todo, index) => {
                <li>{todo}</li>
            })}
        </ul>
    )
}