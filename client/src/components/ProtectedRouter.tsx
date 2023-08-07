import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRouter () {
  if (!localStorage.getItem('token')) return <Navigate to='/login' replace />
  return (
    <Outlet/>
  )
}

export default ProtectedRouter
