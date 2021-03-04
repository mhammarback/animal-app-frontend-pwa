import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: localStorage.username || null,
  userId: 0,
  accessToken: localStorage.validToken || null,
  secretMessage: null,
  errorMessage: null,
  entry: localStorage.entry || null,
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      const { username } = action.payload;
      localStorage.setItem('username', username);
      state.username = username;
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      state.userId = userId
    },
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      state.accessToken = accessToken
      localStorage.setItem('validToken', accessToken)
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload
      state.errorMessage = errorMessage
    },
    setSecretMessage: (state, action) => {
      const { secretMessage } = action.payload
      state.secretMessage = secretMessage
    },
    setEntry: (state, action) => {
      const { entry } = action.payload
      state.entry = entry
      localStorage.setItem('entry', entry)
    },
    setDashboard: (state, action) => {
      const { dashboardContent } = action.payload
      state.dashboardContent = dashboardContent
      localStorage.setItem('dashboardContent', dashboardContent)
    },
    logout: (state) => {
      state.userId = 0;
      state.accessToken = null;
      state.errorMessage = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('username');
      localStorage.removeItem('validToken');
    }
  }
})


//THUNKS 
/*

 setDashboard: (state, action) => {
      const { dashboardContent } = action.payload
      state.dashboardContent = dashboardContent
      localStorage.setItem('dashboardContent', dashboardContent)
    },
export const login = (name, password) => {
  return (dispatch) => {
    fetch('https://animal-app-pwa.herokuapp.com/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Unable to log in, please check your username and password.')
        } else {
          return res.json()
        }
      })
      .then((json) => {
        dispatch(user.actions.setUserId({ userId: json.userId }))
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }))
      })
  }
}


*/