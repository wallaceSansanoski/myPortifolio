import './App.css'
import Description from './pages/description/description'
import Home from './pages/home/home'
import Contacts from './pages/contacts/contact'
import ScrolDownAndUp from './Components/scrolDownAndUp/ScrolDownAndUp'
import Project from './pages/projects/Project'

function App() {

  return (
    <div className='main'>
      <Home/>
      <Description/>
      <Project/>
      <Contacts/>
     <ScrolDownAndUp /> 
    </div>
  )
}

export default App
