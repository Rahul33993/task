import React, { useState } from 'react'

function Show() {
  const[first,setFirst]=useState('');
  const[last,setLast]=useState('');
  const[email,setEmail]=useState('');
  const[checktype,setChecktype]=useState('password');
  const[showhidetext,setShowhidetext]=useState('show');
 const  handleshowhidepassword=(e)=>{
  const gettype=e.target.value;
  console.log(gettype);
  if(gettype==='password')
  {
    setChecktype('text');
    setShowhidetext('Hide');
  }else{
    setChecktype('password');
    setShowhidetext('Show');
  }
 }

  const collectData=()=>{
    console.log(first,last, email,);
  }
  return (
    <div>
     <img
    alt='logo'
    className='logo'
     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZeIQvq3DMbHBxTsgRKk_7zgccPTtHHArJg&usqp=CAU'/>
        <div className='profile'>
        <h1>Edit Profile</h1>
        <input className='inputBox' type="text" value={first} onChange={(e)=>setFirst(e.target.value)} placeholder='Enter First Name'/>
        <input className='inputBox' type="text" value={last} onChange={(e)=>setLast(e.target.value)} placeholder='Enter Last Name'/>
        <input className='inputBox' type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter mail'/> 
       
       <input className='inputBox' type={checktype}   placeholder='Enter Password'/>
       <button value={checktype} onClick={(e)=>handleshowhidepassword(e)} className='inputBox'  type='button'>{showhidetext}</button>
        <button onClick={collectData} className='appButton'  type='button'>Save</button>
        
        </div>
    </div>
  )
}

export default Show;
