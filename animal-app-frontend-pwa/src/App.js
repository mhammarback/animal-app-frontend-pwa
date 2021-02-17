import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { user } from './reducers/user'
import { LoginPage } from './forms/LoginPage'



const reducer = combineReducers({ user: user.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <LoginPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

