import {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState
} from 'react'
import type { IUser } from '@/types/User'
import * as Splash from 'expo-splash-screen'

export type TypeUSerState = IUser | null

interface IContext {
	user: TypeUSerState
	setUser: Dispatch<SetStateAction<TypeUSerState>>
}

export const AuthContext = createContext({} as IContext)

Splash.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUSerState>({} as IUser)

	useEffect(() => {
		let isMounted = false
		const getUserFromStorage = async () => {
			if (isMounted) {
			}

			await Splash.hideAsync()
		}
		getUserFromStorage()

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
