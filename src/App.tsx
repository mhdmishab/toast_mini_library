
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Router from './router/Router'

const App:React.FC = ()=> {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Router/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
