import React from "react";
import CustomerAdminAccountNavbar from "../../components/customerAdminAccountBar/customerAdminAccountNavbar";

const CustomerAdminAccountNavbarLayout = ({children}) =>{
    return(
        <>  
            <div className="flex flex-1 min-h-screen">
                <CustomerAdminAccountNavbar/>
                <main className=" flex-1 bg-gray-100">
                    {children}
                </main>
            </div>
        </> 
         

          
    )

}
export default CustomerAdminAccountNavbarLayout;