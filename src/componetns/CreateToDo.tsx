
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDostate } from "../atom";

interface IForm{
    toDo:string
}
function CreateToDo(){

    const setToDos = useSetRecoilState(toDostate)
    const category = useRecoilValue(categoryState)

    const {
        register,handleSubmit,setValue
    } = useForm<IForm>()

    const onSubmit = ({toDo}:IForm) =>{{
        console.log("add to do",toDo)
        setToDos(oldTodos => [{text:toDo,category:category,id:Date.now()},...oldTodos])
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