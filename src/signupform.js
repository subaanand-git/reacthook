import React from "react";
import { useForm } from 'react-hook-form';

const Signup = ()=>{

   //  ---------- Java Script Code ----------- //

 const {register,handleSubmit,formState: { errors}} = useForm();
 const { reset } = useForm();
 const onSubmit = (data) => {
   document.write("<h1>Form submitted successfully</h1><br/> It's just for testing purpose,your data saved in console of the browser")
   console.log(data)
 };
return(

   // ------------- Main Content ------------ //

    <div className="container-fluid bg-primary" id="main">
         <div className="container bg-white position-absolute top-50 start-50 translate-middle p-5" id="subdiv"> 
     <form onSubmit={handleSubmit(onSubmit)} method="post" action="/success">
         <h1>Sign Up</h1>
         <p>Please fill in this form to create an account</p>        
         <div className="row g-3">
      {/* ---------- First name input field ---------*/}
            <div className="col-lg-6">
            <input type="text" name="firstname" {...register("firstname" , {required:true , pattern:/^([a-zA-Z ]){1,30}$/})} className="form-control" placeholder="First name"></input>
            {errors.firstname?.type === "required" && (<p className="errorMsg" style={{color:"red"}}>First name is required.</p>)}
            {errors.firstname?.type === "pattern" && (<p className="errorMsg" style={{color:"red"}}>Name should be letters.</p>)}
         </div>
      {/* ---------- Last name input field----------- */}
         <div className="col-lg-6">
            <input type="text"  name="lastname" {...register("lastname" , {required:true ,  pattern:/^([a-zA-Z ]){1,30}$/})} className="form-control" placeholder="Last name" ></input>
            {errors.lastname?.type === "required" && (<p className="errorMsg" style={{color:"red"}}>Last name is required</p>)}
            {errors.lastname?.type === "pattern" && (<p className="errorMsg" style={{color:"red"}}>Name should be letters.</p>)}
         </div>
         </div>
      {/* ---------- Phone number input field----------- */}
         <input type="text" name="phonenumber"  {...register("phonenumber" , {required:true ,
           validate: {
            checkLength: (value) =>value.length == 10,
            matchPattern: (value) => /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/.test(value)
         }})} className="form-control mt-3" placeholder="Phone number"></input>
         {errors.phonenumber?.type === "required" && (<p className="errorMsg" style={{color:"red"}}>Phone number is required.</p>)}
         {errors.phonenumber?.type === "checkLength" && (<p className="errorMsg" style={{color:"red"}}>Phone number should be 10 digits.</p>)}
         {errors.phonenumber?.type === "matchPattern" && (<p className="errorMsg" style={{color:"red"}}>Phone number should be numbers</p>)}
      {/* ---------- Email input field----------- */}
         <input type="text" name="email"  {...register("email" , {required:"Email is required." , 
         pattern: { value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,message:"Email is not valid"}})}   className="form-control mt-3" placeholder="Email"  ></input>
         {errors.email && <p className="errorMsg" style={{color:"red"}}>{errors.email.message}</p>}
      {/* ---------- Password input field----------- */}   
        <input type="password"  name="password"  {...register("password" ,{required:true , 
         validate: {
            checkLength: (value) =>value.length >= 6,
            matchPattern: (value) =>/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
         }})} className="form-control mt-3" placeholder="Password"  ></input>
         {errors.password?.type === "required" && (<p className="errorMsg" style={{color:"red"}}>Password is required.</p>)}
         {errors.password?.type === "checkLength" && (<p className="errorMsg" style={{color:"red"}}>Password should be at-least 6 characters.</p>)}
         {errors.password?.type === "matchPattern" && (<p className="errorMsg" style={{color:"red"}}>Password should contain at least one uppercase letter, lowercase
            letter, digit, and special symbol</p>)}
      {/* ---------- Sign-Up Button----------- */}
        <div className="col-12 mb-3" >
          <button className="btn btn-success btn-lg mt-3" type="submit">Sign Up</button>
        </div>
     </form>
         </div>
    </div>
    );
}
export default Signup;