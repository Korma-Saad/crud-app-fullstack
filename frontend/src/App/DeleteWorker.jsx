import {useNavigate,useLocation} from "react-router-dom"
import React, { useState } from "react"

import axios from "axios"
export default function DeleteWorker(){
    const navigate = useNavigate()
    const location = useLocation()
    const index = location.state?.id

    const supprimer = (id)=>{
        axios.delete(`http://localhost/fullstack_project1/backend/workers/index.php?id=${id}`)
        .then(response=>alert("message : "+response.data?.message))
        .catch(error=>console.error(error))
        navigate("/")
    }
    return <>
    <div className="container m-4 p-3">
        <div className="alert alert-danger p-3 m-3">
            <p>Tu veux supprimer ce etudiant a une id : {index} == <button className="btn btn-outline-danger p-2 m-2" onClick={()=>supprimer(index)}>Delete Student</button></p>
        </div>
    </div>
    
    </>
}