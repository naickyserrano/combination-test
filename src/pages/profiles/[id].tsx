import { Descriptions, Row, Col, Grid } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
	Container,
	UserProfilePhotoContainer,
	PrimaryButton,
	GoBackContainer,
} from '@/modules/profile/styles';
import {
	GetServerSidePropsInterface,
	UserPageInterface,
} from '@/modules/profile/interfaces';

const { useBreakpoint } = Grid;

/**
 *
 * Prerender this page at request time
 */
export async function getServerSideProps({
	params,
}: GetServerSidePropsInterface) {
	const id = parseInt(params.id, 10) + 1;
	const res = await fetch(
		`https://randomuser.me/api/?page=1&results=${id}&seed=1`
	);
	const users = await res.json();

	if (!users) return { notFound: true };

	return {
		props: {
			users: users?.results,
			id,
		},
	};
}
/**
 * To render User Details page
 * @returns {JSX.Element}
 */
function UserPage({ users, id }: UserPageInterface) {
	const router = useRouter();
	const screens = useBreakpoint();
	const user = users[id - 1];

	const handleGoBack = () => router.back();

	return (
		<Container>
			<Row>
				<Col xs={24} sm={4} md={3}>
					<GoBackContainer>
						<PrimaryButton
							type="primary"
							size="large"
							block
							onClick={handleGoBack}
						>
							Go Back
						</PrimaryButton>
					</GoBackContainer>
				</Col>
			</Row>
			<Row justify={(screens.xs && 'center') || 'start'}>
				<Col>
					<UserProfilePhotoContainer>
						<Image
							src={user.picture.large}
							alt={user.name.first}
							width={128}
							height={128}
							priority
						/>
					</UserProfilePhotoContainer>
				</Col>
			</Row>
			<Row>
				<Col xs={24}>
					<Descriptions
						title={`${user.name.title} ${user.name.first} ${user.name.last}`}
						bordered
						column={{
							xs: 1,
							sm: 2,
							md: 3,
						}}
					>
						<Descriptions.Item label="Country">
							{user.location.country}
						</Descriptions.Item>
						<Descriptions.Item label="City">
							{user.location.city}
						</Descriptions.Item>
						<Descriptions.Item label="Date of Birth">
							{new Date(user.dob.date).toLocaleDateString()}
						</Descriptions.Item>
						<Descriptions.Item label="Age">{user.dob.age}</Descriptions.Item>
						<Descriptions.Item label="Email">{user.email}</Descriptions.Item>
						<Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
						<Descriptions.Item label="Mobile">{user.cell}</Descriptions.Item>
						<Descriptions.Item label="Gender">{user.gender}</Descriptions.Item>
						<Descriptions.Item label="Nationality">
							{user.nat}
						</Descriptions.Item>
					</Descriptions>
				</Col>
			</Row>
		</Container>
	);
}

export default UserPage;
