import { createSlice } from '@reduxjs/toolkit';
//import * as api from "../api/index";

const initialState = {
    emails: [],
    lastAdded: {}
}

const NewsLetterSlice = createSlice({
    name:"NewsLetter",
    initialState,
    reducers: {
        addEmail: (state, action) => {
            state.lastAdded = action.payload;
            let tab = state.emails;
            tab.push(action.payload.email);
            state.emails = tab;
        }
    }
})

export const { addEmail } = NewsLetterSlice.actions;
export default NewsLetterSlice.reducer;