import React, { useEffect, useRef, useState } from 'react';
import Subheader from '../shared/Subheader';
import Input from '../shared/Input';
import Button from '../shared/Button';
import Link from 'next/link';
import Switch from '../shared/Switch';

// TODOs:
// form validations;
// request;

const RegisterForm = () => {
	const [form, setForm] = useState({
		registerName: '',
		registerLastname: '',
		registerEmail: '',
		registerPassword: '',
		registerConfirmPassword: '',
		registerConsent: false,
	});
	const [errorMessage, setErrorMessage] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	function handleConsent(): void {
		setForm((prev) => ({ ...prev, registerConsent: !prev.registerConsent }));
	}

	function handleClick(e: React.MouseEvent): void {
		e.preventDefault();
		if (!form.registerConsent) {
			setErrorMessage('Aby utworzyć konto musisz zaakceptować regulamin');
		} else {
			setErrorMessage('');
			// validation forms;
		}
	}

	return (
		<form className='min-w-[300px] max-w-[500px] px-4'>
			<section className='flex flex-col gap-y-3 md:flex-row gap-x-4'>
				<Input
					label='Imię:'
					name='registerName'
					value=''
					ref={inputRef}
					onChange={() => {}}
				/>
				<Input
					label='Nazwisko:'
					name='registerLastname'
					value=''
					onChange={() => {}}
				/>
			</section>
			<section className='my-3'>
				<Input
					label='Adres e-mail:'
					name='registerEmail'
					value=''
					onChange={() => {}}
					type='email'
				/>
			</section>
			<section className='flex flex-col gap-y-3  md:flex-row gap-x-4 w-full'>
				<Input
					label='Hasło:'
					name='registerPassword'
					value=''
					onChange={() => {}}
					type='password'
				/>
				<Input
					label='Powtórz hasło:'
					name='registerConfirmPassword'
					value=''
					onChange={() => {}}
					type='password'
				/>
			</section>
			<section className='flex mt-6 md:mt-4 items-center justify-center md:justify-start my-2'>
				<Switch onClick={() => handleConsent()} />{' '}
				<p className='ml-2'>
					Akceptuję{' '}
					<Link href={`/#`} className='text-accent hover:underline'>
						regulamin platformy
					</Link>
				</p>
			</section>
			<p className='text-error text-center mb-2'>{errorMessage}</p>
			<section className='flex justify-center mt-4'>
				<Button onClick={handleClick} text='stwórz konto' />
			</section>
		</form>
	);
};

export default RegisterForm;
