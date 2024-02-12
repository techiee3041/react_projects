import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './App.css'
import styled from 'styled-components'

const Error = styled.p`
  color: red;`

function App() {
  const schema = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().min(18).integer().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match!').required(), // referencing the password
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='full name' {...register('fullname')} />
      <Error>{errors.fullname?.message}</Error>
      <input type="email" placeholder='Email' {...register('email')} />
      <Error>{errors.email?.message}</Error>
      <input type="number" placeholder='age' {...register('age')} />
      <Error>{errors.age?.message}</Error>
      <input type="password" placeholder='Password' {...register('password')} />
      <Error>{errors.password?.message}</Error>
      <input type="password" placeholder='Confirm Password' {...register('confirmPassword')} />
      <Error>{errors.confirmPassword?.message}</Error>
      <input type="submit" />
    </form>
    </>
  )
}

export default App
