import { IToDo } from "../atom";

function ToDo({text}:IToDo){
    return <li>{text}
    <button>Todo</button>
    <button>Done</button>
    <button>Doing</button>
    </li>;
}
export default ToDo