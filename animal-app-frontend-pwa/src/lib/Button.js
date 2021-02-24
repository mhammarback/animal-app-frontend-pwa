import styled from 'styled-components'

export const Button = styled.button`
  width: 280px;
  padding: 10px;
  border-radius: 14px;
  border: none;
  text-align: center;
  background-color: #fff;
  font-size: 16px;
  margin: 10px 5px;

  &:hover {
    background: #A48BFF;
    color: #fff;
    cursor: pointer;
    transition-duration: 0.3s;
  }

  @media (min-width: 1024px) {
		width: 350px;
	}

`