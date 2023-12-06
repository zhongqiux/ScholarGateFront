export interface CommonReturnType {
	msg:String
	flag:number
	data:any
}

export interface LoginReturn extends CommonReturnType {
	data: {
		id:number
	}
}