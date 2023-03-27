import React, { useState, useRef, useEffect } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import AltLink from '../shared/AltLink';
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';

const validateLogin = Yup.object({
	loginEmail: Yup.string()
		.email('Wprowadź poprawny e-mail')
		.required('E-mail jest wymagany'),
	loginPassword: Yup.string()
		.min(7, 'Hasło ma min. 7 znaków')
		.max(36, 'Hasło moze mieć maks. 36 znaków')
		.required('Hasło jest wymagane'),
});

const LoginForm = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const formik = useFormik({
		initialValues: {
			loginEmail: '',
			loginPassword: '',
		},
		validationSchema: validateLogin,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		formik.handleSubmit();
	};

	return (
		<form className='flex flex-col items-center' onSubmit={formik.handleSubmit}>
			<section className='flex flex-col gap-y-2 mb-6'>
				<Input
					onChange={formik.handleChange}
					value={formik.values.loginEmail}
					name='loginEmail'
					label='E-mail:'
					type='email'
					ref={inputRef}
				/>
				{formik.errors.loginEmail && formik.touched.loginEmail ? (
					<p className='text-error mb-2 w-full'>{formik.errors.loginEmail}</p>
				) : null}
				<Input
					onChange={formik.handleChange}
					value={formik.values.loginPassword}
					name='loginPassword'
					label='Hasło:'
					type='password'
				/>
				{formik.errors.loginPassword && formik.touched.loginPassword ? (
					<p className='text-error mb-2 w-full'>
						{formik.errors.loginPassword}
					</p>
				) : null}
			</section>
			<section className='flex flex-col items-center gap-y-3'>
				<Button onClick={handleClick} text='ZALOGUJ się' type='submit' />
				<AltLink
					disabled={false}
					text='Chcę stworzyć nowe konto'
					href='register'></AltLink>
			</section>
		</form>
	);
};

export default LoginForm;
