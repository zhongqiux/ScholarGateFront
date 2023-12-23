export * from "./type"
export * from "./api"

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

let str = "{\"A\":[0],\"new\":[1],\"method\":[2,19],\"for\":[3],\"determining\":[4],\"nucleotide\":[5],\"sequences\":[6],\"in\":[7],\"DNA\":[8,53,62],\"is\":[9,12,67],\"described.\":[10],\"It\":[11],\"similar\":[13],\"to\":[14,60],\"the\":[15,36,42,61,75,78],\"“plus\":[16],\"and\":[17,38,66,70],\"minus”\":[18],\"[Sanger,\":[20],\"F.\":[21],\"&amp;\":[22],\"Coulson,\":[23],\"A.\":[24],\"R.\":[25],\"(1975)\":[26],\"J.\":[27],\"Mol.\":[28],\"Biol.\":[29],\"94,\":[30],\"441-448]\":[31],\"but\":[32],\"makes\":[33],\"use\":[34],\"of\":[35,41,52,63],\"2′,3′-dideoxy\":[37],\"arabinonucleoside\":[39],\"analogues\":[40],\"normal\":[43],\"deoxynucleoside\":[44],\"triphosphates,\":[45],\"which\":[46],\"act\":[47],\"as\":[48],\"specific\":[49],\"chain-terminating\":[50],\"inhibitors\":[51],\"polymerase.\":[54],\"The\":[55],\"technique\":[56],\"has\":[57],\"been\":[58],\"applied\":[59],\"bacteriophage\":[64],\"ϕX174\":[65],\"more\":[68,71],\"rapid\":[69],\"accurate\":[72],\"than\":[73],\"either\":[74],\"plus\":[76],\"or\":[77],\"minus\":[79],\"method.\":[80]}"
console.log(adaptSummary(str))