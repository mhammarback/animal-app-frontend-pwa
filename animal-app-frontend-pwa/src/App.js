import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { user } from './reducers/user'

import { LoginPage } from './forms/LoginPage'
import { SignUp } from './forms/SignUp'
import { AnimalForm } from './forms/AnimalForm'
import { HomePage } from './pages/HomePage'


const reducer = combineReducers({ user: user.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <LoginPage />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/form'>
            <AnimalForm />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
