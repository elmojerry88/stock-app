'use client'
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { StringToBoolean } from "class-variance-authority/dist/types"

export function Toast() {
    const { toast } = useToast()
   
    return (
    
        <Card>
            onLoad ={() => {
                toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
                })
            }}
        </Card>
      
    )
  }