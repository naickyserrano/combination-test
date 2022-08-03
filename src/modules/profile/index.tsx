import { Col, Row, BackTop, Empty } from 'antd';
import Link from 'next/link';
import {
	Container,
	ButtonContainer,
	PrimaryButton,
	ImageContainer,
	ImageAvatar,
	ImageCaption,
	EmptyContainer,
} from './styles';
import SkeletonUserImage from './SkeletonUserImage';
import useFetchUser from '@/hooks/useFetchUser';
import { UserInterface } from './interfaces';

/**
 * 	disabling eslint-disable-next-line react/no-array-index-key
 *  as the type error caused by the placeholder data
 * @returns {JSX.Element}
 */

function ProfilePage(): JSX.Element {
	const {
		users,
		isEmpty,
		isLoading,
		isLoadingMore,
		isError,
		size,
		setSize,
		isNothingToLoad,
	} = useFetchUser();
	const usersPlaceholderArray = new Array(48).fill(1);
	const userLoadMorePlaceholderArray = new Array(8).fill(1);

	const handleLoadMore = () => setSize(size + 1);

	// if there's no user return empty component
	if (isEmpty)
		return (
			<EmptyContainer>
				<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
			</EmptyContainer>
		);

	// else return component w/ data
	return (
		<Container>
			<BackTop />
			<Row gutter={[12, 16]}>
				{isLoading &&
					// eslint-disable-next-line react/no-array-index-key
					usersPlaceholderArray.map((_, i) => <SkeletonUserImage key={i} />)}
				{!isLoading &&
					users.map((user: UserInterface, i: number) => (
						// eslint-disable-next-line react/no-array-index-key
						<Link href={`/profiles/${i}`} key={i}>
							<Col xs={8} md={4} lg={3}>
								<ImageContainer>
									<ImageAvatar
										src={user.picture.large}
										alt={user.name.first}
										width={128}
										height={128}
										priority
									/>
									<ImageCaption>
										{`${user.name.first} ${user.name.last}`}
									</ImageCaption>
								</ImageContainer>
							</Col>
						</Link>
					))}
				{isLoadingMore &&
					userLoadMorePlaceholderArray.map((_, i) => (
						// eslint-disable-next-line react/no-array-index-key
						<SkeletonUserImage key={i} />
					))}
			</Row>
			<Row justify="center">
				<Col xs={24} sm={5} lg={3}>
					<ButtonContainer isNothingToLoad={isNothingToLoad}>
						<PrimaryButton
							type="primary"
							size="large"
							block
							onClick={handleLoadMore}
							disabled={isError}
							loading={isLoading || isLoadingMore}
						>
							Load More
						</PrimaryButton>
					</ButtonContainer>
				</Col>
			</Row>
		</Container>
	);
}

export default ProfilePage;
