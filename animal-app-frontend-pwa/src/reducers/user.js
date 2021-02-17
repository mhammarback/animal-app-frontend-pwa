import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: 0,
  accessToken: localStorage.validToken || null,
  secretMessage: null,
  errorMessage: null
}

