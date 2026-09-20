import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './app/store.js'
import './index.css'

// Provider Wraps the React app to make the Redux store 
// (and all slice reducers) accessible to every 
// component via React Context.
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
)
