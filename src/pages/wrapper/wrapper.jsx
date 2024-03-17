import About from "../about/about"
import Contacts from "../contacts/contact"
import Project from "../projects/Project"
import Stacks from "../stacks/stack"
import Home from "../home/home"
import ScrolDownAndUp from "../../Components/scrolDownAndUp/ScrolDownAndUp"

const  Wrapper = () => {
    return (
        <>
            <Home/>
            <About />
            <Stacks />
            <Project />
            <Contacts />
            <ScrolDownAndUp/>
        </>
    )
}

export default Wrapper;