import './App.css'
import Description from './pages/description/description'
import Home from './pages/home/home'
import Contacts from './pages/contacts/contact'
import ScrolDownAndUp from './Components/scrolDownAndUp/ScrolDownAndUp'
import { useRef, useContext } from 'react'
import { ContextScrool } from './Context/ContextScrool'

function App() {

  const { scrool } = useContext(ContextScrool)

  return (
    <div className='main'>
      <Home/>
      <Description/>
      <Contacts/>
     {/* {!scrool ?  <ScrolDownAndUp /> : null} */}
     <ScrolDownAndUp /> 
    </div>
  )
}

export default App
