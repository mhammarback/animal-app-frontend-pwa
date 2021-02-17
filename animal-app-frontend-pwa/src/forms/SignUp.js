import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SIGNUP_URL =''

export const SignUp = ({ setPage }) => {
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')


	const handleSubmit = (event) => {
		event.preventDefault()

		fetch(SIGNUP_URL, {
			method: 'POST',
			headers: { 'Content-Type' : 'applicant/json' },
			body: JSON.stringify({ name, password })
		})
		.then ((res) => {
			if (!res.ok) {
				throw new Error('Could not create account')

			} return res.json()
		})
		.then ((json) => {
			dispatch(user.actions.setUserId({ userId: json.userId}))
      dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
		})
		.catch((error) => {
			
		})
	}

	return (
		<>
		<form onSubmit={handleSubmit}>
			<label>
				<input 
					type='text'
					placeholder='Enter name'
					value={name}
					onChange={(event) => setName(event.target.value)}
					minLength='2'
					maxLength='20'
					required
				/>
			</label>
			<label>
				<input
					type='text'
					placeholder='Enter password'
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					minLength='5'
					required
				 />
			</label>
		</form>
		</>
	)
}
