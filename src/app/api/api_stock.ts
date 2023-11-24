import axios from "axios"
import { User } from "../../models/User";

import { toast } from "react-toastify";





axios.defaults.withCredentials = true;

// axios.interceptors.response.use(undefined, (error)=> {

//     if (error.message === 'Network Error' && !error.response){
//             toast.error("Erro")
//         }
// })

const url = axios.create({
    baseURL: "http://localhost:8000/api"
})




export async function addUser(first_name:String, second_name:String, email:String, password:String){

        const response =  await url.post<User[]>("/user/store", {first_name, second_name, email, password},
         { headers: {'Content-Type': 'application/json', Accept: 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
         'Access-Control-Allow-Credentials': 'true',}, }).then(function (response){
            return response.data
         }).catch(function (error){
            if (error.response){
                return response.error.message
                // console.log(error.response.data.message)
                // console.log(error.response.status)
                // console.log(error.response.header)
            } else if(error.request){
                // return response.error.request
                console.log(error.request)
            } else {
                // console.log ('Error', error.message)
            }
         })
        return



}

export async function addOfficer(name:String, division:String, category:String, nip: number){
    try {

        const response =  await url.post<User[]>("/officer/store", {name, division, category, nip},
         { headers: {'Content-Type': 'application/json', Accept: 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
         'Access-Control-Allow-Credentials': 'true',}, })
        return response.data

    } catch (error) {

        console.log(error)

    }

}

export async function addWeapon(name: String, model: String, type: String, qtd_weapons_bullets: number, quantity_stock: number){
    try {

        const response =  await url.post<User[]>("/weapon/store", {name, model, type, qtd_weapons_bullets, quantity_stock},
         { headers: {'Content-Type': 'application/json', Accept: 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
         'Access-Control-Allow-Credentials': 'true',}, })
        return response.data

    } catch (error) {

        console.log(error)

    }

}


export async function addReceive(officerReceive: String, weaponReceive: String, qtdBulletsReceive: number, weaponNumberReceive:string){
    try {

        const response =  await url.post<User[]>("/receive/store", {officerReceive, weaponReceive, qtdBulletsReceive, weaponNumberReceive},
         { headers: {'Content-Type': 'application/json', Accept: 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
         'Access-Control-Allow-Credentials': 'true',}, })
        return response.data

    } catch (error) {

        console.log(error)

    }

}
export async function addLeave(officerLeave: String, weaponLeave: String, qtdBulletsLeave: number, weaponNumberLeave:string){
    try {

        const response =  await url.post<User[]>("/leave/store", {officerLeave, weaponLeave, qtdBulletsLeave, weaponNumberLeave},
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

export async function getReceive(){
    const response = await url.get("/receive/")

    return response.data
}

export async function getOfficers(){
    const response = await url.get("/officer/")

    return response.data
}

export async function getLeave(){
    const response = await url.get("/leave/")

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
    getReceive,
    addOfficer,
    addWeapon,
    getOfficers,
    addReceive,
    getLeave,
    addLeave,
}