import React, { forwardRef } from 'react';
import clsx from 'clsx';

type InputProps = {
	name: string;
	label: string;
	disabled?: boolean;
	type?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ disabled, type = 'text', ...props }, ref) => {
		return (
			<div className='min-w-[200px] flex flex-col'>
				<label
					htmlFor={props.name}
					className={clsx('font-poppins text-m', disabled && 'text-gray')}>
					{props.label}
				</label>
				<input
					ref={ref}
					name={props.name}
					id={props.name}
					disabled={disabled}
					value={props.value}
					onChange={props.onChange}
					type={type}
					className={clsx(
						'text-l border-[1px] border-solid px-2 py-1',
						disabled ? 'border-gray active:outline-none' : 'border-black'
					)}
				/>
			</div>
		);
	}
);
Input.displayName = 'Input';
export default Input;
