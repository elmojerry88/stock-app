'use client'

import { api } from '@/app/api/api_stock';
import { useQuery } from "react-query";



export default function OfficerTable(){

    const { data, isError, isLoading } = useQuery("getOfficer", api.getOfficers);

    return (

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-blue-950">

                            Agentes
                            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Todos os agentes registrados na esquadra.</p>
                        </caption>
                        <thead className="text-xs text-gray-800 uppercase bg-gray-50 dark:bg-blue-800 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nip
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    nome
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Patente/função
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Divisão
                                </th>
                           
                              
                            </tr>
                        </thead>
                        <tbody>
                        {data?.map( (officer: any) => (

                                <tr className="bg-white border-b dark:bg-blue-950 dark:border-gray-800" key={officer.id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hover:bg-blue-950">
                                        {officer.id}
                                    </th>
                                    <td className="px-6 py-4 hover:bg-blue-950 font-medium text-white">
                                        {officer.nip}
                                    </td>
                                    <td className="px-6 py-4 hover:bg-blue-950 font-medium text-white">
                                        {officer.name}
                                    </td>
                                    <td className="px-6 py-4 hover:bg-blue-950 font-medium text-white">
                                        {officer.category}
                                    </td>
                                    <td className="px-6 py-4 hover:bg-blue-950 font-medium text-white">
                                        {officer.division}
                                    </td>

                                </tr>


                            ))}
                            
                        </tbody>
                    </table>
                </div>
    )
}