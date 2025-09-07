//todo balanceSlice create
//don`t forget actions and reducer
// name:balance
import {createSlice} from "@reduxjs/toolkit";

const balanceSlice = createSlice({
        name:'balance',
        initialState: 0,
        reducers: {
            setBalance:(state, action) =>
                  Math.max(state + action.payload, 0)
        }
    })

export const{setBalance} = balanceSlice.actions;
export default balanceSlice.reducer;