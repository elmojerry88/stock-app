'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { api } from '@/app/api/api_stock';
import { useQuery } from "react-query";



export default function ReceiveTable(){
    const { data, isError, isLoading } = useQuery("getUser", api.getReceive);

    return (
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-blue-950">
                    Entrada de armas
                    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Controlo de armas que foram devolvidas</p>
                </caption>
                <thead class="text-xs text-gray-800 uppercase bg-gray-50 dark:bg-blue-800 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nome do agente
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nip 
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Arma atribuida
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Número de serie da arma
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Quantidade de bala recebida
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Data
                        </th>
                      
                    </tr>
                </thead>
                <tbody>

                    {/* {data?.map((receive) => (

                                <tr class="bg-white border-b dark:bg-blue-950 dark:border-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {receive.name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {receive.nip_officer}
                                    </td>
                                    <td class="px-6 py-4">
                                        {receive.weapon}
                                    </td>
                                    <td class="px-6 py-4">
                                        {receive.weapons_number}
                                    </td>
                                    <td class="px-6 py-4">
                                        {receive.qtd_bullets}
                                    </td>
                                    <td class="px-6 py-4">
                                        {receive.created_at}
                                    </td>

                                </tr>


                    ))} */}
                    
                </tbody>
            </table>
      </div>
    )
}