import styled from 'styled-components'

export const Main = styled.section`
	display:flex;
	flex-direction: column; 
	align-items: center;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`

export const AnimalFormStyle = styled.div`
display:flex;
flex-direction: column; 
margin: 20px 0px; 

@media (min-width: 1024px) {
	flex-direction: row;
}
`

export const Section = styled.section`
  display:flex;
	flex-direction: column; 
	margin: 20px 0px; 
`