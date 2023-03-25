import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

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
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='flex justify-center items-center min-h-screen'>
				<h1>/home</h1>
			</main>
		</>
	);
}
