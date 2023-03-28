import React, { useEffect, useRef, useState } from 'react';
import Subheader from '../shared/Subheader';
import Input from '../shared/Input';
import Button from '../shared/Button';
import Link from 'next/link';
import Switch from '../shared/Switch';
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';
import FormErrorMessage from '../shared/FormErrorMessage';

// TODOs:
// form validations;
// request;

const validateRegister = Yup.object({
	registerName: Yup.string()
		.min(3, 'Imię powinno zawierać min. 3 znaki')
		.max(46, 'Wprowadzono zbyt wiele znaków')
		.required('Musisz podać imię'),
	registerLastname: Yup.string()
		.min(3, 'Nazwisko powinno zawierać min. 3 znaki')
		.max(46, 'Wprowadzono zbyt wiele znaków')
		.required('Musisz podać nazwisko'),
	registerEmail: Yup.string()
		.email('Wprowadź poprawny e-mail')
		.required('E-mail jest wymagany'),
	registerPassword: Yup.string()
		.min(7, 'Co najmniej 7 znaków')
		.max(46, 'Wprowadzono zbyt wiele znaków')
		.required('Musisz podać hasło'),
	registerConsent: Yup.boolean().oneOf([true], 'Musisz zaakceptować regulamin'),
});

const RegisterForm = () => {
	// const [isConsent, setConsent] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const formik = useFormik({
		initialValues: {
			registerName: '',
			registerLastname: '',
			registerEmail: '',
			registerPassword: '',
			registerConfirmPassword: '',
			registerConsent: false,
		},
		validationSchema: validateRegister,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	const {
		registerName,
		registerLastname,
		registerEmail,
		registerPassword,
		registerConfirmPassword,
	} = formik.values;

	function handleClick(e: React.MouseEvent): void {
		e.preventDefault();
		formik.handleSubmit();
	}

	return (
		<form
			className='min-w-[300px] max-w-[500px] px-4'
			onSubmit={formik.handleSubmit}>
			<section className='flex flex-col gap-y-3 md:flex-row gap-x-4'>
				<Input
					label='Imię:'
					name='registerName'
					value={registerName}
					ref={inputRef}
					onChange={formik.handleChange}
				/>
				{formik.errors.registerName && formik.touched.registerName ? (
					<FormErrorMessage text={formik.errors.registerName} />
				) : null}
				<Input
					label='Nazwisko:'
					name='registerLastname'
					value={formik.values.registerLastname}
					onChange={formik.handleChange}
				/>
				{formik.errors.registerLastname && formik.touched.registerLastname ? (
					<FormErrorMessage text={formik.errors.registerLastname} />
				) : null}
			</section>
			<section className='my-3'>
				<Input
					label='Adres e-mail:'
					name='registerEmail'
					value={registerEmail}
					onChange={formik.handleChange}
					type='email'
				/>
				{formik.errors.registerEmail && formik.touched.registerEmail ? (
					<FormErrorMessage text={formik.errors.registerEmail} />
				) : null}
			</section>
			<section className='flex flex-col gap-y-3  md:flex-row gap-x-4 w-full'>
				<Input
					label='Hasło:'
					name='registerPassword'
					value={registerPassword}
					onChange={formik.handleChange}
					type='password'
				/>
				{formik.errors.registerPassword && formik.touched.registerPassword ? (
					<FormErrorMessage text={formik.errors.registerPassword} />
				) : null}
				<Input
					label='Powtórz hasło:'
					name='registerConfirmPassword'
					value={registerConfirmPassword}
					onChange={formik.handleChange}
					type='password'
				/>
				{formik.values.registerPassword !==
				formik.values.registerConfirmPassword ? (
					<FormErrorMessage text='Hasła nie są takie same' />
				) : null}
			</section>
			<section className='flex mt-6 md:mt-4 items-center justify-center md:justify-start my-2'>
				<Switch
					onClick={() =>
						(formik.values.registerConsent = !formik.values.registerConsent)
					}
				/>{' '}
				<p className='ml-2'>
					Akceptuję{' '}
					<Link href={`/#`} className='text-accent hover:underline'>
						regulamin platformy
					</Link>
				</p>
				{formik.errors.registerConsent ? (
					<FormErrorMessage text={formik.errors.registerConsent} />
				) : null}
			</section>
			<p className='text-error text-center mb-2'>{errorMessage}</p>
			<section className='flex justify-center mt-4'>
				<Button onClick={handleClick} text='stwórz konto' type='submit' />
			</section>
		</form>
	);
};

export default RegisterForm;
