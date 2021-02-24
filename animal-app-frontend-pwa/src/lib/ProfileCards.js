import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

import { Main } from './Container'

export const ProfileCards = () => {
	return (
		<>
		<Main>
		<Card>
			Text
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