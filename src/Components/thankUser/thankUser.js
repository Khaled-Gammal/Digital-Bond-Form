import React from 'react'
import './style.css'


const ThankUser = ({openModel,onClose}) => {
    if(!openModel) return null;
    
  return (
    <div  className='overlay'>
      <div className='popup'>
        <div className='text-thanks'>
        <i className="fa-sharp fa-solid fa-circle-check fa-2x"></i>
            <span>Thank you for Registeration!</span>
        </div>
        <div className='btn'>
            <button onClick={onClose} className='btn-register'>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ThankUser
