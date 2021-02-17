import React, { useState } from 'react'
import { useSelector } from 'react-redux'


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