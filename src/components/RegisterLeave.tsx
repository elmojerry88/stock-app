"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useMutation,  useQuery } from "react-query";
import { api } from "@/app/api/api_stock";
import { SyntheticEvent} from "react";
import { useToast } from "./ui/use-toast"
import { ButtonLoading } from "@/components/ButtonLoading";



export default function RegisterLeave(){

    const [nipLeave, setNipLeave] = useState()
    const [weaponLeave, setWeaponLeave] = useState()
    const [qtdBulletsLeave, setQtdBulletsLeave] = useState()
    const [weaponNumberLeave, setWeaponNumberLeave] = useState()

    const { toast } = useToast()


    const leave = {nipLeave, weaponLeave, qtdBulletsLeave, weaponNumberLeave}

    function handleSubmit(event: SyntheticEvent){
        event.preventDefault();
        console.log(leave)
        mutate(nipLeave, weaponLeave, qtdBulletsLeave, weaponNumberLeave)
        


  }

    const {mutate, isLoading } = useMutation( () =>
        api.addLeave(nipLeave, weaponLeave, qtdBulletsLeave, weaponNumberLeave),{
            onSuccess: ()=> {
                setOfficerLeave(""),
                setWeaponLeave(""),
                setQtdBulletsLeave(""),
                setWeaponNumberLeave("")

                toast({
                    variant: "default",
                    description: "Saída registrada!"  ,
                })

            },
            onError: (error, variables, context) => {
                toast({
                    variant: "destructive",
                    title: "Ups! Algo correu mal. ",
                    description: `${error.response.data}`  ,
                })

            }






    })

    const { data } = useQuery("getWeapon", api.getWeapon);
   

    return (
        <form className="" onSubmit={handleSubmit}>

            <div className="grid gap-2 border rounded-md p-5 mt-2">
                <h3 className="text-lg font-bold col-span-4 mx-5 ">Registro de saída</h3>
                <h3 className="text-sm text-muted-foreground col-span-4 mx-5 ">Formulário de cadastro de entradas</h3>
                <div className="grid items-center">
                    <div className="mx-5">
                        <h3 className="mt-2 text-sm font-bold">NIP</h3>
                        <Input className="border-white mt-2" required value={nipLeave} onChange={(e)=> setNipLeave(e.target.value)} placeholder="nip do agente" />
                        <h3 className="text-muted-foreground text-sm mt-2">O nip agente que lhe foi atribuido a arma</h3>
                    </div>
                    <div className="mx-5">
                        <h3 className="mt-2 text-sm font-bold"> Arma </h3>
                        <select value={weaponLeave} onChange={(e)=> setWeaponLeave(e.target.value)} id="officers" class="border bg-background text-sm rounded-lg block w-full p-2.5 border-white mt-2">
                            <option selected  className="text-muted-foreground text-sm text-gray-600">Selecione a arma</option>
                            {data?.map( (weapon: any)=> (
                                <option key={weapon.id} value={weapon.id}>{weapon.name}</option>
                            ))}
                        </select>
                        <h3 className="text-muted-foreground text-sm mt-2">A arma entregue</h3>
                    </div>
                    <div className="mx-5">
                        <h3 className="mt-2 text-sm font-bold ">Número de serie da arma</h3>
                        <Input className="border-white mt-2" required value={weaponNumberLeave} onChange={(e)=> setWeaponNumberLeave(e.target.value)} placeholder="#000000" />
                        <h3 className="text-muted-foreground text-sm mt-2">O número de identificação da arma</h3>
                    </div>
                </div>
                <div className="grid">
                    <div className="mx-5">
                        <h3 className="mt-2 text-sm font-bold ">Quantidade de balas</h3>
                        <Input type="number" min={1} defaultValue={1} className="border-white mt-2" value={qtdBulletsLeave} onChange={(e)=> setQtdBulletsLeave(e.target.value)} placeholder="" />
                        <h3 className="text-muted-foreground text-sm mt-2">O número de balas entregue</h3>
                    </div>
                    <div>
                        {isLoading ? <ButtonLoading/> : <Button className="mt-5 mx-5 w-72 h-12 rounded-md bg-blue-800 text-white hover:bg-blue-950" type="submit">Saída</Button>}
                    </div>
                </div>
            </div>
    </form>

    )
}