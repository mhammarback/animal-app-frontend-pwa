import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'


export const LottieAnimation = ({ lotti }) => {
	const defaultOptions = {
    loop: true,
    autoplay: true,
		animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    }
	}
	return (
		<LottieContainer>
		  <Lottie options={defaultOptions}  />
		</LottieContainer>
	)
}

export const LottieContainer = styled.div`
  max-width: 800px;
`