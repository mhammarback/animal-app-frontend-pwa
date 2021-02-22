import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { LoginPage } from './LoginPage'
import { SignUp } from './SignUp'
import { HomePage } from '../pages/HomePage'

export const StartPage = () => {
	const [page, setPage] = useState('login')
	const accessToken = useSelector((store) => store.user.accessToken)

	if (!accessToken) {
		return (
			<>
			  {page === 'login' ? (<LoginPage setPage={setPage} />) : (<SignUp setPage={setPage} />)}
		  </>
		)
	} else {
		return (
			<HomePage setPage={setPage} />
		)
	}
}
