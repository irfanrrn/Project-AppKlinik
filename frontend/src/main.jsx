import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

axios.defaults.baseURL = "http://localhost:3000"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position='top-center' toastOptions={{ duration: 3000 }}/>
      <App />
    </Provider>
  </React.StrictMode>,
)
