import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBoth, changeEmail, changeFullName } from "../features/userSlice";




function User() {

    const { fullName, email } = useSelector((state) => state.user)

    const dispatch = useDispatch()

    const [emailValue,setEmailValue] = useState("")
    const [name,setName] = useState("")
    
    function handleEmail() {
        dispatch(changeEmail(emailValue))
    }
    
    function handleBoth() {
        dispatch(changeBoth({
            email:emailValue,
            fullName:name
        }))
    }

    return (
        <>
            <div className="max-w-max mx-auto space-y-4 py-10">
                <p className="text-center">Full Name:{fullName}</p>
                <p className="text-center">Email:{email}</p>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input onChange={(e)=>setEmailValue(e.target.value)} value={emailValue} type="text" className="grow" placeholder="Email" />
                </label>
                <button onClick={handleEmail} className="btn w-full">Emali Kaydet</button>



                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="grow" placeholder="Username" />
                </label>
                <div className="flex gap-1">
                    <button onClick={()=>dispatch(changeFullName(name))} className="btn">İsmi Kaydet</button>

                    <button onClick={handleBoth} className="btn">Ikisini de Kaydet</button>
                </div>
            </div>
        </>
    );
}

export default User;