import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function TodoList(){
//     const [todo,setTodo] = useState("");
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const {currentTarget : {value}} = event;
//         setTodo(value)
//     }
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(todo);
//     }
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={todo} type="text" placeholder="write a to do"/>
//                 <button>Add</button>
//             </form>
//         </div>
//     );
// }


function TodoList(){
    const {register,watch} = useForm();
    console.log(watch())
    return (
        <div>
            <form>
                <input {...register("email")} type="text" placeholder="Email"/><br/>
                <input {...register("firstName")} type="text" placeholder="First Name"/><br/>
                <input {...register("listname")} type="text" placeholder="List name"/><br/>
                <input {...register("userName")} type="text" placeholder="UserName"/><br/>
                <input {...register("passWord")} type="text" placeholder="PassWord"/><br/>
                <input {...register("passWord1")} type="text" placeholder="PassWord1"/>
                <button>Add</button>
            </form>
        </div>
    )
}
export default TodoList