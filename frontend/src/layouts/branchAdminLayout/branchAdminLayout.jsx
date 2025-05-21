import React from "react";
import BranchAdminBar from "../../components/branchAdminBar/branchAdminNavbar";

const BranchAdminLayout = ({children}) => {
    return(
        <>
            <div className="flex flex-1">
                <BranchAdminBar/>
                <main className="flex-1 bg-gray-100">
                    {children}
                </main>
            </div>

        </>
    )
}
export default BranchAdminLayout;