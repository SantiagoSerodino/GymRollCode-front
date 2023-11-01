import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  async function submit(event) {
    event.preventDefault
  }

    return (

        <div className="login row">

          <form className="col-6 container-fluid">

             <div className="mb-3">
                 <label className="form-label text-secondary">Email</label>
               <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
             </div>

             <div className="mb-3">
               <label className="form-label">Password</label>
               <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
             </div>

             <div className="mb-3 form-check">
               <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
               <label className="form-check-label">Check me out</label>
             </div>

           <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>

         </form>

        </div>
    )
}


export default Login