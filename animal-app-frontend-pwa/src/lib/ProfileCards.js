import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { user } from '../reducers/user'
import { Button } from './Button'
import { Main } from './Container'

const GETPROFILE_URL = 'https://animal-app-pwa.herokuapp.com/profiles'

export const ProfileCards = () => {
	const accessToken = useSelector((store) => store.user.accessToken)
	const [animalProfileData, setAnimalProfileData] = useState({})
	const { animalName, birthDate, gender, weight, breed } = animalProfileData
	const dispatch = useDispatch()

  const getAnimalData = () => {
		fetch(GETPROFILE_URL, {
			method: 'GET', 
			headers: { Authorization: accessToken }
		})
			.then((res) => {
				if(!res.ok) {
					throw new Error('could not get information')
				} 
					return res.json()
			})
			.then ((json) => {
				setAnimalProfileData(json)
			})
			.catch((error) => {
				dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }))
			})
	}

	useEffect(() => {
		getAnimalData()
	}, [])
	
	return (
		<>
		<Main>
		<Card>
			<Text>{`${animalName}`}</Text>
			<Text>{`${birthDate}`}</Text>
			<Text>{`${gender}`}</Text>
			<Text>{`${breed}`}</Text>
			<CardButton>View Profile</CardButton>
		</Card>
		<Button>Add new animal</Button>
		</Main>
		</>
	)
}

export const Card = styled.div`
  display: flex; 
	flex-direction: column; 
	justify-content: flex-end;
	align-items: center;
  width: 85%;
	height: 230px;
	background: black;
	margin: 20px;
	border: 1px solid white;
`

export const CardButton = styled.button`
  display: flex;
	justify-content: center;
  padding: 10px;
	width: 280px;
  border-radius: 14px;
  border: none;
  text-align: center;
  background-color: #fff;
  font-size: 16px;
  margin: 10px 5px;
`

export const Text = styled.p`
  color: #fff;
`