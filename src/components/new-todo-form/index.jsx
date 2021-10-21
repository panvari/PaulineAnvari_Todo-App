import { useForm } from "react-hook-form";
import { Input } from '../input-field';
import "./styles.css"
import { v1 as uuidv1 } from 'uuid';
import { useContext } from "react";
import { TodosContext } from '../../context/todos-context';
import { useHistory } from "react-router-dom";

export const NewTodoForm = () => {

    const todoContext = useContext(TodosContext);

    let history = useHistory();

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) => {
        const todo = data;
        todo.id = uuidv1(); //add unique id
        todo.isComplete = false; //default status is false

        todoContext.addTodo(todo); //add todo to global state/context 

        console.log("new todo added", todo)

        history.push("/"); //switch to homepage 
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Add input fields*/}
            <Input
                type="text"
                name="title"
                label="Todo (ex: do laundry)"
                errors={errors}
                register={register}
                validationSchema={
                    {
                        required: "Todo text is required",
                        minLength: {
                            value: 3,
                            message: "Please enter at least 3 characters"
                        }
                    }
                }
                required
            />

            <Input
                type="date"
                name="date"
                label="Due Date"
                errors={errors}
                register={register}
                validationSchema={
                    {
                        required: "Todo due date is required"
                    }
                }
                required
            />

            <input type="submit"/>
        </form>
    )
}