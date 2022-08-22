
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDostate } from "../atom";

interface IForm{
    toDo:string
}
function CreateToDo(){

    const setToDos = useSetRecoilState(toDostate)

    const {
        register,handleSubmit,setValue
    } = useForm<IForm>()

    const onSubmit = ({toDo}:IForm) =>{{
        console.log("add to do",toDo)
        setToDos(oldTodos => [...oldTodos,{text:toDo,category:"TO_DO",id:Date.now()}])
        setValue("toDo","")
    }}


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("toDo",{
                required:"Please write a To do"
            })} type="text" placeholder="write a to do"/>
            <button>Add</button>
        </form>
    );
}
export default CreateToDo