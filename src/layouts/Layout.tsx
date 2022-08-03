import { Col, Row } from 'antd';
import { PageLayoutInterface } from './interfaces';
import {
	ContentWrapper,
	ContainerLayout,
	HeaderLayout,
	ContentLayout,
	FooterLayout,
	LogoName,
	Copyright,
} from './styles';

/**
 *
 * @param {JSX.Element[]} children - multiple children
 * @returns {JSX.Element}
 */
function PageLayout({ children }: PageLayoutInterface): JSX.Element {
	return (
		<ContainerLayout>
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
