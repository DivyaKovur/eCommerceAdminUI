import { appctxt } from '@/Context/appctxt'
import React,{useContext} from 'react'
import config from './config.json'
import { Input } from '@/common/components/input/Input'
import { useState } from 'react'
import { json } from 'stream/consumers'
export const Login = () => {
  const[inputControls,setinputControls]=useState(config)
  // const [data,setData]=useState({})
 const ctxtData= useContext(appctxt)
  const fnLogin=()=>{
    const clonedinputControls=JSON.parse(JSON.stringify(inputControls))
    const dataobj:any={}
clonedinputControls.forEach((obj:any) => {
  dataobj[obj.name]=obj.value
obj.hasError= !obj.value
  
})
const isValid=clonedinputControls.some((obj:any)=>obj.hasError)
if(isValid){
  setinputControls(clonedinputControls)
  return;
}

    alert(JSON.stringify(dataobj))
  
// ctxtData.dispatch({
//   type:"LOGIN",
//   payload:true
// })
  }

  const handleChange=(eve:any)=>{
    const {name,value}=eve?.target
    const clonedinputControls=JSON.parse(JSON.stringify(inputControls))
    let inputobj:any=clonedinputControls.find((obj:any)=>{
      return obj.name===name
    })
    inputobj.value=value

inputobj.hasError=!value
setinputControls(clonedinputControls)

//     if(!value){
// inputobj['hasError']=true
//     }
// setData({
//   ...data,
//   [name]:value
// })
  }
  return (
    <div className='container- fluid'>
      <h3 className='mt-3 mb-3 text-center'>Login</h3>
   {
    inputControls.map((obj)=>{
      return <Input {...obj} handleChange={handleChange}/>
    })
   }
 
     <div className='row mb-3'>
      <div className='offset-sm-5 col-sm-7'>
           <button className= 'btn btn-primary'  onClick={fnLogin}>Login</button>
           </div>
     </div>
      </div>
  
  )
}
