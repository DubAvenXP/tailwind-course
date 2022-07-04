<script setup>
import { computed } from "vue"

const props = defineProps({
	city: {
		type: Object,
		required: true,
	},
	index: {
		type: Number,
		required: true,
	},
})

const cardBgColor = computed(() => {
	return props.index % 2 === 0
		? "card-content__primary"
		: "card-content__secondary"
})

const cardTextColor = computed(() => {
	return props.index % 2 === 0
		? "card-color__primary"
		: "card-color__secondary"
})
</script>

<template>
	<div class="card">
		<div class="card-img" :class="city.background"></div>
		<div :class="cardBgColor">
			<p class="card-title" :class="cardTextColor">{{ city.title }}</p>
			<p class="card-text" :class="cardTextColor">{{ city.text }}</p>
		</div>
	</div>
</template>
