import * as exp from "constants"

export interface CommonReturnType {
	msg: string,
	flag: boolean,
	data: Object
}

export interface LoginReturn extends CommonReturnType {
	data: {
		token: string,
		userId: number,
		name: string,
		avatar: string
	}
}
export interface RegisterReturn extends CommonReturnType {
	data: null,
}

export interface GetUserDataReturn extends CommonReturnType {
	data: {
		name: string,
		organization: string,
		background: string,
		avatar: string,
		paper: {
			name: string,
			date: string,
		}[],
		patent: {
			name: string,
			date: string,
		}[],
	}
}

export interface ClaimReturn extends CommonReturnType {
	data: null,
}

export interface EditUserInfoReturn extends CommonReturnType {
	data: null,
}

export interface GetSearchResultReturn extends CommonReturnType {
	data: null;
}