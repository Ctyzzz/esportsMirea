import Cookies from 'js-cookie';
import { PropsWithChildren, createContext, useState } from 'react';

import { TOKEN } from '@src/axios';

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: PropsWithChildren) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
