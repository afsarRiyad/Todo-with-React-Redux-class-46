import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:{
        arr : [],
        input: '',
        uIndex: 0,
        isTrue: true
    }
}

export const counterSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state)=>{
            if(!state.value.input.trim()) return
               state.value.arr.push(state.value.input)
               console.log(state.value.arr);      
        },

        input: (state, action)=>{
         state.value.input = action.payload
         console.log(action.payload);
        },
        
           todoDelete:(state, action)=>{
            let index = action.payload
             state.value.arr.splice(index, 1)
           },

             todoUpdate: (state) =>{
             if(!state.value.input.trim()) return
                let index = state.value.uIndex
                state.value.arr[index] = state.value.input
                state.value.isTrue = true
            },
            
              editIndex:(state, action)=>{
                 state.value.uIndex = action.payload.index
                  state.value.isTrue = false
                  console.log(action.payload.index);
                  
             }
    }
})

export const {addTodo, input, todoDelete, editIndex, todoUpdate} = counterSlice.actions
export default counterSlice.reducer
