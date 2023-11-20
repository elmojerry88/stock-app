import axios, { GenericFormData } from "axios"
import { User } from "../../models/User";

axios.defaults.withCredentials = true;

const url = axios.create({
    baseURL: "http://localhost:8000/api"
})

export async function addUser(first_name:String, second_name:String, email:String, password:String){
    try {
        
        const response =  await url.post<User[]>("/user/store", {first_name, second_name, email, password},
         { headers: {'Content-Type': 'application/json', Accept: 'application/json', 
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
         'Access-Control-Allow-Credentials': 'true',}, })
        return response.data

    } catch (error) {
        
        console.log(error)
        
    }   

}

export async function getUser(): Promise<User[]> {
    const response = await url.get("/user/")

    return response.data
}

export async function officersCount(){
    const response = await url.get("/officer/count")

    return response.data
}

export async function UsersCount(){
    const response = await url.get("/user/count")

    return response.data
}

export async function WeaponsCount(){
    const response = await url.get("/weapon/count")

    return response.data
}

export async function LeavesCount(){
    const response = await url.get("/leave/count")

    return response.data
}

export async function getWeapon(){
    const response = await url.get("/weapon")

    return response.data
}

export async function getSumWeapon(){
    const response = await url.get("/weapon/sum")

    return response.data
}



// export const updateTodo = async (todo) => {
//     return await todosApi.patch(`/todos/${todo.id}`, todo)
// }

// export const deleteTodo = async ({ id }) => {
//     return await todosApi.delete(`/todos/${id}`, id)
// }

export const api = {
    getUser,
    addUser,
    officersCount,
    UsersCount, 
    WeaponsCount,
    LeavesCount,
    getWeapon,
    getSumWeapon,
}