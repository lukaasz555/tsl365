import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/logo.svg';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import AltLink from '@/components/shared/AltLink';

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
				<Image alt='TSL365 - logo' src={Logo} />
				<Input name='login' label='Login:' />
				<Input name='email' label='E-mail:' />
				<Button onClick={() => console.log('works')} text='ZALOGUJ się' />
				<AltLink
					disabled={true}
					text='Chcę stworzyć nowe konto'
					href='/#'></AltLink>
			</main>
		</>
	);
}
