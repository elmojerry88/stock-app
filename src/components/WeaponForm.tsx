"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useMutation, useQueryClient } from "react-query";
import { api } from "@/app/api/api_stock";
import { SyntheticEvent} from "react";
import { useToast } from "./ui/use-toast"
import { ButtonLoading } from "@/components/ButtonLoading";


export function WeaponForm() {

  const { toast } = useToast()

  const [name, setName] = useState()
  const [model, setModel] = useState()
  const [type, setType] = useState()
  const [qtd_weapons_bullets, setQtdWeaponsBullets] = useState()
  const [quantity_stock, setQuantityStock] = useState()

  const weapon = {name, model, type, qtd_weapons_bullets, quantity_stock}

  const { mutate, isLoading } = useMutation( () => 
  api.addWeapon(name, model, type, qtd_weapons_bullets, quantity_stock),{

    onSuccess(data, variables, context) {
      setName(""),
      setModel(""),
      setType(""),
      setQtdWeaponsBullets(""),
      setQuantityStock(""),

      toast({
        variant: "default",
        description: " Arma registrada!! "})
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
    console.log(weapon)
    mutate(name, model, type, qtd_weapons_bullets, quantity_stock)
  }

  return (
    <form className="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 items-center border rounded-md p-5">
                <div className="mx-5">
                <h3 className="mt-2 text-sm font-bold ">Nome da arma</h3>
                  <Input className="border-white  mt-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="AK" />
                  <h3 className="text-muted-foreground text-sm mt-2">Ex: AK, Glock</h3>
                </div>
                <div className="mx-5">
                <h3 className="mt-2 text-sm font-bold">Modelo da arma</h3>
                  <Input className="border-white mt-2" value={model} onChange={(e) => setModel(e.target.value)} placeholder="47"/>
                  <h3 className="text-muted-foreground text-sm mt-2">Insira o modelo ou variante da arma</h3>
               </div>
                <div className="mx-5">
                <h3 className="mt-2 text-sm font-bold ">Tipo de arma</h3>
                  <Input className="border-white mt-2" value={type} onChange={(e)=> setType(e.target.value)} placeholder="semi-automática" />
                  <h3 className="text-muted-foreground text-sm mt-2">O poder de fogo da arma <br /> Ex: Fuzil, semi-automática</h3>
                </div>
                <div className="mx-5">
                <h3 className="mt-2 text-sm font-bold ">Capacidade de balas</h3>
                  <Input type="number" min={8} defaultValue={15} value={qtd_weapons_bullets} onChange={(e)=> setQtdWeaponsBullets(e.target.value)} className="border-white mt-2" placeholder="" />
                  <h3 className="text-muted-foreground text-sm mt-2">Quantidade de balas por carregador</h3>
                </div>
                <div className="mx-5">
                <h3 className="mt-2 text-sm font-bold ">Quantidade em stock</h3>
                  <Input type="number" min={1} defaultValue={1} className="border-white mt-2" value={quantity_stock} onChange={(e)=> setQuantityStock(e.target.value)} placeholder="" />
                  <h3 className="text-muted-foreground text-sm mt-2">O número de stock da arma</h3>
                </div>
                <div>
                  {isLoading ? <ButtonLoading/> : <Button className="mt-5 mx-5 w-72 h-12 rounded-md bg-blue-800 text-white hover:bg-blue-950" type="submit">Registrar</Button>}
                </div>
                
            </div>
      </form>
  )
}
