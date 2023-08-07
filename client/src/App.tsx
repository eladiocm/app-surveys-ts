import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import { AuthProvider } from './context/AuthContext'
import SurveysPage from './pages/SurveysPage'
import ProtectedRouter from './components/ProtectedRouter'

function App (): JSX.Element {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route element={<ProtectedRouter/>}>
            <Route path='/surveys' element={<SurveysPage />} />

            <Route path='/profile' element={<div>Profile</div>} />
          </Route>

          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
