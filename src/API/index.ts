import axios from 'axios';

export const instance = axios.create({
	baseURL:import.meta.env.VITE_HOST,
	timeout:3000
});

export function adaptSummary(input:string):string{
	let json = JSON.parse(input) as {};
	let arr:string[] = [];
	for(let key in json){
		//@ts-ignore
		let palce = json[key] as number[];
		palce.forEach(index=>{
			arr[index] = key;
		})
	}
	return arr.join(' ');
}
export * from "./type"
export * from "./api"