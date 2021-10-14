import "./styles.css";

import {Todo} from "../../todo/index";

export const AllTodosPage = () => {
    const todos = [
        {text: "walk dog", date: "14/10/2021", color: "blue", isComplete: false},
        {text: "workout", date: "15/10/2021", color: "red", isComplete: false},
        {text: "complete assignment", date: "16/10/2021", color: "red", isComplete: false}
    ];

    return(
        <div className="todos-container">
            {todos.map((todo) => <Todo text={todo.text} date={todo.date} color={todo.color} isComplete={todo.isComplete}/>)}
        </div>
    )
}