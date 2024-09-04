import React from 'react'

export const Input = ({handleChange,lbl,isRequired,value,hasError,type,name,ErrorMsg,lblCols,inputCols,ErrorMsgCols}:any) => {
  return   <div className='row mb-3'>
        <div className={`col-sm-${lblCols} text-end`}>
                 <b>{lbl} {isRequired&&<span className='text-danger'>*</span>}: </b>
        </div>
        <div className={`col-sm-${inputCols}`}>
          <input onChange={handleChange} name={name} type={type} className='form control'/>
        </div>
        <div className={`col-sm-${ErrorMsgCols}`}>
        { hasError&& <b className='text-danger'>{ErrorMsg}</b>}
        </div>
</div>
}
