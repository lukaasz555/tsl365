import React from 'react';

type ButtonProps = {
	text: string;
	disabled?: boolean;
	onClick: (e: any) => void;
};

const Button = ({ disabled, text, onClick }: ButtonProps) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className='font-poppins lowercase bg-accent 
			hover:bg-accentHover active:bg-accentHover focus:bg-accentHover 
			disabled:bg-gray disabled:text-[#FCF7F8] 
			transition-colors duration-150	px-2 py-1 min-w-[200px] min-h-[46px] rounded-s 
			text-white relative 
			after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-none after:shadow-default after:opacity-0 after:hover:opacity-100 after:duration-150 after:rounded-s '>
			{text}
		</button>
	);
};

export default Button;
