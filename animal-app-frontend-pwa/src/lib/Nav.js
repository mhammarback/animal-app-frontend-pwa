import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Nav = ({ open, setOpen }) => {
	return (
		<Section>
		<Navbar open={open}>
			<Wrapper>
			  <Link to='/home' onClick={() => setOpen(false)}></Link>
			    <LinkText>HOME</LinkText>
		  	<Link to='/profile' onClick={() => setOpen(false)}></Link>
			    <LinkText>PROFILE</LinkText>
		  	<Link to='/about' onClick={() => setOpen(false)}></Link>
		      <LinkText>ABOUT</LinkText>
			</Wrapper>
		</Navbar>
		</Section>
	)
}

const Navbar = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #000;
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
//background: #cdd0cb;

const Section = styled.div`
  width: 100%;
`

const LinkText = styled.p`
  font-size: 18px;
  color: #fff;

	&:hover {
    text-decoration: underline;
    cursor: pointer;
    transition-duration: 0.3s;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.5px solid whitesmoke;
  width: 80%; 
  height: 70%;
`