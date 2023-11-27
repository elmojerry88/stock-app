'use client '


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { api } from '@/app/api/api_stock';
import { useQuery } from "react-query";



export default function TotalWeapons(){

    const { data } = useQuery("SumWeapon", api.getSumWeapon, {
      refetchOnWindowFocus: false,
      refetchInterval: 60000,
      retryDelay: 60000
    });


    return (
        <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total de armas em stock</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+{data}</div>
                    <p className="text-xs text-muted-foreground">
                      Número de armas disponiveis na unidade
                    </p>
                  </CardContent>
         </Card>
    )
}