import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'

import { TOKEN } from '../axios'
import { useAuth } from './useAuth'

export const useCheckToken = () => {
	const { setIsAuth, isAuth } = useAuth()
	const { pathname } = useLocation()

	useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (!token) setIsAuth(false)
	}, [pathname, isAuth])
}
