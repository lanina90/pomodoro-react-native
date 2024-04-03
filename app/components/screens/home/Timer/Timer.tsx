import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { Foundation } from '@expo/vector-icons'
import cn from 'clsx'

const Timer = () => {
	const [isPlaying, setIsPlaying] = useState(false)

	return (
		<View>
			<Text>Timer</Text>
			<Pressable
				onPress={() => setIsPlaying(!isPlaying)}
				className={cn(
					'mt-10 self-center bg-primary w-[60px] h-[60px] items-center justify-center rounded-full',
					{
						'pl-2': !isPlaying
					}
				)}
				style={{
					shadowColor: '#d3ccf3',
					shadowOffset: {
						width: 0,
						height: 3
					},
					shadowOpacity: 0.27,
					shadowRadius: 4.65,

					elevation: 6
				}}
			>
				<Foundation
					name={isPlaying ? 'pause' : 'play'}
					color='white'
					size={44}
				/>
			</Pressable>
		</View>
	)
}

export default Timer
