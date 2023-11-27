'use client'

import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import Image from 'next/image'
import { ButtonProcess } from "@/components/ButtonLoading";
import { useToast } from "../../components/ui/use-toast"

export default function Home() {

  const { toast } = useToast()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()


  async function handleSubmit(event: SyntheticEvent) {
    setIsLoading(true)
    event.preventDefault()

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.error) {
      toast({
        variant: "destructive",
        title: "Falha no login!",
        description: "Email ou palavra-passe incorreta" })
        
        setIsLoading(false)
        setEmail('')
        setPassword('')
       


      }

    else {

      window.location.reload()
      router.replace('/admin')

    }
    
  
    
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      
      <Image src="/logoP.png" width={100} height={50} alt="logo"/>

      <form className="w-[400px] flex flex-col gap-6 mt-5" onSubmit={handleSubmit}>
       <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Fazer Login</CardTitle>
              <CardDescription>
                Insira o seu email e palavra-passe
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" className="border-border-foreground" placeholder="name@example.com" name="email" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" >Password</Label>
                <Input id="password" type="password" className="border-border-foreground" name="password" onChange={(e) => setPassword(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter>
              {isLoading ? <ButtonProcess/> : <Button className="w-full h-12 rounded-md bg-blue-800 text-white hover:bg-blue-950" type="submit">Entrar</Button>}
              {/* <Button className="w-full h-12 rounded-md bg-blue-800 text-white hover:bg-blue-950" type="submit">Entrar</Button> */}
            </CardFooter>
        </Card>
      </form>
      <h1 className="mt-2">Não tem uma conta?<Link href="/signup" className="underline text-blue-500"> criar conta</Link></h1>
    </div>
  )
}
