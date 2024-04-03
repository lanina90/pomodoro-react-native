import React, { FC } from 'react'
import type {
	IMenuItem,
	TypeNav
} from '@/components/ui/layout/bottomMenu/menu.interface'
import { Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ item, nav, currentRoute }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable onPress={() => nav(item.path)} className='w-[24%] items-center'>
			<Feather
				name={item.iconName}
				size={29}
				color={isActive ? '#664EFE' : '#8D8A97'}
			/>
		</Pressable>
	)
}

export default MenuItem
