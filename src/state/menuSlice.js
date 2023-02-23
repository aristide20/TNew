import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menu: [false, false, false, false, false]
}

const MenuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setMenu: (state, action) => {
            if(action.payload === "A Propos de Nous") { state.menu = [true, false, false, false, false] }
            if(action.payload === "Expediteurs") { state.menu = [false, true, false, false, false] }
            if(action.payload === "Transporteurs") { state.menu = [false, false, true, false, false ] }
            if(action.payload === "BTP") { state.menu = [false, false, false, true, false ] }
            if(action.payload === "Blog") { state.menu = [ false, false, false, false, true ] }
            if(action.payload === "Home") { state.menu = [false, false, false, false, false] }
        }
    }
})

export const { setMenu } = MenuSlice.actions;
export default MenuSlice.reducer;