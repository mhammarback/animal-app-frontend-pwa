import React, { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { user } from '../reducers/user'
import { Main, AnimalFormStyle } from '../lib/Container'
import { Form, Input, Span } from './FormStyles'
import { Button } from '../lib/Button'
import { Nav } from '../lib/Nav'
import { Burger } from '../lib/Burger'
import { LoginPage } from './LoginPage'


const PROFILE_URL ='https://animal-app-pwa.herokuapp.com/profiles'

export const AnimalForm = () => {
	const [animalName, setAnimalName] = useState('')
	const [birthDate, setBirthDate] = useState('')
	const [weight, setWeigth] = useState('')
	const [gender, setGender] = useState('')
	const [breed, setBreed] = useState('')
	const [open, setOpen] = useState(false)

	const dispatch = useDispatch()
	const username = useSelector((store) => store.user.username)
	const accessToken = useSelector((store) => store.user.accessToken)

	const handleSubmit = (event) => {
		event.preventDefault()
	
	fetch(PROFILE_URL, {
		method: 'POST', 
		headers: {
			'Content-Type' : 'application/json',
			Authorization: accessToken
		}, 
		body: JSON.stringify({ animalName, birthDate, gender, weight, breed })
	})
	.then ((res) => {
		if (!res.ok) {
			throw new Error('not able to save')
		} else {
        return res.json()
		}
	})
	.then((json) => {
		window.location.href = '/home'
	})
	.catch((error) => {
		dispatch(user.actions.setErrorMessage({ errorMessage : error.toString() }))
	})
}	

  if (accessToken) {
		return ( 
			<>
			<AnimalFormStyle>
			<Burger open={open} setOpen={setOpen} />
			 <Nav open={open} setOpen={setOpen} />
				 <Div>
					 <Span>{`Welcome, ${username}`}</Span>
					 <Span>Add information about your furry friend</Span>
				 </Div>
				<Main>
				<Form onSubmit={handleSubmit}>
					<label>
					<Input 
						 type='text'
						 placeholder='Name'
						 value={animalName}
						 onChange={(event) => setAnimalName(event.target.value)}
						 minLength='2'
						 maxLength='20'
						 required
					 />
					</label>
					<label>
					<Input 
						 type='Number'
						 placeholder='Birthday'
						 value={birthDate}
						 onChange={(event) => setBirthDate(event.target.value)}
						 required
					 />
					</label>
					<label>
					<Input 
						 type='text'
						 placeholder='Gender'
						 value={gender}
						 onChange={(event) => setGender(event.target.value)}
						 minLength='2'
						 maxLength='20'
						 required
					 />
					</label>
					<label>
					<Input 
						 type='Number'
						 placeholder='Weight'
						 value={weight}
						 onChange={(event) => setWeigth(event.target.value)}
						 required
					 />
					</label>
					<label>
					<Input 
						 type='text'
						 placeholder='Breed'
						 value={breed}
						 onChange={(event) => setBreed(event.target.value)}
						 minLength='2'
						 maxLength='20'
						 required
					 />
					</label>
					<Button type ="submit">Submit</Button>
				</Form>
				</Main>
				<Div>
				<Span>If you have more than one, don't worry. You can add more friends once this step is completed </Span>
				</Div>
			</AnimalFormStyle>
			</>
		)
	 } else {
		  return (
			  <LoginPage />
		  )
	 }
}
	

const Div = styled.div`
  display: flex; 
	flex-direction: column;
  padding: 40px 10px 20px 10px;
	font-family: 'PT Serif Caption', serif;
`