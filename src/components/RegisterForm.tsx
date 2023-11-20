"use client"
import RegisterReceive from "./RegisterReceive";
import RegisterLeave from "./RegisterLeave";


export default function RegisterForm(){

    return (
        <div className="flex justify-center space-x-8">

            <RegisterReceive/>
            <RegisterLeave />
         </div>
   )
}