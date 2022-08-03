/**
 * @typedef {Object} UserName
 * @property {string}
 * @property {string}
 *
 * @typedef {Object} UserPicture
 * @property {string}
 *
 * Type Interfaces
 * @typedef {Object} Users
 * @property {UserName}
 * @property {UserPicture}
 *
 * @typedef {Object} ButtonContainer
 * @property {boolean}
 *
 * @typedef {Object} Params
 * @property {string}
 *
 * @typedef {Object} GetServerSideProps
 * @property {Params}
 *
 * @typedef {Object} UserObject
 * @property {Object}
 *
 * @typedef {Object} UserPageObject
 * @property {Array}
 * @property {number}
 */

/** @type {UserName} */
export interface UserNameInterface {
	first: string;
	last: string;
}
/** @type {UserPicture} */
export interface UserPictureInterface {
	large: string;
}

/** @type {Users} */
export interface UserInterface {
	name: UserNameInterface;
	picture: UserPictureInterface;
}
/** @type {ButtonContainer} */
export interface ButtonContainerInterface {
	isNothingToLoad: boolean;
}
/** @type {GetServerSideProps} */
export interface GetServerSidePropsInterface {
	params: {
		id: string;
	};
}
/** @type {UserObject} */
export interface UserObjectInterface {
	name: {
		title: string;
		first: string;
		last: string;
	};
	picture: {
		large: string;
	};
	location: {
		country: string;
		city: string;
	};
	dob: {
		date: string;
		age: number;
	};
	email: string;
	phone: string;
	cell: string;
	gender: string;
	nat: string;
}
/** @type {UserPageObject} */
export interface UserPageInterface {
	users: Array<UserObjectInterface>;
	id: number;
}

export interface FallbackInterface {
	[key: string]: UserObjectInterface;
}
