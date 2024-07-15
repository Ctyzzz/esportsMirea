import Cookies from 'js-cookie'
import { TOKEN } from '../../axios'


export const saveTokensStorage = (data) => {
	Cookies.set(TOKEN, data.access_token)
}

export const saveToStorage = (data) => {
	saveTokensStorage(data)
}

export const removeTokensStorage = () => {
	Cookies.remove(TOKEN)
}
