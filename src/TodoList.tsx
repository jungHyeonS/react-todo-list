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
    const {register,watch,handleSubmit,formState} = useForm();
    const onValid = (data:any) => {
        console.log(data)
    }
    console.log(formState.errors)
    return (
        <div>
            <form style={{display:"flex",flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
                <input {...register("email",{required:true})} type="text" placeholder="Email"/>
                <input {...register("firstName",{required:true})} type="text" placeholder="First Name"/>
                <input {...register("listname",{required:true})} type="text" placeholder="List name"/>
                <input {...register("userName",{required:true,minLength:10})} type="text" placeholder="UserName"/>
                <input {...register("passWord",{required:true,minLength:5})} type="text" placeholder="PassWord"/>
                <input {...register("passWord1",{required:"Password is required",minLength:{
                    value:5,
                    message:"Your passowrd is too shoot"
                }})} type="text" placeholder="PassWord1"/>
                <button>Add</button>
            </form>
        </div>
    )
}
export default TodoList