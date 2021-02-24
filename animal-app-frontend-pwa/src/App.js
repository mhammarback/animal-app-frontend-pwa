import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { user } from './reducers/user'
import { StartPage } from './forms/StartPage'
import { AnimalForm } from './forms/AnimalForm'


const reducer = combineReducers({ user: user.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
          <AnimalForm />
            
          </Route>
          <Route path='/form'>
            <AnimalForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}


//<StartPage />