import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { useAuth } from '@/hooks/useAuth'
import { routes } from '@/navigation/routes'
import { Auth } from '@/components/screens'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()
const PrivateNavigation = () => {
	const { user } = useAuth()

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#1E1C2E'
				}
			}}
		>
			{user ? (
				routes.map(route => (
					<Stack.Screen key={route.name} {...route}></Stack.Screen>
				))
			) : (
				<Stack.Screen name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigation
