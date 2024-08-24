import React from "react";
import CustomNavbar from "./customerNavbar/CustomNavbar";



function Base({children}){
    return(

        <div>
            <CustomNavbar/>
            <div style={{marginTop:'3%'}}>
                {children}
            </div>
               
            <div >
            
            </div>

        </div>
    
    )

}

export default Base;