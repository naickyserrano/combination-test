import { ReactNode } from 'react';
import { NextRouter } from 'next/router';

/**
 * Type Interfaces
 * @typedef {Object} ErrorProps
 * @property {ReactNode} children - children component
 *
 * @typedef {Object} ErrorState
 * @property {boolean} hasError
 *
 * @typedef {Object} WithRouterProps
 * @property {NextRouter} router
 */

/** @type {ErrorProps} */
export interface ErrorPropsInterface {
	children: ReactNode;
}

/** @type {ErrorState} */
export interface ErrorStateInterface {
	hasError: boolean;
}

/** @type {WithRouterProps} */
export interface WithRouterPropsInterface
	extends ErrorPropsInterface,
		ErrorStateInterface {
	router: NextRouter;
}
