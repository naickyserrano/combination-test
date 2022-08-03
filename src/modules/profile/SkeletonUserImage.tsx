import { Col } from 'antd';
import { SkeletonImage } from './styles';

/**
 *
 * @returns {JSX.Element}
 */
function SkeletonUserImage(): JSX.Element {
	return (
		<Col xs={8} md={4} lg={3}>
			<SkeletonImage active />
		</Col>
	);
}

export default SkeletonUserImage;
