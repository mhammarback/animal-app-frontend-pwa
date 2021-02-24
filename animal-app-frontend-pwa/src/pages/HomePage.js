import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Burger } from '../lib/Burger'
import { Nav } from '../lib/Nav'
import { Section } from '../lib/Container'
import { Span } from '../forms/FormStyles'
import { ProfileCards } from '../lib/ProfileCards'

export const HomePage = () => {
	const [open, setOpen] = useState(false)

	const dispatch = useDispatch()
	const username = useSelector((store) => store.user.username)

	return (
	<Section>
	  <Burger open={open} setOpen={setOpen} />
	  <Nav open={open} setOpen={setOpen} />	
	  	<Span>{`Welcome, ${username}`}</Span>
			<ProfileCards />
	</Section>	
	)
}