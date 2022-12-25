import React, { Fragment ,useRef, useState} from 'react';
import ThankUser from '../thankUser/thankUser';
import CompeleteData from '../compeleteData/CompeleteData';
import "./style.css";


const Content = () => {
    const[openModel,setOpenModel]=useState(false);
    const[compelete,setCompelete]=useState(false);
    const name=useRef();
    const position=useRef();
    const availDate=useRef();
    const salary=useRef();
    const birthday=useRef();
    const address=useRef();
    const phone=useRef();
    const email=useRef();
    const marital=useRef();

    const handleData=(e)=>{
        e.preventDefault();
        if(name.current.value===""||position.current.value===""||availDate.current.value===""||
            salary.current.value===""||birthday.current.value===""||address.current.value===""||
            phone.current.value===""||email.current.value===""||marital.current.value===""){

            setCompelete(true);
            return
        }

        localStorage.setItem("Full-Name",name.current.value);
        localStorage.setItem("Position",position.current.value);
        localStorage.setItem("Available-Date",availDate.current.value);
        localStorage.setItem("Salary",salary.current.value);
        localStorage.setItem("Birthday",birthday.current.value);
        localStorage.setItem("Address",address.current.value);
        localStorage.setItem("Phone",phone.current.value);
        localStorage.setItem("Email",email.current.value);
        localStorage.setItem("Marital-Status",marital.current.value);

        
        if( name.current.value.length>0 && position.current.value.length>0&&availDate.current.value.length>0&&
            salary.current.value.length>0&&birthday.current.value.length>0&&address.current.value.length>0&&
            phone.current.value.length>0&&email.current.value.length>0&&marital.current.value.length>0){
                setOpenModel(true)
            
           
        }
            
        name.current.value='';
        position.current.value='';
        availDate.current.value='';
        salary.current.value='';
        birthday.current.value='';
        address.current.value='';
        phone.current.value='';
        email.current.value='';
        marital.current.value='--Please choose a marital status--';
    }
    
    
  return (
    <Fragment>
            <div className='content '>
                <div className='about'>
                    <div className='container'>
                        <img src="images/logo.png" alt="Digital Bond"/>
                        <div className='brief fade-in-left'>
                            <h4>Brief</h4>
                            <p>A digital marketing agency that mixes and matches creativity and commitment to help brands go beyond the limit.</p>
                        </div>
                        <div className='services'>
                            <h4>Services</h4>
                            <p>SocialMedia - Web Development - Mobile Apps - SEO Optimization - Influencers Marketing - SMS CAMPAIGNS - Media Production</p>
                        </div>
                    </div>
                </div>
                <form>
                    <div className='container'>
                        <div className='name'>
                            <label htmlFor="full-name">Full Name</label>
                            <input type='text' required placeholder='Enter your name.' id='full-name' ref={name}/>
                        </div>
                        <div className='position'>
                            <label htmlFor="position">Position</label>
                            <input type='text' required placeholder='Your position...' id='position' ref={position}/>
                        </div>
                        <div className='av-date'>
                            <label htmlFor='avdate'>Availibility Date</label>
                            <input type='date' required  id='avdate' ref={availDate}/>
                        </div>
                        <div className='salary'>
                            <label htmlFor="salary">Expected Salary</label>
                            <input type='number' required placeholder='Your salary...' id='salary' ref={salary}/>
                        </div>
                        <div className='birthday'>
                            <label htmlFor="birthday">Date of Birth</label>
                            <input type='date' required id='birthday'  ref={birthday}/>
                        </div>
                        <div className='address'>
                            <label htmlFor='address'>Address</label>
                            <input type='text' required placeholder='Your address...' id='address' ref={address}/>
                        </div> 
                        <div className='phone'>
                            <label htmlFor='phone'>Phone Number</label>
                            <input type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' required placeholder='Your phone number...' id='phone' ref={phone}/>
                        </div>
                        <div className='email'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' required placeholder='name@example.com' id='email' ref={email}/>
                        </div>
                        <div className='status'>
                            <label htmlFor='status'>Marital Status</label>
                            <select id="status" ref={marital}>
                                <option defaultValue="" hidden>--Please choose a marital status--</option>
                                <option defaultValue="single">Single</option>
                                <option defaultValue="married">Married</option>
                                <option defaultValue="other">Other..</option>
                            </select>
                        </div>
                        <button onClick={handleData}>Register</button>
                    </div>
                </form>
                <ThankUser openModel={openModel}  onClose={()=> setOpenModel(false)}/>
                <CompeleteData compelete={compelete} onClose={()=> setCompelete(false)}/>
            </div>
    </Fragment>
  )
}

export default Content;
