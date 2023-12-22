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
		displayName: string,
		institutionDisplayName: string,
		backGround: string,
		avatar: string,
		works: {
			workName: string,
			publicationDate: string,
		}[],
		
	}
}

export interface ClaimReturn extends CommonReturnType {
	data: null,
}

export interface verifyCodeReturn extends CommonReturnType {
	data: null,
}

export interface EditUserInfoReturn extends CommonReturnType {
	data: null,
}