import React, { FC, useState } from 'react'
import {
	Keyboard,
	Pressable,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFormData } from '@/types/auth.interface'
import { useAuth } from '@/hooks/useAuth'
import Loader from '@/components/ui/layout/Loader'
import Button from '@/components/ui/Button'
import GenericFields from '@/components/screens/auth/GenericFields'
import { validEmail, validPassword } from '@/components/screens/auth/email.rgx'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)

	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onChange'
	})
	const { setUser } = useAuth()
	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		setUser({
			_id: '',
			...data
		})
		reset()
	}

	const isLoading = false

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View className='items-center justify-center flex-1'>
				<View className='w-3/4'>
					<Text className='text-white text-4xl text-center font-bold mb-5'>
						{isReg ? 'Sign up' : 'Sign in'}
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<GenericFields
								control={control}
								name='email'
								placeholder='Enter email'
								rules={{
									required: 'Email is required',
									pattern: {
										value: validEmail,
										message: 'Email is invalid'
									}
								}}
							/>
							<GenericFields
								control={control}
								name='password'
								placeholder='Enter password'
								rules={{
									required: 'Password is required',
									pattern: {
										value: validPassword,
										message: 'Password is invalid'
									}
								}}
								secureTextEntry={true}
							/>
							<Button onPress={handleSubmit(onSubmit)}>Let's go</Button>
							<Pressable
								onPress={() => setIsReg(!isReg)}
								className='w-16 self-end'
							>
								<Text className='text-opacity-60 text-white text-right text-base mt-3 '>
									{isReg ? 'Login' : 'Register'}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Auth
