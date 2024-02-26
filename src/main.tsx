import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './routes/Route'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import carSlice from './redux_store/carSlice'

const store = configureStore({
  reducer:{
    cars : carSlice
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <AppRoute />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
