import React, { FC } from 'react'
import {
	Control,
	Controller,
	FieldValues,
	RegisterOptions
} from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'
import cn from 'clsx'
import { IAuthFormData } from '@/types/auth.interface'

type GenericFieldProps<
	TFieldValues extends FieldValues,
	TKey extends keyof TFieldValues
> = {
	control: Control<TFieldValues>
	name: TKey
	placeholder: string
	rules?: RegisterOptions
	secureTextEntry?: boolean
}

const GenericField: FC<
	GenericFieldProps<IAuthFormData, keyof IAuthFormData>
> = ({ control, name, placeholder, rules, secureTextEntry }) => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						className={cn(
							'rounded bg-[#272541] border pb-4 pt-4 px-4 my-2',
							!!error ? 'border-red-500' : 'border-transparent'
						)}
					>
						<TextInput
							placeholder={placeholder}
							value={value}
							onBlur={onBlur}
							onChangeText={onChange}
							autoCapitalize='none'
							className='text-white text-lg placeholder:text-gray-400'
							secureTextEntry={secureTextEntry}
						/>
					</View>
					{error && <Text className={'text-red-400'}>{error.message}</Text>}
				</>
			)}
		/>
	)
}

export default GenericField
