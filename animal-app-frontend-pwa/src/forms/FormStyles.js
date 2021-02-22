import styled from 'styled-components'

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

	@media (min-width: 1024px) {
		width: 315px;
	}
`

export const Span = styled.span`
	color: #fff;
	text-align: center; 
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
`