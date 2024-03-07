import './App.css'
import Description from './pages/description/description'
import Home from './pages/home/home'
import Contacts from './pages/contacts/contact'

function App() {


  return (
    <div className='main'>
      <Home/>
      <Description/>
      <Contacts/>
    </div>
  )
}

export default App
