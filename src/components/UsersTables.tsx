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
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";




export default function UsersTable(){
    const { data, isError, isLoading } = useQuery("getUser", api.getUser);
    return (

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-900">
                            Usuários
                            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Lista de todos usuários cadastrados no sistema e sua respectiva permissão.</p>
                        </caption>
                        <thead class="text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Nome do usuário
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Permissão no sistema
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    id
                                </th>
                              
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map( (user) => (

                                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-800 hover:bg-blue-950">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hover:bg-blue-950">
                                            {user.first_name} {user.second_name}
                                        </th>
                                        <td class="px-6 py-4 hover:bg-blue-950 font-medium text-white">
                                            {user.email}
                                        </td>
                                        <td class="px-6 py-4 hover:bg-blue-950 font-medium text-white">
                                            {user.role}
                                        </td>
                                        <td class="px-6 py-4 hover:bg-blue-950 font-medium text-white">
                                            {user.id}
                                        </td>

                                    </tr>


                            ))}
                            
                        </tbody>
                    </table>
                </div>
    )
}