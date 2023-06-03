import { createSlice } from "@reduxjs/toolkit"


export const questionReducer = createSlice({
    name:'question',
    initialState : {
        queue:[],
        answers:[],
        trace:0
    },
    reducers : {
        startExamAction : (state,action)=>{
            return{
                ...state,
                queue:action.payload,
            }
        },
        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        }
        
    }
})

export const {startExamAction, moveNextAction, movePrevAction}= questionReducer.actions
export default questionReducer.reducer