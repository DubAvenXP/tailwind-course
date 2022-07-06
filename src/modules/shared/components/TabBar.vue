<script setup>
import {
	HomeIcon,
	SearchIcon,
	HeartIcon,
	MoonIcon,
	UserIcon,
} from "@heroicons/vue/solid"

const darkMode = () => {
	console.log('dark mode');
}
</script>

<template>
	<div
		id="tab-bar"
		class="h-20 border-t-2 border-silver shadow-md  bg-white fixed bottom-0 left-0 right-0 flex justify-center items-center gap-10 lg:hidden"
	>
		<a href="#hero">
			<home-icon class="h-6 w-6 text-primary"></home-icon>
		</a>

		<a href="#hero">
			<search-icon class="h-6 w-6 text-primary"></search-icon>
		</a>

		<a href="#recommended">
			<heart-icon class="h-6 w-6 text-primary"></heart-icon>
		</a>

		<a class="cursor-pointer" @click="darkMode">
			<moon-icon class="h-6 w-6 text-primary"></moon-icon>
		</a>

		<a href="#faqs">
			<user-icon class="h-6 w-6 text-primary"></user-icon>
		</a>
	</div>
</template>
