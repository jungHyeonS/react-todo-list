import { useSetRecoilState } from "recoil";
import { Categoris, IToDo, toDostate } from "../atom";

function ToDo({text,category,id}:IToDo){
    const setToDos = useSetRecoilState(toDostate);
    const onClick = (newCate:IToDo["category"]) => {
        console.log(newCate)

        //리랜더링을 할려면 새로운 배열을 만들어줘야한다 그래서 현재 배열을 가져오고 그 배열에 값을 수정해서 다시 리턴해준다
        //찾는 인덱스 기준으로 idx 까지 자르고, 해당 인덱스 값 바꾸고, 나머지 값들 붙여 넣기
        setToDos(oldToDos => {
            const targetIdx = oldToDos.findIndex(toDo => toDo.id === id)
            const newToDo = {text,id,category:newCate}
            return [...oldToDos.slice(0,targetIdx),newToDo,...oldToDos.slice(targetIdx+1)]
        })
    }

    return <li>{text}
    {/* 인자가 있는 Onclick 이벤트 */}
    {category !== Categoris.DOING && <button onClick={() => onClick(Categoris.DOING)}>Doing</button>}
    {category !== Categoris.TO_DO && <button onClick={() => onClick(Categoris.TO_DO)}>TO Do</button>}
    {category !== Categoris.DONE && <button onClick={() => onClick(Categoris.DONE)}>Done</button>}
    
    </li>;
}
export default ToDo