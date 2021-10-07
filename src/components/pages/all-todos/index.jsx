import "./styles.css";

import {Todo} from "../../todo/index";

export const AllTodosPage = () => {
    return(
        <div>
            <Todo text="walk dog" date="07/10/2021" color="blue">
            </Todo>

            <Todo text="workout" date="07/10/2021" color="blue">
            </Todo>

            <Todo text="complete assignment" date="07/10/2021" color="blue">
            </Todo>
        </div>
    )
}