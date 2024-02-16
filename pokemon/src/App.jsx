import { Routes, Route } from 'react-router-dom'
import Pokemones from './views/Pokemones'
import Home from './views/Home'
import Navbar from './components/Navbar'
import PokeProvider from './context/PokeContext'
import Detalle from './views/Detalle'

function App() {


  return (
    <>
      <Navbar />
      <PokeProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemones' element={<Pokemones />} />
          <Route path='/pokemones/:name' element={<Detalle/>} />
        </Routes>
      </PokeProvider>
    </>
  )
}

export default App;