'use client'

import { api } from '@/app/api/api_stock';
import { useQuery } from "react-query";



export default function WeaponTable(){

    const { data } = useQuery("getWeapon", api.getWeapon, {
        refetchOnWindowFocus: false,
        refetchInterval: 60000,
        retryDelay: 60000
    });

    return (

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-900">
                            Armas
                            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Todas as armas registradas no sistema e quantidade de stock.</p>
                        </caption>
                        <thead className="text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    nome
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Modelo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tipo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Cartucho por arma
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantidade em stock
                                </th>
                           
                              
                            </tr>
                        </thead>
                        <tbody>
                        {data?.map( (weapon: any) => (

                                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-800 hover:bg-blue-950" key={weapon.id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hover:bg-blue-950">
                                        {weapon.name}
                                    </th>
                                    <td className="px-6 py-4 hover:bg-blue-950 font-medium text-white">
                                        {weapon.model}
                                    </td>
                                    <td className="px-6 py-4 hover:bg-blue-950 font-medium text-white">
                                        {weapon.type}
                                    </td>
                                    <td className="px-6 py-4 hover:bg-blue-950 font-medium text-white">
                                        {weapon.qtd_weapons_bullets}
                                    </td>
                                    <td className="px-6 py-4 hover:bg-blue-950 font-medium text-white">
                                        {weapon.quantity_stock}
                                    </td>

                                </tr>


))}
                            
                        </tbody>
                    </table>
                </div>
    )
}