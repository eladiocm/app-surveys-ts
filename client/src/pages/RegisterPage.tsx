/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { registerRequest } from '../services/auth'
import { type User } from '../interfaces/user.interface'
import { useNavigate } from 'react-router-dom'

function RegisterPage (): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<User>()
  const [errorsRegister, setErrorsRegister] = useState(null)

  const navigate = useNavigate()

  const handleOnSubmit: SubmitHandler<User> = async (values) => {
    console.log(values)
    const { username, email, password } = values
    const userValues: User = {
      username,
      email,
      password
    }
    await registerRequest(userValues).then((res) => {
      console.log(res)
      if (res.data?.email) {
        navigate('/login')
      } else {
        const err = res.data
        setErrorsRegister(err)
      }
    })
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        {errorsRegister && <p>{errorsRegister}</p>}
        <input type="text" placeholder="Username" {...register('username', { required: true })}/>
        {errors.username && <p>Username is required</p>}
        <input type="email" placeholder="Email" {...register('email', { required: true })} />
        {errors.email && <p>Email is required</p>}
        <input type="password" placeholder="Password" {...register('password', { required: true })} />
        {errors.password && <p>Password is required</p>}
        <button type="submit">Register</button>
      </form>
      <div>
        <p>
          Already have an account?
          <a href="/login">Login</a>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
