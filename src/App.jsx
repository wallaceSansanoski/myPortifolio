import './App.css'
// import Home from './pages/home/home'
// import Contacts from './pages/contacts/contact'
import ScrolDownAndUp from './Components/scrolDownAndUp/ScrolDownAndUp' 
// import Project from './pages/projects/Project'
// import About from './pages/about/about'
// import Stacks from './pages/stacks/stack'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleProject from './Components/singleProject/singleProject'
import { useContext, useEffect } from 'react'
import { ContextActiveLLink } from './Context/ContextActiveLink'
import Wrapper from './pages/wrapper/wrapper'

function App() {

  const { active } =  useContext(ContextActiveLLink)

  return (
    <div className='main'>
        { active ? <SingleProject/> : <Wrapper/>}
    </div>
  )
}

export default App
