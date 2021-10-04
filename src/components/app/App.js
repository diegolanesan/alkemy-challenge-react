import './App.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../home/Home'
import Login from '../login/Login'
import HeroDetail from '../heroDetail/HeroDetail'
import ProtectedRoute from '../ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/hero/:id" component={HeroDetail} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  )
}

export default App
