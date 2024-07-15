
import  { instance }  from '../../axios'
import { removeTokensStorage, saveTokensStorage } from './auth.helper'

class AuthService {
	async main(login, password, type) {
		try {
			const { data } = await instance.post(`/auth/login`, {
				login,
				password
			})

			if (data.access_token) saveTokensStorage(data)

			return data
		} catch (error) {
			throw new Error(error)
		}
	}

	logout() {
		removeTokensStorage()
	}
}

export default new AuthService()
