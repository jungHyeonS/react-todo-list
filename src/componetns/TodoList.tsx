import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilStoreID, useRecoilValue, useSetRecoilState } from "recoil";




interface IForm{
    toDo:string
}

interface IToDo {
    text :string;
    category : "TO_DO"|"DOING"|"DONE",
    id:number;
}

const toDostate = atom<IToDo[]>({
    key:"toDo",
    default : []
})

function TodoList(){
    

    //atom 으로 부터 값 가져오기
    // const value = useRecoilValue(toDostate);

    //atom 값 변경
    // const modFn = useSetRecoilState(toDostate);

    // 구조 분해 할당으로 할경우
    const [toDos,setToDos] = useRecoilState(toDostate)

    const {
        register,handleSubmit,setValue
    } = useForm<IForm>()
    const onSubmit = ({toDo}:IForm) =>{{
        console.log("add to do",toDo)
        setToDos(oldTodos => [...oldTodos,{text:toDo,category:"TO_DO",id:Date.now()}])
        setValue("toDo","")
    }}
    console.log(toDos)
    return (
        <div>
            <h1>to dos</h1>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("toDo",{
                    required:"Please write a To do"
                })} type="text" placeholder="write a to do"/>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => <li key={toDo.id}>{toDo.text}</li>)}
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