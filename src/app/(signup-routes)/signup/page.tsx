'use client'

import { useState } from "react";
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
import { useMutation, useQueryClient } from "react-query";
import { api } from "@/app/api/api_stock";
import { SyntheticEvent} from "react";
import { ButtonLoading } from "@/components/ButtonLoading";
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"


export default function Home() {
  const [first_name, setFirst_name] = useState<string>('')
  const [second_name, setSecond_name] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  
  const user = {first_name, second_name, email, password}
  const client = useQueryClient();
  
  const {isLoading ,isError, mutate } = useMutation( () => 
    api.addUser(first_name, second_name, email, password, gender),{
      
      onSuccess(data, variables, context) {
        setFirst_name(""),
        setSecond_name(""),
        setEmail(""),
        setPassword(""),

        toast({
          variant: "default",
          title:"Usuário criado" ,
          description: "Faça login",
          action: <ToastAction altText="fazer login"> <Link href="/">Fazer login</Link> </ToastAction>,
        })
      },

      onError(error, variables, context) {
        toast({
          variant: "destructive",
          title: "Ups! Algo correu mal. ",
          description: `${error.response.data.message}`  ,
      })
      },

    }
  )
  
  
  function handleSubmit(event: SyntheticEvent){
    event.preventDefault();
    console.log(user)
    mutate(first_name, second_name, email, password)
  }

  


  return (
    
    <div className="flex flex-col items-center justify-center w-full h-screen mt-10">
      {/* <h1 className="text-3xl font-bold mb-6">APP STOCK CONTROL</h1> */}
      {/* <Image src="/logoP.png" width={80} height={30} alt="logo"/> */}
     
      <form id="teste" className="w-[400px] flex flex-col gap-6 mt-5" onSubmit={handleSubmit} >
       <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Criar conta</CardTitle>
              <CardDescription>
                Insira os seus dados para criar uma conta
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Nome</Label>
                <Input id="first_name" type="text" value={first_name} className="border-border-foreground" placeholder="nome" name="first_name" onChange={(e) => setFirst_name(e.target.value)}/>
                <h1 className="text-sm text-gray-500">O nome deve conter mais de 2 caracteres</h1>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" >Apelido</Label>
                <Input id="second_name" type="text" value={second_name} className="border-border-foreground" placeholder="apelido" name="second_name" onChange={(e) => setSecond_name(e.target.value)} />
                <h1 className="text-sm text-gray-500">O apelido deve conter mais de 2 caracteres</h1>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} className="border-border-foreground" placeholder="nome@example.com" name="email" onChange={(e) => setEmail(e.target.value)}/>
                <h1 className="text-sm text-gray-500">O email deve conter o caractere @</h1>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" >Password</Label>
                <Input id="password" value={password} type="password" className="border-border-foreground" name="password" onChange={(e) => setPassword(e.target.value)} />
                <h1 className="text-sm text-gray-500">A password deve ter no minímo 8 caracteres</h1>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" >Password</Label>
                <select value={gender} onChange={(e)=> setGender(e.target.value)} id="officers" className="border bg-background text-sm rounded-lg block w-full p-2.5 border-white mt-2">
                  <option selected  className="text-muted-foreground text-sm text-gray-600">Selecione o seu género</option>
                  <option >masculino</option>
                  <option >feminino</option>
                  <option >outro</option>
                </select>
                <h1 className="text-sm text-gray-500"></h1>
              </div>
            </CardContent>
            <CardFooter>
              {isLoading ? <ButtonLoading/> : <Button className="w-full h-12 rounded-md bg-blue-800 text-white hover:bg-blue-950" type="submit">Criar conta</Button>}
            </CardFooter>
        </Card>
      </form>
      <h1 className="py-2">Já tem uma conta? faça <Link href="/" className="underline text-blue-600">login</Link></h1>
    </div>
  )
}
