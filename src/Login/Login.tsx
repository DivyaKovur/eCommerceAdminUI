import { appctxt } from '@/Context/appctxt'
import React,{useContext} from 'react'
import config from './config.json'
import { Input } from '@/common/components/input/Input'
import { useState } from 'react'
export const Login = () => {
  const [data,setData]=useState({})
 const ctxtData= useContext(appctxt)
  const fnClick=()=>{
    alert("SEnding the data")

ctxtData.dispatch({
  type:"LOGIN",
  payload:true
})
  }

  const handleChange=(eve:any)=>{
    const {name,value}=eve?.target
    let inputobj:any=config.find((obj)=>{
      return obj.name===name
    })
    inputobj.hasError=false;
    inputobj.value=value;
    if(!value){
inputobj['hasError']=true
    }
setData({
  ...data,
  [name]:value
})
  }
  return (
    <div className='container- fluid'>
      <h3 className='mt-3 mb-3 text-center'>Login</h3>
   {
    config.map((obj)=>{
      return <Input {...obj} handleChange={handleChange}/>
    })
   }
 
     <div className='row mb-3'>
      <div className='offset-sm-5 col-sm-7'>
           <button className= 'btn btn-primary'  onClick={fnClick}>Click</button>
           </div>
     </div>
      </div>
  
  )
}
