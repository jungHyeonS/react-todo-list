import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilStoreID, useRecoilValue, useSetRecoilState } from "recoil";
import { toDostate } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./Todo";





function TodoList(){
    

    //atom 으로 부터 값 가져오기
    // const value = useRecoilValue(toDostate);

    //atom 값 변경
    // const modFn = useSetRecoilState(toDostate);

    // 구조 분해 할당으로 할경우
    const toDos = useRecoilValue(toDostate)

    
    console.log(toDos)
    return (
        <div>
            <h1>to dos</h1>
            <hr/>
            <CreateToDo/>
            <ul>
                {/* {toDos.map(toDo => <ToDo text={toDo.text} category={toDo.category} id={toDo.id}/>)} */}


                {/* 인터페이스에 있는 모든값을 보낼때는 spared 문법도 가능하다 */}
                {toDos.map(toDo => <ToDo {...toDo} key={toDo.id}/>)}

            </ul>
        </div>
    );
}

// interface IFormData {
//     email:string,
//     firstName:string,
//     listname:string,
//     userName:string,
//     passWord:string,
//     passWord1:string
//     extraError?:string
// }

// function TodoList(){
//     const {register,watch,handleSubmit,formState:{errors},setError} = useForm<IFormData>({
//         defaultValues:{
//             email:"@naver.com"
//         }
//     });
//     const onValid = (data:IFormData) => {
//         if(data.passWord !== data.passWord1){
//             setError("passWord1",{message:"PassWord are not the same"},{shouldFocus:true})
//         }
//         // setError("extraError",{message:"Server Offline"})
//     }
//     return (
//         <div>
//             <form style={{display:"flex",flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
//                 <input {...register("email",{
//                     required:"Email is required",
//                     pattern:{
//                         value:/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
//                         message:"Only email"
//                     }})}
//                  type="text" placeholder="Email"/>
//                 <span>{errors?.email?.message?.toString()}</span>

//                 <input {...register("firstName",{required:"write here",
//                 validate:{
//                     noNico:(value)=>value.includes("nico") ? "no nico":true,
//                     noNick:(value)=>value.includes("nick") ? "no nick":true

//                 }})} type="text" placeholder="First Name"/>
//                 <span>{errors?.firstName?.message?.toString()}</span>

//                 <input {...register("listname",{required:"write here"})} type="text" placeholder="List name"/>
//                 <span>{errors?.listname?.message?.toString()}</span>


//                 <input {...register("userName",{required:"write here",minLength:10})} type="text" placeholder="UserName"/>
//                 <span>{errors?.userName?.message?.toString()}</span>


//                 <input {...register("passWord",{required:"write here",minLength:5})} type="text" placeholder="PassWord"/>
//                 <span>{errors?.passWord?.message?.toString()}</span>


//                 <input {...register("passWord1",{required:"Password is required",minLength:{
//                     value:5,
//                     message:"Your passowrd is too shoot"
//                 }})} type="text" placeholder="PassWord1"/>
//                 <span>{errors?.passWord1?.message?.toString()}</span>


//                 <button>Add</button>
//                 <span>{errors?.extraError?.message?.toString()}</span>
//             </form>
//         </div>
//     )
// }
export default TodoList