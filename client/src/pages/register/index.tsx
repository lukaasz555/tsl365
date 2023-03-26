import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/logo.svg';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import Subheader from '@/components/shared/Subheader';

export default function Home() {
	return (
		<>
			<Head>
				<title>Rejestracja | TSL365</title>
				<meta
					name='description'
					content='TSL365 is an app for the Transport, Shipping and Logistics industry'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<main className='flex flex-col justify-center items-center min-h-screen'>
				<Link href={`/#`} className='mb-8'>
					<Image src={Logo} alt='TSL365 - logo' />
				</Link>
				<Subheader text='Rejestracja' />
				<RegisterForm />
			</main>
		</>
	);
}
