import React, { Component, ErrorInfo } from 'react';
import { Result } from 'antd';
import { withRouter } from 'next/router';
import { ContainerErrorPage } from '@/layouts/styles';
import { PrimaryButton } from '@/modules/profile/styles';
import { WithRouterPropsInterface } from './interfaces';

class ErrorBoundary extends Component<WithRouterPropsInterface> {
	// eslint-disable-next-line react/state-in-constructor
	public state = {
		hasError: false,
	};

	// eslint-disable-next-line no-unused-vars
	static getDerivedStateFromError(_: Error) {
		/**
		 * Update state so the next render will show the fallback UI
		 */

		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		/**
		 * You can use your own error logging service here
		 */
		// eslint-disable-next-line no-console
		console.log({ error, errorInfo });
	}

	handleGoBack = () => {
		const { router } = this.props;

		return router.push('/');
	};

	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		/**
		 * Check if the error is thrown
		 */
		if (hasError) {
			/**
			 * You can render any custom fallback UI
			 */
			return (
				<ContainerErrorPage>
					<Result
						status="error"
						title="Oops.."
						subTitle="Sorry, something went wrong."
						extra={
							<PrimaryButton type="primary" onClick={this.handleGoBack}>
								Go Back to Profile Page
							</PrimaryButton>
						}
					/>
				</ContainerErrorPage>
			);
		}

		/**
		 * Return children components in case of no error
		 */

		return children;
	}
}

export default withRouter(ErrorBoundary);
