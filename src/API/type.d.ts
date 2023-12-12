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
		"works_api_url": string,
		"works":{
			"results":[
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
		"results":[
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