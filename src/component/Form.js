import React from "react";

import { useState} from "react";


function Form() {
 const[data,setdata]=useState({name:"",email:"",gender:"",phoneNumber:"",password:""})
 const[error,seterror]=useState({name:"",email:"",gender:"",phoneNumber:"",password:""})
 const onchangehandler= (e) =>{
  console.log(1)
  const{name,value}=e.target;
  setdata( {...data,[name]:value,gender:document.getElementById("gender").value})
  validation[name](value)
  console.log(data)
}
console.log(data)
 const validation={
 
    name: (value)=>{if(!value){
      error.name="All fields are mandatory";
      seterror({...error})
      return
     }else if(!(/^[a-z\d\-_\s]+$/i).test(value)){
      error.name="name should be alphanumeric";
      seterror({...error})
      return
     }else{
      error.name="";
      seterror({...error})
     }} ,
     email: (value)=>{if(!value){
      error.email="All fields are mandatory";
      seterror({...error})
      return
     }else if (!(/@/).test(value)){
      error.email="email  must contain @";
      seterror({...error})
      return

     }else{
      error.email=""
      seterror({...error})
     }
    },
    phoneNumber: (value)=>{if(!value){
      error.phoneNumber="All fields are mandatory"
      seterror({...error})
      return
     }else if (!(/^[0-9]+$/i).test(value)){
      error.phoneNumber="phone number must be number"
      seterror({...error})
    return
     }else{
      error.phoneNumber=""
      seterror({...error})} 
     },
     password:(value)=>{if(!value){
      error.password="All fields are mandatory"
      seterror({...error})
      return
     }else if (value.length<6 || value.length>10){
      error.password="password should be  6 digit and less than 10 digit"
      seterror({...error})
return
     }else{
      error.password=""
      seterror({...error})
     }
    }
 
}
 const submithandler=(e)=>{
  e.preventDefault()
  
  function gog(){

let a= data.email.split("");
let b=[];
for(let i=0;i<a.length;i++){
  
  if(a[i]==="@"){
    break;
  }
  b.push(a[i])
  
}
  



    return b.join("")
  }
  alert("hello   "+gog())
  console.log(data)
  
  console.log(error,"after")
 }
 
return <>

<form onSubmit={ submithandler}>
  <div>
    <h2>singin form</h2>
   
  </div>
  <div>
    <label htmlFor="name">name</label>
    <input id="name" type="name"  name="name" onChange={onchangehandler}  ></input>
   {error.name&&  <p>{error.name}</p>} 
  </div>
  <div>
  <label htmlFor="email">email</label>
    <input id="email" type="email" name="email" onChange={ onchangehandler}></input>
    {error.email&&  <p>{error.email}</p>}
  </div>
  <div>
  <label htmlFor="gender"> select gender</label>
  <select  name="gender" id="gender"  onChange={onchangehandler}>
	<option defaultValue>Male</option>
	<option >Female</option>
	<option >other</option>
</select>
  </div>
  <div>
  <label htmlFor="phoneNumber">phoneNumber</label>
    <input type="tel" id="phoneNumber" name="phoneNumber" onChange={ onchangehandler}></input>
  </div>
  {error.phoneNumber&&  <p>{error.phoneNumber}</p>}
  <div>
    <label htmlFor="password">password</label>
    <input id="password" type="password"  name="password" onChange={ onchangehandler}></input>
  </div>
  {error.password&&  <p>{error.password}</p>}
  <div>
    <input type="submit"  value="submit"></input>
    
  </div>
  
</form>

</>


}
export default Form