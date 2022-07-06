<script setup>
import {
	HomeIcon,
	SearchIcon,
	HeartIcon,
	MoonIcon,
	UserIcon,
} from "@heroicons/vue/solid"

const darkMode = () => {
	const html = document.querySelector("html")

	// Set class dark to html tag
	if (html.classList.contains("dark")) {
		html.classList.remove("dark")
	} else {
		html.classList.add("dark")
	}
}
</script>

<template>
	<div
		id="tab-bar"
		class="h-20 shadow-md  dark:text-white text-primary dark:bg-dark-gray-200 bg-silver fixed bottom-0 left-0 right-0 flex justify-center items-center gap-10 lg:hidden"
	>
		<a href="#hero">
			<home-icon class="h-6 w-6"></home-icon>
		</a>

		<a href="#hero">
			<search-icon class="h-6 w-6"></search-icon>
		</a>

		<a href="#recommended">
			<heart-icon class="h-6 w-6"></heart-icon>
		</a>

		<a class="cursor-pointer" @click="darkMode">
			<moon-icon class="h-6 w-6"></moon-icon>
		</a>

		<a href="#faqs">
			<user-icon class="h-6 w-6"></user-icon>
		</a>
	</div>
</template>
