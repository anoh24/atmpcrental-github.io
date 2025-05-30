import React from "react";
import CustomerAdminAccountNavbar from "../../components/customerAdminAccountBar/customerAdminAccountNavbar";

const CustomerAdminAccountNavbarLayout = ({children}) =>{
    return(
        <>  
            <div className="flex flex-1">
                <CustomerAdminAccountNavbar/>
                <main className="flex-1 bg-gray-500">
                    {children}
                </main>
            </div>
        </> 
         

          
    )

}
export default CustomerAdminAccountNavbarLayout;