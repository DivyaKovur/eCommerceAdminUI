import { appctxt } from '@/Context/appctxt'
import React,{useContext} from 'react'

export const Login = () => {
 const ctxtData= useContext(appctxt)
  const fnClick=()=>{
ctxtData.dispatch({
  type:"LOGIN",
  payload:true
})
  }
  return (
    <div>Login
          <button onClick={fnClick}>Click</button>

    </div>

  )
}
