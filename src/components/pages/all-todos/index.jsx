import "./styles.css";
import { useContext, useEffect, useState } from "react";

import {Todo} from "../../todo/index";
import { TodosContext } from '../../../context/todos-context';

export const AllTodosPage = () => {

    const [todoElements, setTodoElements] = useState([]);

    const todosContext = useContext(TodosContext);

    useEffect(() => {
        const todoElems = todosContext.todos.map((todo) => {
            return (
                <Todo key={todo.id} text={todo.title} date={todo.date} isComplete={todo.isComplete} todoId={todo.id}></Todo>
            )
        })
        setTodoElements(todoElems);
    }, [todosContext.todos])

    return(
        <div className="todos-container">
            {todoElements}
        </div>
    )
}