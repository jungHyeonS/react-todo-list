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

interface IFormData {
    email:string,
    firstName:string,
    listname:string,
    userName:string,
    passWord:string,
    passWord1:string
}

function TodoList(){
    const {register,watch,handleSubmit,formState:{errors}} = useForm<IFormData>({
        defaultValues:{
            email:"@naver.com"
        }
    });
    const onValid = (data:any) => {
        console.log(data)
    }
    return (
        <div>
            <form style={{display:"flex",flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
                <input {...register("email",{
                    required:"Email is required",
                    pattern:{
                        value:/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                        message:"Only email"
                    }})}
                 type="text" placeholder="Email"/>
                <span>{errors?.email?.message?.toString()}</span>

                <input {...register("firstName",{required:"write here"})} type="text" placeholder="First Name"/>
                <span>{errors?.firstName?.message?.toString()}</span>

                <input {...register("listname",{required:"write here"})} type="text" placeholder="List name"/>
                <span>{errors?.listname?.message?.toString()}</span>


                <input {...register("userName",{required:"write here",minLength:10})} type="text" placeholder="UserName"/>
                <span>{errors?.userName?.message?.toString()}</span>


                <input {...register("passWord",{required:"write here",minLength:5})} type="text" placeholder="PassWord"/>
                <span>{errors?.passWord?.message?.toString()}</span>


                <input {...register("passWord1",{required:"Password is required",minLength:{
                    value:5,
                    message:"Your passowrd is too shoot"
                }})} type="text" placeholder="PassWord1"/>
                <span>{errors?.passWord1?.message?.toString()}</span>


                <button>Add</button>
            </form>
        </div>
    )
}
export default TodoList