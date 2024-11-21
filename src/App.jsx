import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Create from './CRUD/Create'
import View from './CRUD/View'
import Update from './CRUD/Update'
import './assets/CSS/style.css'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Create></Create>} />
          <Route path='/View' element={<View></View>} />
          <Route path='/update/:id' element={<Update></Update>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
