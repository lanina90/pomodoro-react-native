import React, { FC } from 'react'
import { TypeNav } from './menu.interface'
import { View } from 'react-native'
import { menuData } from '@/components/ui/layout/bottomMenu/menu.data'
import MenuItem from '@/components/ui/layout/bottomMenu/MenuItem'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface IBottomMenu {
	nav: TypeNav
	currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = props => {
	const { bottom } = useSafeAreaInsets()

	return (
		<View
			className='pt-5 px-3 flex-row justify-between items-center w-full bg-[#1E1C2E]'
			style={{ paddingBottom: bottom + 10 }}
		>
			{menuData.map(item => (
				<MenuItem item={item} key={item.path} {...props} />
			))}
		</View>
	)
}

export default BottomMenu
