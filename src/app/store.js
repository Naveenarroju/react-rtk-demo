import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import { createLogger } from 'redux-logger'
import iceCreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/UserSlice'
const logger = createLogger({
  // Optional configuration options (e.g., collapsed logs)
  collapsed: true, 
})

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user:userReducer
  },
  middleware: (getDefaultMiddleware) => 
  process.env.NODE_ENV !== 'production' //safety condition not log in production
    ? getDefaultMiddleware().concat(logger)
    : getDefaultMiddleware(),

})

export default store