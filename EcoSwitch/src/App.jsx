import { useState } from 'react'

import { NavBar} from './components/NavBar/NavBar'


//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  

  return (
    
      <div>
        <NavBar />
        <ItemListContainer  greeting= {"saludos"} />
     </div>
    
  )
}

export default App
