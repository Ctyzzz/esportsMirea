import  { instance }  from '../axios'

class UserService {
	async getProfile() {
		const { data } = await instance.get(`/auth/me`)
		return data
	}
}

export default new UserService()
