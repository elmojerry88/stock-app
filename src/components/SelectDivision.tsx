import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export function SelectDivision() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
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
    </Select>
  )
}