import React, { useState } from "react";
// import {ref,push,child,update} from "firebase/database";


function Form ({title, setPassword, setEmail, handleAction }){


   
   


    return(


    <div>
        <h3>{title} Form</h3>
 <form >
          
          <input id="email"                   
          onChange={(e) => setEmail(e.target.value)}
          type="email"
           placeholder='email' />
          <input id="password" 
           onChange={(e) => setPassword(e.target.value)} 
           type="password" 
           placeholder='password'  />
          <button   type='submit' onClick={handleAction}>{title}</button>

        </form>
    </div>
)


}
export default Form;