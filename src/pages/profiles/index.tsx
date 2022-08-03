import type { NextPage } from 'next';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import ProfilePage from '@/modules/profile';
import { FallbackInterface } from '@/modules/profile/interfaces';

/**
 *
 * Prerender this page at request time
 */

export async function getServerSideProps() {
	const res = await fetch(
		'https://randomuser.me/api/?page=1&results=72&seed=1'
	);
	const users = await res.json();

	if (!users) return { notFound: true };

	return {
		props: {
			fallback: {
				'https://randomuser.me/api/?page=1&results=72&seed=1': users,
			},
		},
	};
}

/**
 *
 * @returns {JSX.Element}
 */

// eslint-disable-next-line react/function-component-definition
const Profile: NextPage = ({ fallback }: FallbackInterface): JSX.Element => (
	<>
		<Head>
			<title>Profile</title>
			<meta name="description" content="User Profile" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<SWRConfig value={{ fallback }}>
			<ProfilePage />
		</SWRConfig>
	</>
);

export default Profile;
