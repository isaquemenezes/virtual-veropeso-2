import React from 'react';
import { NavLink  } from "react-router-dom";
 
function Help(){
    return (
        <><div>
            <h1>Hello Page Help</h1>    
            <NavLink to="/about"  className='text-xl py-4 flex cursor-pointer' > About</NavLink>       
        </div></>
        
    )   
}
 
export default Help;