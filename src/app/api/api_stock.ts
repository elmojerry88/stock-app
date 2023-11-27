import axios from "axios"
import { User } from "../../models/User";

const url = axios.create({
    baseURL: "http://localhost:8000/api" ,
    
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',

    },
    withCredentials: true,
  })
  

export async function addUser(first_name:String, second_name:String, email:String, password:String, gender: string){

        const response: any =  await url.post<User[]>("/user/store", {first_name, second_name, email, password, gender})
        .then(function (response){
            return response.data
         })
    
        axios.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
}

export async function addOfficer(name:String, division:String, category:String, nip: number){
 

    const response =  await url.post<User[]>("/officer/store", {name, division, category, nip},).then( function (response) {
        return response.data
    })
        
    axios.interceptors.request.use(function (config) {
        return config;
      }, function (error) {
        return Promise.reject(error);
      });

   

}

export async function addWeapon(name: String, model: String, type: String, qtd_weapons_bullets: number, quantity_stock: number){
   

    const response =  await url.post<User[]>("/weapon/store", {name, model, type, qtd_weapons_bullets, quantity_stock},).then( function (response) {
        return response.data
    })
    
    axios.interceptors.request.use(function (config) {
        return config;
      }, function (error) {
        return Promise.reject(error);
      });
  

}


export async function addReceive(officerReceive: String, weaponReceive: String, qtdBulletsReceive: number, weaponNumberReceive:string){

    const response: any =  await url.post<User[]>("/receive/store", {officerReceive, weaponReceive, qtdBulletsReceive, weaponNumberReceive},).then( function (response) {
        return response.data
    })
        
    axios.interceptors.request.use(function (config) {
        return config;
      }, function (error) {
        return Promise.reject(error);
      });


}
export async function addLeave(officerLeave: String, weaponLeave: String, qtdBulletsLeave: number, weaponNumberLeave:string){
    
    

    const response: any =  await url.post<User[]>("/leave/store", {officerLeave, weaponLeave, qtdBulletsLeave, weaponNumberLeave},).then( function (response){
        return response.data
    })
   
    axios.interceptors.request.use(function (config) {
        return config;
      }, function (error) {
        return Promise.reject(error);
      });

   

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