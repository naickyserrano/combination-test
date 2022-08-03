import styled from 'styled-components';
import { Button, Skeleton } from 'antd';
import Image from 'next/image';
import { ButtonContainerInterface } from './interfaces';

/**
 * Add styling for profile module
 */

const Container = styled.div`
	min-height: 41.313rem;
`;
const ImageContainer = styled.figure`
	cursor: pointer;
	margin: 0;
	overflow: hidden;
	position: relative;
	transition: 200ms ease-in-out;
`;
const ImageAvatar = styled(Image)`
	${ImageContainer}:hover & {
		filter: blur(1px);
		transform: scale(1.5);
	}
`;
const ImageCaption = styled.figcaption`
	align-items: center;
	background: rgba(255, 255, 255, 0.4);
	color: ${({ theme }) => theme.colors.black};
	display: flex;
	font-weight: 600;
	inset: 0;
	justify-content: center;
	padding: 1rem;
	position: absolute;
	text-align: center;
	transition: 200ms ease-in-out;

	${ImageContainer}:hover & {
		opacity: 1;
	}

	${ImageContainer} & {
		opacity: 0;
	}
`;
const ButtonContainer = styled.div<ButtonContainerInterface>`
	display: ${({ isNothingToLoad }) => (isNothingToLoad ? 'none' : 'block')};
	padding: 2rem 0;
`;
const PrimaryButton = styled(Button)`
	background: ${({ theme }) => theme.colors.highlight};
	border-color: ${({ theme }) => theme.colors.highlight};

	&:active,
	&:focus,
	&:hover {
		background: ${({ theme }) => theme.colors.highlight};
		border-color: ${({ theme }) => theme.colors.highlight};
		opacity: 0.8;
	}
`;
const SkeletonImage = styled(Skeleton.Image)`
	&.ant-skeleton-image {
		@media (max-width: 37.5em) {
			width: 6rem;
			height: 6rem;
		}

		@media (min-width: 37.5em) {
			width: 7rem;
			height: 7rem;
		}

		@media (min-width: 75em) {
			width: 8rem;
			height: 8rem;
		}
	}
`;
const UserProfilePhotoContainer = styled.figure`
	margin: 0 0 2rem 0;
`;
const GoBackContainer = styled.div`
	margin: 0 0 2rem;
`;

const EmptyContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	min-height: 41.313rem;
`;

export {
	Container,
	ImageContainer,
	ImageAvatar,
	ImageCaption,
	ButtonContainer,
	PrimaryButton,
	SkeletonImage,
	UserProfilePhotoContainer,
	GoBackContainer,
	EmptyContainer,
};
