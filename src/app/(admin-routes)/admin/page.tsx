import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"

import { getServerSession } from "next-auth"
import DashboardPage from "@/components/dashboard/page"
import { Toast } from "@/components/Toast"





export default function Admin(){
	return (
		<div className="">

			
			<DashboardPage />
		
		</div>
	)
}