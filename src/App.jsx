import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Landing } from './Pages/Landing'
import { Products } from './Pages/Products'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/products' element={<Products />} />
    </Routes>
    </>
  )
}

export default App
