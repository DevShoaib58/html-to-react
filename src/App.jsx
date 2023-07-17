
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Navigation from './Component/Navigation'
import UseState from './Component/Hooks/UseState'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/hook' element={< UseState />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
