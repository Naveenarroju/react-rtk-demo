import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  numOfCakes: 20
}

//Redux Toolkit wraps state in an Immer draft, 
// allowing you to write direct mutations instead of returning a new state object.
const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    // The key-value pairs in reducers define functions 
    // that receive (state, action) as arguments—where action
    //  contains type and optional payload.
    ordered: (state) => { 
      console.log(current(state))
      state.numOfCakes--
    },
    restocked : (state,action) => {
      console.log('action',action) 
      // here the action has pre-defined 
      //{type: 'name/key'('cake/restocked'), payload:5}
      state.numOfCakes+=action.payload
    }
  }
})

export default cakeSlice.reducer
//Auto-generated action creators: Redux Toolkit automatically 
// creates matching action creators on slice.actions based on your reducer key names.
export const { ordered , restocked} = cakeSlice.actions