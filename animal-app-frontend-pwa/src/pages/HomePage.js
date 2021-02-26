import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Burger } from '../lib/Burger'
import { Nav } from '../lib/Nav'
import { Section } from '../lib/Container'
import { Span } from '../forms/FormStyles'
import { ProfileCards } from '../lib/ProfileCards'
import { LoginPage } from '../forms/LoginPage'

export const HomePage = () => {
	const accessToken = useSelector((store) => store.user.accessToken)
	const username = useSelector((store) => store.user.username)
	const [open, setOpen] = useState(false)
	const dispatch = useDispatch()
	
  if (accessToken) {
		return (
			<Section>
				<Burger open={open} setOpen={setOpen} />
				<Nav open={open} setOpen={setOpen} />	
					<Span>{`Welcome, ${username}`}</Span>
					<ProfileCards />
			</Section>	
			)
	} else {
		return (
			<LoginPage />
		)
	}
}