import React from 'react';

type InputProps = {
	name: string;
	label: string;
};

const Input = (props: InputProps) => {
	return (
		<div className='min-w-[200px] flex flex-col my-2'>
			<label htmlFor={props.name} className='font-poppins text-m'>
				{props.label}
			</label>
			<input
				name={props.name}
				id={props.name}
				type='text'
				className='text-l border-2 border-solid border-black px-2 py-1 active:dashed-offset active:ring-offset-accent'
			/>
		</div>
	);
};

export default Input;
