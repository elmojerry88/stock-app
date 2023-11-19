'use client'

import { signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


export default function ButtonLogout(){
	const router = useRouter()

	async function logout() {
		await signOut({
			redirect: false
		})

		router.replace('/')
	}

 return <button onClick={logout} className="text-sm mx-2 my-2">
	<div className="">
	   
	</div>
	<div className="">
		<h1>
			Logout
		</h1>
	</div> 
	
	</button>
}