import {atom,selector} from "recoil"
import { localStorageEffect } from "./localStorage";

export enum Categoris {
    "TO_DO",
    "DOING",
    "DONE"
}

export interface IToDo {
    text :string;
    category : Categoris,
    id:number;
}



export const toDostate = atom<IToDo[]>({
    key:"toDo",
    default : [],
    effects : [localStorageEffect("toDoList")]
})

export const categoryState = atom<Categoris>({
    key:"category",
    default:Categoris.TO_DO
})

export const toDoSelector = selector({
    key:"toDoSelector",
    get : ({get}) => {
        const toDos = get(toDostate)
        const category = get(categoryState)
        return toDos.filter(toDo => toDo.category === Number(category))
        // return toDos.filter(toDo => toDo.category === category)

    }
})