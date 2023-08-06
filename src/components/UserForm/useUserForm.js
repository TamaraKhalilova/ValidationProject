import { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';

import { setFirstName, setLastname, setEmail, setMessage } from '../../store/actions';

export const useUserForm = () => {
    const dispatch = useDispatch();
	const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });
	const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

	const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
		setErrors({ ...errors, [name]: false });
  };

	const validateEmail = (email) => validator.isEmail(email);

	const onBlur = (event) => {
    const { name, value } = event.target;
		if (name === 'email') {
			!validateEmail(value) && setErrors({ ...errors, [name]: true });
		} else if (name === 'message') {
			value.length < 10 && setErrors({ ...errors, [name]: true });
		} else {
      !value && setErrors({ ...errors, [name]: true });
    }
  };

	const onSubmit = () => {
		dispatch(setFirstName(values.firstname));
		dispatch(setLastname(values.lastname));
		dispatch(setEmail(values.email));
		dispatch(setMessage(values.message));
		alert('Data was successfully recorded!')
	}

    return {
        onChange,
        onBlur,
        onSubmit,
        errors
    }
}
