import React, { useState } from 'react';
import clsx from 'clsx';

type SwitchProps = {
	onClick: (e: React.MouseEvent) => void;
	text?: string;
};

const Switch = ({ onClick, text }: SwitchProps) => {
	const [isClicked, setClicked] = useState(false);

	function handleClick(e: React.MouseEvent): void {
		setClicked(!isClicked);
		// function from parent component...
	}

	return (
		<div className='flex gap-x-5 items-center'>
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
