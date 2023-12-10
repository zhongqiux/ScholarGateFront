export interface CommonReturnType {
	msg:string,
	flag:boolean,
	data:Object
}

export interface LoginReturn extends CommonReturnType {
	data:{
		token:string,
		userId:number,
		name:string,
		avatar:string
	}
}
export interface RegisterReturn extends CommonReturnType {
	data:null,
}