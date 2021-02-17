import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: 0,
  accessToken: localStorage.validToken || null,
  secretMessage: null,
  errorMessage: null
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
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