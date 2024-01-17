import './app.css'

// 2 - reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'

// 4 - navegando entre paginas
import Navbar from './components/Navbar' 

export function App() {
  return (
    <>
    <Navbar />
     <h1>React Router</h1>
     <Outlet />
     <footer></footer>
    </>
  )
}
