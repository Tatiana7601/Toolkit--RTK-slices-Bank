import {configureStore} from "@reduxjs/toolkit";
import balanceSlice from "../features/account/balanceSlice.js";
import quoteSlice from "../features/qoute/quoteSlice.js";

export const store=configureStore({
    reducer:{
        balance:balanceSlice,
        quote:quoteSlice
    }
})

export default store;