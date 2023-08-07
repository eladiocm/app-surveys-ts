import { Link } from 'react-router-dom'

function HomePage (): JSX.Element {
  return (
    <div className='homePage'>
      <h1>Home Page</h1>
      <nav className='navAuth'>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>

    </div>
  )
}

export default HomePage
