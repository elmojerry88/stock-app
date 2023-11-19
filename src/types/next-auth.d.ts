import NextAuth from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: {
			id: string
			email: string
			first_name: string
			second_name: string
			role : string
		}
	}
}