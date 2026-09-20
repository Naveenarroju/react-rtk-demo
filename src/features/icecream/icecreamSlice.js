import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered} from '../cake/cakeSlice'


const initialState = {
    numOfIceCreams:10
}

const IceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers:{
//reducer function represents the current state 
// (the latest slice state in the Redux store right before this reducer runs),
//  not the initial state.      
        ordered:(state)=>{
            state.numOfIceCreams--;
        },

        restocked:(state,action)=>{
            state.numOfIceCreams+=action.payload;
        }
    },
    //extraReducers is way for one slice to listen
    //  and respond to actions generated outside of itself.
    extraReducers: (builder) => {
        // builder.addCase('cake/ordered'(action), (state) =>{
        builder.addCase(cakeOrdered, (state) =>{
            state.numOfIceCreams--
        })
    }

});

export default IceCreamSlice.reducer;
export const {ordered , restocked} = IceCreamSlice.actions