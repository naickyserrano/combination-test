import { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { useRouter } from 'next/router';
import { PageLayoutInterface } from './interfaces';
import {
	ContentWrapper,
	ContainerLayout,
	HeaderLayout,
	ContentLayout,
	FooterLayout,
	LogoName,
	Copyright,
	PageLoaderContainer,
	PageLoader,
} from './styles';
/**
 *
 * @param {JSX.Element[]} children - multiple children
 * @returns {JSX.Element}
 */
function PageLayout({ children }: PageLayoutInterface): JSX.Element {
	const router = useRouter();
	const [showLoader, setShowLoader] = useState(false);

	useEffect(() => {
		router.events.on('routeChangeStart', () => setShowLoader(true));
		router.events.on('routeChangeComplete', () => setShowLoader(false));
		router.events.on('routeChangeError', () => setShowLoader(false));

		return () => {
			router.events.off('routeChangeStart', () => setShowLoader(false));
			router.events.off('routeChangeComplete', () => setShowLoader(false));
			router.events.off('routeChangeError', () => setShowLoader(false));
		};
	}, []);

	return (
		<ContainerLayout>
			<PageLoaderContainer>
				{showLoader && (
					<PageLoader
						strokeLinecap="butt"
						status="active"
						showInfo={false}
						percent={100}
						strokeColor="#EA8478"
					/>
				)}
			</PageLoaderContainer>
			<ContentWrapper>
				<HeaderLayout>
					<Row>
						<Col xs={24}>
							<LogoName>Random People.</LogoName>
						</Col>
					</Row>
				</HeaderLayout>
				<ContentLayout>{children}</ContentLayout>
			</ContentWrapper>
			<FooterLayout>
				<Row>
					<Col xs={24}>
						<Copyright>&copy; Copyright 2022</Copyright>
					</Col>
				</Row>
			</FooterLayout>
		</ContainerLayout>
	);
}

export default PageLayout;
