import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const LoginPage = ({ setPage }) => {
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
		dispatch(login(name, password))
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