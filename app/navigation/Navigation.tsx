import React, { FC, useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import BottomMenu from '@/components/ui/layout/bottomMenu/BottomMenu'
import PrivateNavigation from '@/navigation/PrivateNavigation'

const Navigation: FC = () => {
	const { user } = useAuth()
	const [currentsRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)

	const navRef = useNavigationContainerRef()

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)

		const listener = navRef.addListener('state', () =>
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		)

		return () => navRef.removeListener('state', listener)
	}, [])

	return (
		<>
			<NavigationContainer ref={navRef}>
				<PrivateNavigation />
			</NavigationContainer>
			{user && currentsRoute && (
				<BottomMenu currentRoute={currentsRoute} nav={navRef.navigate} />
			)}
		</>
	)
}

export default Navigation
