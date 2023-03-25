import React from 'react';
import Link from 'next/link';

type AltLinkProps = {
	href: string;
	text: string;
	disabled?: boolean;
};

const AltLink = ({ href, text, disabled }: AltLinkProps) => {
	return (
		<Link
			href={`/${href}`}
			className={
				disabled
					? `
					text-gray relative
					  after:absolute after:content-[""] after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-gray cursor-default pointer-events-none	
					  `
					: `
					  text-black relative 
					  after:absolute after:content-[""] after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-black hover:text-accent hover:after:bg-accent
					  focus:text-accent focus:after:bg-accent
					  `
			}>
			{text}
		</Link>
	);
};

export default AltLink;
