import React, { useState } from 'react';
import clsx from 'clsx';
import FormErrorMessage from './FormErrorMessage';

type SwitchProps = {
	onClick: () => void;
	text?: string;
	error?: string;
};

const Switch = ({ onClick, text, error }: SwitchProps) => {
	const [isClicked, setClicked] = useState(false);

	function handleClick(e: React.MouseEvent): void {
		e.preventDefault();
		setClicked(!isClicked);
		onClick();
	}

	return (
		<div className={clsx('flex items-start ', text ? 'gap-x-5' : '')}>
			<p className='font-poppins'>{text}</p>
			<button
				className={clsx(
					'w-[40px] h-[20px] rounded-max transition-colors duration-150 shadow-default relative  before:absolute before:content-[""]  before:-top-[2px] before:bottom-0 before:h-[24px] before:w-[24px]  before:bg-white before:rounded-max before:-left-[2px] before:duration-150',
					isClicked ? 'before:translate-x-[20px] bg-accent' : 'bg-gray'
				)}
				onClick={handleClick}></button>
		</div>
	);
};

export default Switch;
