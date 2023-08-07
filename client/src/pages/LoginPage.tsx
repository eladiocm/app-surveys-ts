/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type Auth } from '../interfaces/auth.interface'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage (): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<Auth>()
  const navigate = useNavigate()

  const { singIn, errors: errorsLogin, isAuthenticated } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (isAuthenticated && token !== null) navigate('/surveys')
  }, [isAuthenticated])

  const handleOnSubmit: SubmitHandler<Auth> = async (values) => {
    console.log(values)
    const { email, password } = values
    const userValues: Auth = {
      email,
      password
    }
    await singIn(userValues)
  }

  return (
    <div className='containerLogin'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleOnSubmit)} className='formLogin'>
        {errorsLogin && <p className='textError'>{errorsLogin}</p>}
        <input type="email" placeholder="Email" {...register('email', { required: true })} />
        {errors.email && <p className='textError'>Email is required</p>}
        <input type="password" placeholder="Password" {...register('password', { required: true })} />
        {errors.password && <p className='textError'>Password is required</p>}
        <button type="submit">Login</button>
      </form>
      <div>
        <p>
          Don`t have an account?{' '}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
