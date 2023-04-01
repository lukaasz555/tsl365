import React, { ReactNode } from 'react';
import Header from '@/components/UI/Header';

type Props = {
	children?: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default Layout;
