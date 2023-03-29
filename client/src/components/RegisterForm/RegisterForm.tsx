import React, { useEffect, useRef, useState } from 'react';
import Subheader from '../shared/Subheader';
import Input from '../shared/Input';
import Button from '../shared/Button';
import Link from 'next/link';
import Switch from '../shared/Switch';
import { useFormik } from 'formik';
import FormErrorMessage from '../shared/FormErrorMessage';
import { validateRegister } from '@/helpers/validations/RegisterForm';

const RegisterForm = () => {
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
					value={formik.values.registerName}
					ref={inputRef}
					onChange={formik.handleChange}
					error={formik.errors.registerName}
				/>

				<Input
					label='Nazwisko:'
					name='registerLastname'
					value={formik.values.registerLastname}
					onChange={formik.handleChange}
					error={formik.errors.registerLastname}
				/>
			</section>
			<section className='my-3'>
				<Input
					label='Adres e-mail:'
					name='registerEmail'
					value={formik.values.registerEmail}
					onChange={formik.handleChange}
					type='email'
					error={formik.errors.registerEmail}
				/>
			</section>
			<section className='flex flex-col gap-y-3  md:flex-row gap-x-4 w-full'>
				<Input
					label='Hasło:'
					name='registerPassword'
					value={formik.values.registerPassword}
					onChange={formik.handleChange}
					type='password'
					error={formik.errors.registerPassword}
				/>

				<Input
					label='Powtórz hasło:'
					name='registerConfirmPassword'
					value={formik.values.registerConfirmPassword}
					onChange={formik.handleChange}
					type='password'
					error={formik.errors.registerPassword}
				/>
			</section>
			<section className='flex mt-6 md:mt-4 flex-col items-center justify-center md:justify-start my-2'>
				<div className='flex items-center justify-center md:justify-start my-2'>
					<Switch
						error={formik.errors.registerConsent}
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
				</div>
				<div>
					{formik.errors.registerConsent ? (
						<FormErrorMessage text={formik.errors.registerConsent} />
					) : null}
				</div>
			</section>
			<p className='text-error text-center mb-2'>{errorMessage}</p>
			<section className='flex justify-center mt-4'>
				<Button onClick={handleClick} text='stwórz konto' type='submit' />
			</section>
		</form>
	);
};

export default RegisterForm;
