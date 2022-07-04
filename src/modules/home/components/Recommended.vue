<script setup>
import { computed } from "vue"
import { useCityStore } from "@/stores"

import CityCard from "./Card.vue"

const cityStore = useCityStore()

const cities = computed(() => cityStore.getCities)
</script>

<template>
	<section class="p-6" id="recommended">
		<p class="text-3xl font-semibold text-primary">Recomendados</p>
		<div class="w-auto h-72 flex gap-4 items-center margin-top overflow-x-auto overscroll-x-contain scrollbar-hide">
			<city-card v-for="(city, index) in cities" :key="index" :index="index" :city="city"/>
		</div>
	</section>
</template>

<style scoped>
</style>
