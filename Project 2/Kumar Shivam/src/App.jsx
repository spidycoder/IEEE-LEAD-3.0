
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Footer1 from './components/footer'
import Header from './components/Header'
import HomePage from './components/HomePage'
import MoviePage from './components/MoviePage'


function App() {
  

  return (
    <BrowserRouter>
      
      <Routes>
      
      
      <Route path="/"  element={<HomePage/>}/>
      <Route path="/:id" element={<MoviePage/>}/>
      
      </Routes>
      
      
      </BrowserRouter>
  )
}

export default App
