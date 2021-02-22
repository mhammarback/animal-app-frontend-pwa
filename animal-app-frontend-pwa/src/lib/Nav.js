import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Nav = ({ open, setOpen }) => {
	return (
		<Section>
		<Navbar open={open}>
			<Text>NAVBAR</Text>
			<Link to='/home'></Link>
			<Link to='/profile'></Link>
			<Link to='/about'></Link>
		</Navbar>
		</Section>
	)
}

const Text = styled.p`
  color: white;
`

const Navbar = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #cdd0cb;
transition: transform 0.3s ease-in-out;
transform: translateX(-100%);
position: absolute;
height: 100%;
width: 100%;
z-index: 1;
top: 0;
left: 0;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
@media (min-width: 700px) {
	width: 60%;
}
@media (min-width: 1024px) {
	display: none;
}
`

const Section = styled.div`
  width: 100%;

`