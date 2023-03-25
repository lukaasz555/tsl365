import Head from 'next/head';
import Image from 'next/image';
import Logo from '../../assets/logo.svg';
import LoginForm from '@/components/LoginForm/LoginForm';
import Subheader from '@/components/shared/Subheader';

export default function Home() {
	return (
		<>
			<Head>
				<title>Zaloguj się do TSL365</title>
				<meta
					name='description'
					content='TSL365 is an app for the Transport, Shipping and Logistics industry'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<main className='flex flex-col justify-center items-center min-h-screen'>
				<Image className='mb-8' alt='TSL365 - logo' src={Logo} />
				<section className='shadow-default min-w-[300px] flex flex-col rounded-m items-center px-8 pt-6 pb-8'>
					<Subheader text='Logowanie' />
					<LoginForm />
				</section>
			</main>
		</>
	);
}
