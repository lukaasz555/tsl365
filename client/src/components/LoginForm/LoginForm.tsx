import React, { useState, useRef, useEffect } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import AltLink from '../shared/AltLink';
import Subheader from '../shared/Subheader';

// TODO:
// email validation;
// sending request;

const LoginForm = () => {
	const [form, setForm] = useState({
		loginEmail: '',
		loginPassword: '',
	});
	const [errorMessage, setErrorMessage] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	function handleFormChanges(e: React.ChangeEvent<HTMLInputElement>): void {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	function handleClick(e: React.MouseEvent): void {
		e.preventDefault();
		const { loginEmail: login, loginPassword: pw } = form;

		if (login.trim() !== '' && pw.trim() !== '') {
			console.log(form);
			setErrorMessage('');
		} else {
			setErrorMessage('Musisz podać dane do logowania');
		}
	}

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<form className='flex flex-col items-center'>
			<section className='flex flex-col gap-y-2 mb-6'>
				<Input
					onChange={handleFormChanges}
					value={form.loginEmail}
					name='loginEmail'
					label='E-mail:'
					type='email'
					ref={inputRef}
				/>
				<Input
					onChange={handleFormChanges}
					value={form.loginPassword}
					name='loginPassword'
					label='Hasło:'
					type='password'
				/>
			</section>
			<section className='flex flex-col items-center gap-y-3'>
				<p className='text-error text-center -mb-2'>{errorMessage}</p>
				<Button onClick={handleClick} text='ZALOGUJ się' />
				<AltLink
					disabled={false}
					text='Chcę stworzyć nowe konto'
					href='/register'></AltLink>
			</section>
		</form>
	);
};

export default LoginForm;
