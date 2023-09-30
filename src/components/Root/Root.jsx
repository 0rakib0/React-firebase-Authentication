import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar";

const Root = () =>{
    return (
        <div className="w-3/4 mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
}

export default Root;