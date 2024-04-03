import { IUser } from '@/types/User'

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'> {}
