import styled from 'styled-components';
import { Layout, Progress } from 'antd';

/**
 * Add styling for layouts
 */
const { Header, Footer, Content } = Layout;

const ContentWrapper = styled.div`
	height: 100%;
	margin: auto;
	max-width: 71.25rem;
	padding: 0 1rem;
	width: 100%;
`;
const ContainerLayout = styled(Layout)`
	background: 0;
	min-height: 100vh;
`;
const HeaderLayout = styled(Header)`
	background: 0;
	color: inherit;
	height: auto;
	line-height: normal;
	padding: 2.5rem 0;
`;
const ContentLayout = styled(Content)`
	padding: 0 0 4rem 0;
`;
const FooterLayout = styled(Footer)`
	background: ${({ theme }) => theme.colors.footer};
	color: inherit;
	font-size: 1.125rem;
	padding: 1rem 0;
	text-align: center;
`;
const LogoName = styled.h1`
	color: ${({ theme }) => theme.colors.highlight};
	font-size: 1.5rem;
	font-weight: 400;
	margin: 0;
`;
const Copyright = styled.p`
	margin: 1rem;
`;
const ContainerErrorPage = styled.div`
	min-height: 41.313rem;
`;
const PageLoaderContainer = styled.div`
	height: 0.5rem;
	position: relative;
`;
const PageLoader = styled(Progress)`
	line-height: 0;
	position: absolute;
`;

export {
	ContentWrapper,
	ContainerLayout,
	HeaderLayout,
	ContentLayout,
	FooterLayout,
	LogoName,
	Copyright,
	ContainerErrorPage,
	PageLoaderContainer,
	PageLoader,
};
