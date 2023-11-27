'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { api } from '@/app/api/api_stock';
import { useQuery } from "react-query";

export function RecentSales() {

  const { data, isError, isLoading } = useQuery("getLeave", api.getLeave);

  

  return (
    <> 
      <div className="space-y-8">
        {data?.map((leave) => (
          <div className="flex items-center" key={leave.id}>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>PNA</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1" >
              <p className="text-sm font-medium leading-none">{leave.officer}</p>
              <p className="text-sm text-muted-foreground">
                {leave.id} - {leave.nip_officer}
              </p>
            </div>
            <div className="ml-auto font-medium">{leave.weapon}</div>
         </div>
        ))}
      </div>
      
    </>

  )
}
