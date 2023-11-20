"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { api } from "@/app/api/api_stock";
import { SyntheticEvent} from "react";


export function ProfileForm() {


  const [name, setName] = useState();
  const [division, setDivision] = useState();
  const [category, setCategoy] = useState();
  const [gender, setGender] = useState();
  const [nip, setNip] = useState();

  const {isLoading ,isError, mutate } = useMutation( () => 
  api.addOfficer(name, division, category, nip),{
  }
)

const officer = {name, division, category, nip, gender}

function handleSubmit(event: SyntheticEvent){
  event.preventDefault();
  console.log(officer)
  mutate(name, division, category, nip)
}

  return (
    
    
      <form onSubmit={handleSubmit} className="">
            <div className="grid grid-cols-2 items-center border rounded-md p-5">
                <div className="mx-5">
                <h3 className="mt-2 text-sm font-bold ">Nome completo</h3>
                  <Input className="border-white  mt-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome completo" />
                  <h3 className="text-muted-foreground text-sm mt-2">Insira um nome de registro, alcunha ou nome que não é de registro não são válidos</h3>
                </div>
                <div className="mx-5">
                <h3 className="mt-2 text-sm font-bold ">Divisão</h3>
                  <Input className="border-white mt-2" value={division} onChange={(e) => setDivision(e.target.value)} placeholder="PIR"/>
                  <h3 className="text-muted-foreground text-sm mt-2">Insira a sua divisão <br /> Ex: PIR, SIC</h3>
               </div>
                <div className="mx-5">
                <h3 className="mt-2 text-sm font-bold ">Patente/Função</h3>
                  <Input className="border-white mt-2" value={category} onChange={(e) => setCategoy(e.target.value) } placeholder="Sargento" />
                  <h3 className="text-muted-foreground text-sm mt-2">Insira a patente/função </h3>
                </div>
                <div className="mx-5">
                <h3 className="mt-2 text-sm font-bold ">NIP</h3>
                  <Input className="border-white mt-2" value={nip} onChange={(e) => setNip(e.target.value)}  placeholder="000123456789" />
                  <h3 className="text-muted-foreground text-sm mt-2">O nip deve ser válido e correspondente ao agente</h3>
                </div>
                <div>
                  <Button className="mt-5 mx-5 w-72 h-12 rounded-md bg-blue-800 text-white hover:bg-blue-950" type="submit">Criar</Button>
                </div>
                
            </div>
      </form>
  
  )
}
