import { type SubmitHandler, useForm } from 'react-hook-form'
import { registerRequest } from '../services/auth'
import { type User } from '../interfaces/user.interface'

function RegisterPage (): JSX.Element {
  const { register, handleSubmit } = useForm<User>()

  const handleOnSubmit: SubmitHandler<User> = async (values) => {
    console.log(values)
    const { username, email, password } = values
    const userValues: User = {
      username,
      email,
      password
    }
    const res = await registerRequest(userValues)
    console.log(res)
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <input type="text" placeholder="Username" {... register('username', { required: true })}/>
        <input type="email" placeholder="Email" {... register('email', { required: true })} />
        <input type="password" placeholder="Password" {... register('password', { required: true })} />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
