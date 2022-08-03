import { Result } from 'antd';
import { useRouter } from 'next/router';
import { ContainerErrorPage } from '@/layouts/styles';
import { PrimaryButton } from '@/modules/profile/styles';

/**
 * To display fallback 404 page
 * @returns {JSX.Element}
 */

function Page404() {
	const router = useRouter();

	const handleGoBack = () => router.push('/');

	return (
		<ContainerErrorPage>
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={
					<PrimaryButton type="primary" onClick={handleGoBack}>
						Go Back to Profile Page
					</PrimaryButton>
				}
			/>
		</ContainerErrorPage>
	);
}

export default Page404;
