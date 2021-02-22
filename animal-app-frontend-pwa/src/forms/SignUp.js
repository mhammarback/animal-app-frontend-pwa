import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { user } from '../reducers/user'
import { LottieAnimation } from '../assets/Lottie'
import cat from '../assets/cat_animation.json'
import { Button } from '../lib/Button'
import { Main } from '../lib/Container'
import { Form, Input, Span } from './FormStyles'

const SIGNUP_URL ='https://final-project-technigo.herokuapp.com/users'

export const SignUp = ({ setPage }) => {
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }))
  }, [dispatch])

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
		<Main>
			<LottieAnimation lotti={cat}  />
		    <Form onSubmit={handleSubmit}>
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
			  <Button type='submit'>Sign up</Button>
				<Span>or</Span>
				<Button type='button' onClick={() => setPage('login')}>Log in</Button>
		  </Form>
		</Main>
		</>
	)
}
