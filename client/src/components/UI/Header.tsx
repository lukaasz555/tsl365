import React from 'react';
import Logo from '../../assets/logo_white.svg';
import Image from 'next/image';
import Link from 'next/link';
import hamburgerIcon from '../../assets/hamburger.svg';

const Header = () => {
	return (
		<header className='bg-accent min-h-[80px] shadow-default flex justify-between items-center px-4'>
			<div>
				<Link href={`/#`}>
					<Image src={Logo} alt='TSL365 logo' />
				</Link>
			</div>
			<div>
				<button className='lg:hidden items-center'>
					<Image src={hamburgerIcon} alt='open menu' />
				</button>
				<nav className='hidden lg:flex gap-x-8 font-montserrat font-thin uppercase text-white text-l '>
					<Link href={`/#`}>start</Link>
					<Link href={`/#`}>zlecenia</Link>
					<Link href={`/#`}>kierowcy</Link>
					<Link href={`/#`}>firmy</Link>
					<Link href={`/#`}>moje konto</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
