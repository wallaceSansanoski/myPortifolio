import './App.css'
import Description from './pages/description/description'
import Home from './pages/home/home'
import Contacts from './pages/contacts/contact'
import ScrolDownAndUp from './Components/scrolDownAndUp/ScrolDownAndUp'
import Project from './pages/projects/Project'
import About from './pages/about/about'
import Stacks from './pages/stacks/stack'

function App() {

  return (
    <div className='main'>
      <Home/>
      <About/>
      <Stacks/>
      <Project/>
      <Contacts/>
     <ScrolDownAndUp /> 
    </div>
  )
}

export default App
