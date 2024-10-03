import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState:[],
    reducers:{
        createTask: (state,action)=>{
            state=[...state,action.payload]
        },
        addTasks: (state,action)=>{
            state=action.payload
        },

        updateTask: (state,action)=>{},
        deleteTask: (state,action)=>{}
    }
})

export default taskSlice
export const {createTask, addTasks, updateTask, deleteTask} = taskSlice.actions