import React, {useState, useEffect, useContext} from 'react';

export const TodosContext = React.createContext(
    {
        todos: [],
        addTodo: () => {},
        deleteTodo: () => {},
        updateTodo: () => {}
    }
);

export const TodosContextProvider = (props) => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        let oldTodos = todos;
        oldTodos.push(todo);
        setTodos(oldTodos);
    }
    
    const updateTodo = (todoId, isComplete) => {
        let oldTodos = todos;

        //find index location by id property
        const todoIndex = todos.findIndex(
            (todo) => {
                return (todo.id === todoId)
            }
        );

        if (todoIndex != -1) {
            oldTodos [todoIndex].isComplete = isComplete; //update one item by index location in array
            setTodos(oldTodos); //update todos
        }
    }

    const deleteTodo = (todoId) => {
        let oldTodos = todos;

        //find index location by id property
        const todoIndex = todos.findIndex(
            (todo) => {
                return (todo.id === todoId)
            }
        );

        //deleting one item from the list using its location and splicing it
        if (todoIndex !== -1) {
            oldTodos.splice(todoIndex, 1);
            setTodos([...oldTodos]);
        }
    }

    return (
        <TodosContext.Provider value={{todos: todos, addTodo: addTodo, updateTodo: updateTodo, deleteTodo: deleteTodo}}>
            {props.children}
        </TodosContext.Provider>
    )
}