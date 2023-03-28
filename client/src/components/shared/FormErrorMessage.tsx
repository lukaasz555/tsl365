import React from 'react';

type Props = {
	text: string;
};

const FormErrorMessage = ({ text }: Props) => {
	return <p className='text-error mb-2 w-full'>{text}</p>;
};

export default FormErrorMessage;
