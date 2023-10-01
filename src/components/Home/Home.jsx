import { useContext } from "react"
import { Authcontext } from "../../AuthContext/AuthContext"


const Home = () =>{
    const contextValue = useContext(Authcontext)
    console.log(contextValue)
    return (
        <div>
            <h3>This is Home Page</h3>
        </div>
    )
}

export default Home