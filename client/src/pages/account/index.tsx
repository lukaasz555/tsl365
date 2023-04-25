import React, { useEffect, useState } from 'react';
import Layout from '@/layouts/main/layout';
import { firestore } from '../../../firebase/clientApp';
import {
	collection,
	QueryDocumentSnapshot,
	DocumentData,
	query,
	where,
	limit,
	getDocs,
} from 'firebase/firestore';

const usersCollection = collection(firestore, 'users');

export default function Home() {
	const [users, setUsers] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
	const [isLoading, setLoading] = useState<boolean>(true);

	const fetchUsers = async () => {
		await getDocs(usersCollection)
			.then((res) => console.log(res))
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		fetchUsers().finally(() => setLoading(false));
	}, []);

	return (
		<Layout>
			<h1>konto</h1>
			<p>{process.env.NEXT_PUBLIC_PROJECT_ID}</p>

			<p>{process.env.NEXT_PUBLIC_FIREBASE_API_KEY}</p>
			<p>{process.env.NEXT_PUBLIC_AUTH_DOMAIN}</p>
			<p>{process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}</p>
			<p>{process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}</p>
			<p>{process.env.NEXT_PUBLIC_FIREBASE_APP_ID}</p>
		</Layout>
	);
}
