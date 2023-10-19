import {createSlice, nanoid } from '@reduxjs/toolkit';

//nanoId is use to generate unique id

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};


/*step 2: create reducers
import createSlices and create Slice , to createslice we have to require three major compoment name, initialState and list of reducers 

name: we can give any name 
initial state: initial state can be object or list



*/

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        //state:-state gives access of current state (initial state which changes overtime)
        //action:- actions gives you values or you have to passed props to action to change by methods 

        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(newTodo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((eachTodo)=>eachTodo.id!==action.payload)
        }
    }
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer