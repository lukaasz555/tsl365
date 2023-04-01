import React from 'react';
import Decorator from '../../assets/decorators.svg';
import Image from 'next/image';
import Link from 'next/link';
import closeIcon from '../../assets/closeIcon.svg';
import clsx from 'clsx';

type SidenavProps = {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidenav = ({ isOpen, setOpen }: SidenavProps) => {
	console.log(isOpen);
	return (
		<aside
			className={clsx(
				'absolute right-0 top-0 bottom-0 min-h-screen w-[300px] bg-white shadow-default lg:hidden border-b-4 border-b-accent',
				isOpen ? 'scale-x-100' : 'scale-x-0'
			)}>
			<div className='relative'>
				<div className='px-4 pt-6 flex justify-end'>
					<button onClick={() => setOpen(!isOpen)}>
						<Image src={closeIcon} alt='close menu' />
					</button>
				</div>
				<div className='absolute right-0 top-[200%]'>
					<Image src={Decorator} alt='' />
				</div>
				<nav
					className='absolute w-full flex flex-col items-end px-4 gap-y-2 font-montserrat font-thin uppercase text-black text-l mt-[150px]
                '>
					<Link href={`/#`} className='hover:text-accent'>
						start
					</Link>
					<Link href={`/#`} className='hover:text-accent'>
						zlecenia
					</Link>
					<Link href={`/#`} className='hover:text-accent'>
						kierowcy
					</Link>
					<Link href={`/#`} className='hover:text-accent'>
						firmy
					</Link>
					<Link href={`/#`} className='hover:text-accent'>
						moje konto
					</Link>
				</nav>
			</div>
		</aside>
	);
};

export default Sidenav;
