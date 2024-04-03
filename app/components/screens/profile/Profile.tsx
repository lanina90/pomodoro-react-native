import React from 'react'
import Layout from '@/components/ui/layout/Layout'
import Button from '@/components/ui/Button'
import { useAuth } from '@/hooks/useAuth'

const Profile = () => {
	const { setUser } = useAuth()
	return (
		<Layout title='Profile'>
			<Button onBlur={() => setUser(null)}>Logout</Button>
		</Layout>
	)
}

export default Profile
