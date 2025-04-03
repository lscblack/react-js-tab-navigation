import { useState } from "react"
import Login from "../comps/Login"
import Register from "../comps/Register"

function Auth(){
    const [Autho,setAutho] = useState('login')
    return(
        <>
        <div className="flex gap-5 p-3 bg-gray-500 text-white">
            <button onClick={()=>setAutho('login')}>Login</button>
            <button onClick={()=>setAutho('signup')}>Signup</button>
        </div>

        {Autho === 'login' && <Login />}
        {Autho ==='signup' && <Register />} 

        </>
    )

}

export default Auth