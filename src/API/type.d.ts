import * as exp from "constants"
import internal from "stream"

export interface CommonReturnType {
	msg: string,
	flag: boolean,
	data: Object
}

export interface LoginReturn extends CommonReturnType {
	data: {
		token: string,
		userId: number,
		userName: string,
		avatar: number,
		email: string
	}
}
export interface SendCodeReturn extends CommonReturnType {
	data: null,
}
export interface RegisterReturn extends CommonReturnType {
	data: null,
}

export interface GetMessageListReturn extends CommonReturnType {
	data: []
}

export interface ReadMessageReturn extends CommonReturnType {
	data: {
		id: string,
		userId: string,
		name: string,
		content: string,
		time: string,
		isRead: boolean,
	}
}

export interface ReadAllMessageReturn extends CommonReturnType {
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
		stars: {
			id: string,
			name: string,
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
export interface HotWorks extends CommonReturnType{
	data:{
		results:{
			title:string,
			publication_date:string,
			keywords:{keyword:string}[],
			concepts:{display_name:string, id:string}[],
			authorships:{
				author:{display_name:string, id:string},
			}[],
			id:string,
		}[],
		size:number,
	},
}
export interface FieldData extends CommonReturnType {
	data: {
		"id": string,
		"wikidata": string,
		"display_name": string,
		"level": 0,
		"description": string,
		"works_count": number,
		"cited_by_count": number,
		"summary_stats": {
			"twoyr_mean_citedness": number,
			"h_index": number,
			"i10_index": number
		},
		"image_url": string,
		related_concepts:{display_name: string, id:string}[],
		counts_by_year:{cited_by_count: number ,works_count: number ,year: number}[],
		"works_api_url": string,
		"works": {
			"meta": {
				"count": number,
			},
			"results": [
				{
					"id": string,
					"doi": string,
					"title": string,
					"display_name": string,
					"publication_year": number,
					"publication_date": string,
					"cited_by_count": number,
					"authorships": [
						{
							"author_position": string,
							"author": {
								"id": string,
								"display_name": string
							},
							"countries": [
								string
							]
						}
					],
					"keywords": [
						{
							"keyword": string,
							"score": number
						},
					],
				},
			]
		}
	}
}
export interface FieldWorks extends CommonReturnType {
	data: {
		"results": [
			{
				"id": string,
				"doi": string,
				"title": string,
				"display_name": string,
				"publication_year": number,
				"publication_date": string,
				"cited_by_count": number,
				"authorships": [
					{
						"author_position": string,
						"author": {
							"id": string,
							"display_name": string
						},
						"countries": [
							string
						]
					}
				],
				"keywords": [
					{
						"keyword": string,
						"score": number
					},
				],
			},
		]
	}
}

export interface autoCompleteReturn extends CommonReturnType {
	data: {
		results: [
			{ display_name: string }
		]
	}
}
export interface Institution {
	"id": string,
	"ror": string,
	"display_name": string,
	"type": string,
	"homepage_url": string,
	"works_count": number,
	"cited_by_count": number,
	"works_api_url": string
}
export interface Scholar {
	"id": string,
	"orcid": string,
	"display_name": string,
	"works_count": number,
	"cited_by_count": number,
	"summary_stats": {
		"2yr_mean_citedness": number,
		"h_index": number,
		"i10_index": number
	},
	"last_known_institution": {
		"id": string,
		"ror": string,
		"display_name": string,
		"country_code": string,
		"type": string,
	},
}
export interface ScholarHotReturn extends CommonReturnType {
	data: {
		results: Scholar[],
	}
}

export interface InstutionRank extends CommonReturnType {
	data: {
		results: [Institution],
	}
}

export interface GetSearchResultReturn extends CommonReturnType {
	data: {
		"id": string,
		"display_name": string,
		"publication_year": string,
		"publication_date": string,
		"cited_by_count": number,
		"type": string,
		"pdf_url": string,
		"landing_page_url": string,
		"authorships": [string],
		"concepts": {},
		"keywords": [string],
	}
}

export interface GetPatentResultReturn extends CommonReturnType {
	data: null,
}