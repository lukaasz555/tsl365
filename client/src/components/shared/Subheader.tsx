import React from 'react';

type SubheaderProps = {
	text: string;
};

const Subheader = ({ text }: SubheaderProps) => {
	return (
		<h2 className='mb-6 font-montserrat text-xl font-semibold relative after:content-[""] after:absolute after:-right-[5%] after:bottom-1 after:bg-accent after:h-[2px] after:w-[90%] after:-z-10'>
			{text}
		</h2>
	);
};

export default Subheader;
