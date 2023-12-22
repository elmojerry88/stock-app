"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { api } from "@/app/api/api_stock";
import { SyntheticEvent} from "react";
import { useToast } from "./ui/use-toast"
import { ButtonLoading } from "@/components/ButtonLoading";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export function ProfileForm() {

  const { toast } = useToast()

  const [name, setName] = useState("");
  const [division, setDivision] = useState("");
  const [category, setCategoy] = useState("");
  const [nip, setNip] = useState("");

  const { mutate, isLoading } = useMutation( () => 
  api.addOfficer(name, division, category, nip),{

    onSuccess(data, variables, context) {
      
      setName(""),
      setDivision(""),
      setCategoy(""),
      setNip(""),

      toast({
        variant: "default",
        description: " Agente registrado!! "})
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

const officer = {name, division, category, nip}

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
                  <select value={division} onChange={(e) => setDivision(e.target.value)} id="officers" className="border bg-background text-sm rounded-lg block w-full p-2 border-white mt-2">
                    <option selected  className="text-muted-foreground text-sm text-gray-600">Selecione a divisão</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="Agente" value="Ordem pública">Ordem pública</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="Cabo" value="PIR">PIR</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="1º Sargento" value="SIC">SIC</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="2º Sargento" value="Polícia de trânsito">Polícia de trânsito</option>     
                  </select> 
                    <h3 className="text-muted-foreground text-sm mt-2">Insira a divisão</h3>
               </div>
                <div className="mx-5">
                  <h3 className="mt-2 text-sm font-bold ">Distintivo</h3>
                  <select value={category} onChange={(e) => setCategoy(e.target.value) } id="officers" className="border bg-background text-sm rounded-lg block w-full p-2  border-white mt-2">
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" selected  className="text-muted-foreground text-lg font-semibold text-gray-600 p-2">Selecione o distintivo</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="Agente" value="Agente">Agente</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="Cabo" value="Cabo">Cabo</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="1º Sargento" value="1º Sargento">1º Sargento</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="2º Sargento" value="2º Sargento">2º Sargento</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="Tenente" value="Tenente">Tenente</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="Capitão" value="Capitão">Capitão</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="Major" value="Major">Major</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="Tenete-Coronel" value="Tenete-Coronel">Tenete-Coronel</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="Coronel" value="Coronel">Coronel</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="Brigadeiro" value="Brigadeiro">Brigadeiro</option>
                    <option className="text-muted-foreground text-lg text-gray-200 p-2" key="Comandante" value="Comandante">Comandante</option>        
                  </select> 

                {/* <Select defaultValue={category} onValueChange={(e: any) => setCategoy(e.target.value) }>
                      <SelectTrigger className="border-white text-sm mt-2" >
                        <SelectValue placeholder="Selecione o distintivo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Cabo">Cabo</SelectItem>
                          <SelectItem value="Agente">Agente</SelectItem>
                          <SelectItem value="1º Sargento">1º Sargento</SelectItem>
                          <SelectItem value="2º Sargento">2º Sargento</SelectItem>
                          <SelectItem value="Tenente">Tenente</SelectItem>
                          <SelectItem value="Capitão">Capitão</SelectItem>
                          <SelectItem value="Major">Major</SelectItem>
                          <SelectItem value="Tenente-Coronel">Tenente-Coronel</SelectItem>
                          <SelectItem value="Coronel">Coronel</SelectItem>
                          <SelectItem value="Brigadeiro">Brigadeiro</SelectItem>
                          <SelectItem value="Comandante">Comandante</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                  </Select> */}
        
                  <h3 className="text-muted-foreground text-sm mt-2">Insira a patente/função </h3>
                </div>
                <div className="mx-5">
                <h3 className="mt-2 text-sm font-bold ">NIP</h3>
                  <Input className="border-white mt-2" value={nip} onChange={(e) => setNip(e.target.value)}  placeholder="000123456789" />
                  <h3 className="text-muted-foreground text-sm mt-2">O nip deve ser válido e correspondente ao agente</h3>
                </div>
                <div>
                  {isLoading ? <ButtonLoading/> : <Button className="mt-5 mx-5 w-72 h-12 rounded-md bg-blue-800 text-white hover:bg-blue-950" type="submit">Criar agente</Button>}
                </div>
                
            </div>
      </form>
  
  )
}
