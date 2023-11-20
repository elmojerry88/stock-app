"use client"
import { useState } from "react"
import { api } from "@/app/api/api_stock"
import { useMutation,  useQuery } from "react-query";;



export default function SelectWeapon(){
    const { data} = useQuery("getWeapon", api.getWeapon);

    const [weapon, setWeapon] = useState()

    return (
        <select id="officers" class="border bg-background text-sm rounded-lg block w-full p-2.5 border-white mt-2">
            <option selected className="text-muted-foreground text-sm text-gray-600">Selecione a arma</option>
                {data?.map( (weapon)=> (
                    <option onSelect={(e)=> setWeapon(e.target.value)} key={weapon.id} value={weapon.id}>{weapon.name}-{weapon.model}</option>
                ))}
        </select>
    )
}