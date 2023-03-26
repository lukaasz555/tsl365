import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Logo from '../assets/logo.svg';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Head>
				<title>TSL365</title>
				<meta
					name='description'
					content='TSL365 is an app for the Transport, Shipping and Logistics industry'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<main className='flex flex-col justify-center items-center min-h-screen'>
				<Link href={`/#`}>
					<Image src={Logo} alt='TSL365 logo' />
				</Link>
			</main>
		</>
	);
}
