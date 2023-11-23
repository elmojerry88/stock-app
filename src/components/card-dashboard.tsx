'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Overview } from "@/components/dashboard-components/overview"
import { RecentSales } from "@/components/dashboard-components/saidas"
import TotalOfficers from "./TotalOfficers";
import TotalUsers from "./TotalUsers";
import TotalWeapons from "./TotalWeapons";
import TotalLeave from "./TotalLeave";


export default function DashboardCards(){


    return (
        <div className="space-y-4">
             <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
               <TotalOfficers/>
                <TotalUsers />
                <TotalWeapons />
                <TotalLeave />
                
                
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Gráfico</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Saídas</CardTitle>
                    <CardDescription>
                      Agentes que fizeram levantamento de armas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
                
              </div>
        </div>
       
    )
}