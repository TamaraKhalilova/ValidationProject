import React from 'react';

import { useUserForm } from './useUserForm';
import './user-form.css';

export const UserForm = () => {
	const {
		onChange,
		onBlur,
		onSubmit,
		errors
	} = useUserForm();

  return (
    <div className='wrapper'>
			<header>
				<h1>Form</h1>
			</header>
			<hr/>
			<main>
				<div className='field-box'>
					<span>Please enter your firstname </span>
					<input onChange={onChange} onBlur={onBlur} type='text' name='firstname'/>
					{errors.firstname && <span className='error-box'>Please fill current field</span>}
				</div>
				<div className='field-box'>
					<span>Please enter your lastname </span>
					<input onChange={onChange} onBlur={onBlur} type='text' name='lastname'/>
					{errors.lastname && <span className='error-box'>Please fill current field</span>}
				</div>
				<div className='field-box'>
					<span>Please enter your email </span>
					<input onChange={onChange} onBlur={onBlur} type='email' name='email'/>
					{errors.email && <span className='error-box'>Please enter correct email</span>}
				</div>
				<div className='field-box'>
					<span>Please enter your message </span>
					<textarea onChange={onChange} onBlur={onBlur} name='message'/>
					{errors.message && <span className='error-box'>Message can not be shorter than 10 characters</span>}
				</div>
			</main>
			<footer>
				<button disabled={Object.values(errors).find(item => item)} onClick={onSubmit}>Submit</button>
			</footer>
		</div>
  )
};
