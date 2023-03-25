import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type AltLinkProps = {
	href: string;
	text: string;
	disabled?: boolean;
};

const AltLink = ({ href, text, disabled }: AltLinkProps) => {
	return (
		<Link
			href={`/${href}`}
			className={clsx(
				'text-center relative after:absolute after:content-[""] after:w-full after:h-[1px] after:left-0 after:bottom-0',
				disabled
					? 'text-gray cursor-default pointer-events-none after:bg-gray'
					: 'text-black after:bg-black hover:text-accent hover:after:bg-accent focus:text-accent focus:after:bg-accent'
			)}>
			{text}
		</Link>
	);
};

export default AltLink;
