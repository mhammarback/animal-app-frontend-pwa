import styled from 'styled-components'

export const Main = styled.section`
	display:flex;
	flex-direction: column; 
	align-items: center;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`