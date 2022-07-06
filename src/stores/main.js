import { defineStore } from "pinia"

export const useMainStore = defineStore({
	id: "main",
	state: () => ({
		cities: [
			{
				title: "San Francisco",
				text: "Beautifull ladscape",
				background: "bg-sanFrancisco",
			},
			{
				title: "San Francisco",
				text: "Beautifull ladscape",
				background: "bg-sanFranciscoDesktop",
			},
			{
				title: "Yosemite",
				text: "Beautifull ladscape",
				background: "bg-yosemite",
			},
			{
				title: "L.A.",
				text: "Beautifull ladscape",
				background: "bg-la",
			},
			{
				title: "Seattle",
				text: "Beautifull ladscape",
				background: "bg-seattle",
			},
			{
				title: "New York",
				text: "Beautifull ladscape",
				background: "bg-new_york",
			},
			{
				title: "Norway",
				text: "Beautifull ladscape",
				background: "bg-norway",
			},
			{
				title: "Sydney",
				text: "Beautifull ladscape",
				background: "bg-sydney",
			},
			{
				title: "Miami",
				text: "Beautifull ladscape",
				background: "bg-miami",
			},
			{
				title: "Switzerland",
				text: "Beautifull ladscape",
				background: "bg-switzerland",
			},
			{
				title: "Bali",
				text: "Beautifull ladscape",
				background: "bg-bali",
			},
			{
				title: "Norway",
				text: "Beautifull ladscape",
				background: "bg-norway",
			},
			{
				title: "Chicago",
				text: "Beautifull ladscape",
				background: "bg-chicago",
			},
			{
				title: "Europe",
				text: "Beautifull ladscape",
				background: "bg-europe",
			},
			{
				title: "Iceland",
				text: "Beautifull ladscape",
				background: "bg-iceland",
			},
		],
	}),
	getters: {
		getCities: (state) => state.cities,
	},
	actions: {},
})
