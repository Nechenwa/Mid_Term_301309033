import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpUser = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
         <h1>React Hook Form</h1>
      <div>
        <input {...register('firstName', { required: true })} placeholder="First Name" />
        {errors.firstName && <span>This field is required</span>}
      </div>
      <div>
        <input {...register('lastName', { required: true })} placeholder="Last Name" />
        {errors.lastName && <span>This field is required</span>}
      </div>
      <div>
        <input {...register('userName', { required: true })} placeholder="User Name" />
        {errors.userName && <span>This field is required</span>}
      </div>
      <div>
        <input {...register('email', {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        })} placeholder="Email" />
        {errors.email && <span>Enter a valid email</span>}
      </div>
      <div>
        <input {...register('password', { required: true })} type="password" placeholder="Password" />
        {errors.password && <span>This field is required</span>}
      </div>
      <div>
        <input {...register('confirmPassword', {
          required: true,
          validate: value => value === password || "Passwords do not match"
        })} type="password" placeholder="Confirm Password" />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpUser;
