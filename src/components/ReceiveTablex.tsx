'use client'

import { api } from '@/app/api/api_stock';
import { useQuery } from "react-query";



export default function ReceiveTable(){
    const { data } = useQuery("getReceive", api.getReceive);

    return (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-blue-950">
                    Entrada de armas
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Armazenamento de dados de todas as armas distribuidas</p>
                </caption>
                <thead className="text-xs text-gray-800 uppercase bg-gray-50 dark:bg-blue-800 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nome do agente
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nip 
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Arma atribuida
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Número de serie da arma
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantidade de bala recebida
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Data
                        </th>
                      
                    </tr>
                </thead>
                <tbody>

                    {data?.map((receive: any) => (

                                <tr className="bg-white border-b dark:bg-blue-950 dark:border-gray-800" key={receive.id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {receive.officer}
                                    </th>
                                    <td className="px-6 py-4">
                                        {receive.nip_officer}
                                    </td>
                                    <td className="px-6 py-4">
                                        {receive.weapon}
                                    </td>
                                    <td className="px-6 py-4">
                                        {receive.weapon_number}
                                    </td>
                                    <td className="px-6 py-4">
                                        {receive.qtd_bullets}
                                    </td>
                                    <td className="px-6 py-4">
                                        {receive.created_at}
                                    </td>

                                </tr>


                    ))} 
                    
                </tbody>
            </table>
      </div>
    )
}