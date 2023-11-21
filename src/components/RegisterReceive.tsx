"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useMutation,  useQuery } from "react-query";
import { api } from "@/app/api/api_stock";
import { SyntheticEvent} from "react";
import SelectWeapon from "./SelectWeapon";


export default function RegisterReceive(){

    const [officerReceive, setOfficerReceive] = useState()
    const [weaponReceive, setWeaponReceive] = useState()
    const [qtdBulletsReceive, setQtdBulletsReceive] = useState()
    const [weaponNumberReceive, setWeaponNumberReceive] = useState()
    
 
    const receive = {officerReceive, weaponReceive, qtdBulletsReceive, weaponNumberReceive}

    function handleSubmit(event: SyntheticEvent){
        event.preventDefault();
        console.log(receive)
        mutate(officerReceive, weaponReceive, qtdBulletsReceive, weaponNumberReceive)
  }

    const {isLoading ,isError, mutate } = useMutation( () => 
        api.addReceive(officerReceive, weaponReceive, qtdBulletsReceive, weaponNumberReceive),{
    })

    const { data} = useQuery("getWeapon", api.getWeapon);

    return (
        <form className="" onSubmit={handleSubmit}>
            
            <div className="grid gap-2 border rounded-md p-5 mt-2">
                <h3 className="text-lg font-bold col-span-4 mx-5 ">Registro de entrada</h3>
                <h3 className="text-sm text-muted-foreground col-span-4 mx-5 ">Formulário de cadastro de entradas</h3>
                <div className="grid items-center">
                    <div className="mx-5">
                        <h3 className="mt-2 text-sm font-bold">Nome do agente</h3>
                        <Input className="border-white mt-2" required value={officerReceive} onChange={(e)=> setOfficerReceive(e.target.value)} placeholder="nome completo" />
                        <h3 className="text-muted-foreground text-sm mt-2">O agente que devolveu a arma</h3>
                    </div>
                    <div className="mx-5">
                        <h3 className="mt-2 text-sm font-bold"> Arma </h3>
                        <select value={weaponReceive} onChange={(e)=> setWeaponReceive(e.target.value)} id="officers" class="border bg-background text-sm rounded-lg block w-full p-2.5 border-white mt-2">
                            <option selected  className="text-muted-foreground text-sm text-gray-600">Selecione a arma</option>
                            {data?.map( (officer)=> (
                                <option key={officer.id} value={officer.id}>{officer.name}</option>
                            ))}
                        </select>
                        <h3 className="text-muted-foreground text-sm mt-2">A arma entregue</h3>
                    </div>
                    <div className="mx-5">
                        <h3 className="mt-2 text-sm font-bold ">Número de serie da arma</h3>
                        <Input className="border-white mt-2" required value={weaponNumberReceive} onChange={(e)=> setWeaponNumberReceive(e.target.value)} placeholder="#000000" />
                        <h3 className="text-muted-foreground text-sm mt-2">O número de identificação da arma</h3>
                    </div>
                </div>
                <div className="grid">
                    <div className="mx-5">
                        <h3 className="mt-2 text-sm font-bold ">Quantidade de balas</h3>
                        <Input type="number" min={1} defaultValue={1} className="border-white mt-2" value={qtdBulletsReceive} onChange={(e)=> setQtdBulletsReceive(e.target.value)} placeholder="" />
                        <h3 className="text-muted-foreground text-sm mt-2">O número de balas entregue</h3>
                    </div>
                    <div>
                        <Button className="mt-5 mx-5 w-72 h-12 rounded-md bg-blue-800 text-white hover:bg-blue-950" type="submit">Entrada</Button>
                    </div>
                </div>
            </div>
    </form>

    )
}