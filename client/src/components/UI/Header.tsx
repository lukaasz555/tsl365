import React, { useState } from 'react';
import Logo from '../../assets/logo_white.svg';
import Image from 'next/image';
import Link from 'next/link';
import hamburgerIcon from '../../assets/hamburger.svg';
import Sidenav from './Sidenav';
const Header = () => {
	const [isOpen, setOpen] = useState(false);
	const handleNav = () => setOpen(!isOpen);
	return (
		<>
			<header className='bg-accent min-h-[80px] shadow-default flex justify-between items-center px-4'>
				<div>
					<Link href={`/#`}>
						<Image src={Logo} alt='TSL365 logo' />
					</Link>
				</div>
				<div>
					<button className='lg:hidden items-center' onClick={handleNav}>
						<Image src={hamburgerIcon} alt='open menu' />
					</button>
					<nav className='hidden lg:flex gap-x-8 font-montserrat font-thin uppercase text-white text-l '>
						<Link href={`/#`} className='hover:underline underline-offset-4'>
							start
						</Link>
						<Link href={`/#`} className='hover:underline underline-offset-4'>
							zlecenia
						</Link>
						<Link href={`/#`} className='hover:underline underline-offset-4'>
							kierowcy
						</Link>
						<Link href={`/#`} className='hover:underline underline-offset-4'>
							firmy
						</Link>
						<Link href={`/#`} className='hover:underline underline-offset-4'>
							moje konto
						</Link>
					</nav>
				</div>
			</header>
			<Sidenav isOpen={isOpen} setOpen={setOpen} />
		</>
	);
};

export default Header;
