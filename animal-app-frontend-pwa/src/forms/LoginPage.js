import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { Button } from '../lib/Button'
import { Main } from '../lib/Container'

export const LoginPage = ({ setPage }) => {
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
		
	}
	//dispatch(login(name, password))

	return (
		<>
		<Main>
		<form onSubmit={handleSubmit}>
			<label>
				<Input 
					type='text'
					placeholder='Name'
					value={name}
					onChange={(event) => setName(event.target.value)}
					minLength='2'
					maxLength='20'
					required
				/>
			</label>
			<label>
				<Input
					type='text'
					placeholder='Password'
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					minLength='5'
					required
				 />
			</label>
			<Button>Log in</Button>
		</form>
		<Span>or</Span>
		<Button>Sign up</Button>
		</Main>
		</>
	)
}

export const Input = styled.input`
	padding: 10px;
	font-size: 18px;
	margin: 10px;
	width: 200px;
	border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  background-color: #eee;
	color: #fff;
	background-color: black;

	&::-webkit-input-placeholder {
    color: #fff;
  }
`

export const Span = styled.span`
	color: #fff;
`