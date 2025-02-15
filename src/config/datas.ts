type Key = "baek" | "yeon" | "deok" | "yee" | "gul"
type Data = {
	label: string
	data: string
}

const datas: Record<Key, Data> = {
	"baek": {
		label: "백령도",
		data: "%EB%B0%B1%EB%A0%B9%EB%8F%84",
	},
	"yeon": {
		label: "연평도",
		data: "%EC%97%B0%ED%8F%89%EB%8F%84",
	},
	"deok": {
		label: "덕적도",
		data: "%EB%8D%95%EC%A0%81%EB%8F%84",
	},
	"yee": {
		label: "이작도",
		data: "%EC%9D%B4%EC%9E%91%EB%8F%84",
	},
	"gul": {
		label: "굴업도",
		data: "%EA%B5%B4%EC%97%85%EB%8F%84",
	},
}

export default datas
