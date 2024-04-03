import React, { FC, PropsWithChildren } from 'react'
import { Platform, SafeAreaView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({
	children,
	title
}) => {
	const { top, bottom, right, left } = useSafeAreaInsets()
	return (
		<SafeAreaView className={'flex-1'}>
			<View
				className={'flex-1 px-6'}
				style={{
					paddingTop: Platform.OS === 'ios' ? top / 5 : top * 1.6
				}}
			>
				{title && (
					<Text className='text-white font-semibold text-3xl text-center'>
						{title}
					</Text>
				)}
				<View className={'flex-1 px-6'}>{children}</View>
			</View>
		</SafeAreaView>
	)
}

export default Layout
