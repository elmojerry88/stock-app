'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { api } from '@/app/api/api_stock';
import { useQuery } from "react-query";
import Image from 'next/image'
import Table from "@/components/Table";

export function RecentSales() {

  const { data, isError, isLoading } = useQuery("getUser", api.getUser);

  

  return (
    <> 
      <div className="space-y-8">
        {data?.map((user) => (
          <div className="flex items-center" key={user.id}>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback> <Image width="10" height="10" src=""/> </AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1" >
              <p className="text-sm font-medium leading-none">{user.first_name}</p>
              <p className="text-sm text-muted-foreground">
                {user.email}
              </p>
            </div>
            <div className="ml-auto font-medium">{user.role}</div>
         </div>
        ))}
      </div>
      
    </>

  )
}
