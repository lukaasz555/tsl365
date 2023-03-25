import React from 'react';
import clsx from 'clsx';

type InputProps = {
	name: string;
	label: string;
	disabled?: boolean;
	type?: string;
};

// TODO:
// error styles + place for a error message?

const Input = ({ disabled, type = 'text', ...props }: InputProps) => {
	return (
		<div className='min-w-[200px] flex flex-col my-2'>
			<label
				htmlFor={props.name}
				className={clsx('font-poppins text-m', disabled && 'text-gray')}>
				{props.label}
			</label>
			<input
				name={props.name}
				id={props.name}
				disabled={disabled}
				type='text'
				className={clsx(
					'text-l border-2 border-solid px-2 py-1',
					disabled ? 'border-gray active:outline-none' : 'border-black'
				)}
			/>
		</div>
	);
};

export default Input;
