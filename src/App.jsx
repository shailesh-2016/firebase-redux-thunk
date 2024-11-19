import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Create from './CRUD/Create'
import View from './CRUD/View'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Create></Create>} />
          <Route path='/View' element={<View></View>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
