import About from "../about/about"
import Contacts from "../contacts/contact"
import Project from "../projects/Project"
import Stacks from "../stacks/stack"
import Home from "../home/home"

const  Wrapper = () => {
    return (
        <>
            <Home/>
            <About />
            <Stacks />
            <Project />
            <Contacts />
        </>
    )
}

export default Wrapper;