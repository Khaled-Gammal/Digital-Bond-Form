import React from 'react'
import '../thankUser/style.css'


const CompeleteData = ({compelete,onClose}) => {
    if(!compelete) return null
    
  return (
    <div className='overlay'>
      <div className='popup'>
        <div className='text-thanks'>
        <i className="fa-sharp fa-solid fa-circle-exclamation fa-2x"></i>
            <span>Please! Compelete you data...</span>
        </div>
        <div className='btn'>
            <button onClick={onClose} className='btn-compelete'>Close</button>
        </div>
      </div>
    </div>
  )
}

export default CompeleteData;
