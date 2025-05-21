import BranchAdminBar from "../../components/branchAdminBar/branchAdminNavbar";

const BranchAdminLayout = ({childern}) => {
    return(
        <>
            <div className="flex flex-1 overflow-hidden">
                <BranchAdminBar/>
                <main className="flex-1 overflow-auto bg-gray-700 p-4"></main>
            </div>

        </>
    )
}
export default BranchAdminLayout;