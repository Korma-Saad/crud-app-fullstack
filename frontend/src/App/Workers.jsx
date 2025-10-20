import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Workers() {
  const [workers, setWorkers] = useState([]);
  const [message,setMessage] = useState("")
  
  const navigate = useNavigate()
  const get_workers = ()=>{
    
      axios.get("http://localhost/fullstack_project1/backend/workers/index.php")
      .then(response=>setWorkers(response.data))
      .catch(error=>console.error(error))
   
  }
  const delete_workers = (index)=>{
    navigate("/deleteWorker",{state:{id:index}})
    

  }
  const edit_worker = (index)=>{
    axios.get(`http://localhost/fullstack_project1/backend/workers/index.php?id=${index}`)
    .then((response)=>navigate("/updateWorker",{state:{oldValue:response.data,id:index}}))
    .catch(error=>console.error(error))
    // 
    
  }
  useEffect(()=>{
    get_workers()
  },[])
  
  return (
    <>
    <div>
      <h1>Workers Table</h1>
      
    
      <table className="table table-bordered table-dashed table-hover m-4">
        <tr>
          <th>ID</th>
          <th>NOM</th>
          <th>PRENOM</th>
          <th>AGE</th>
          <th>COUNTRY</th>
          <th>VILLE</th>
          <th>YEARLY EARN</th>
          <th>TYPE OF WORK</th>
          <th>ACTIONS</th>
        </tr>
        {workers.length>0?workers.map((value,index)=>(
          <tr >
          <td>{value?.id}</td>
          <td>{value?.nom}</td>
          <td>{value?.prenom}</td>
          <td>{value?.age}</td>
          <td>{value?.country}</td>
          <td>{value?.ville}</td>
          <td>{value?.yearly_earn}</td>
          <td>{value?.type_profession}</td>
          <td><button className="btn btn-outline-warning m-2 p-3" onClick={()=>edit_worker(value.id)}>Edit User</button>
          <button className="btn btn-outline-danger p-3" onClick={()=>delete_workers(value.id)}>Delete User</button>
          </td>
        </tr>
        )):<tr><th colSpan={9} className="text-center">You don't have any worker</th></tr>}
      </table>
      
    </div></>
  );
}
