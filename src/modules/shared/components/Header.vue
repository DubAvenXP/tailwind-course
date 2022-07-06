<script setup>
import {
	SearchIcon,
	MoonIcon,
} from "@heroicons/vue/solid"

const darkMode = () => {
	console.log('dark mode');
}
</script>

<template>
	<header class="dark:bg-dark-gray-200 hidden lg:shadow-lg lg:flex lg:justify-between lg:p-6 fixed top-0 left-0 right-0 bg-white z-10">
		<p class="flex items-center text-xl text-primary font-bold">Iversiones patito s.a</p>
		<nav class="flex text-primary font-bold justify-between items-center gap-6">
			<a   href="#hero">Ubicaciones</a>
			<a  href="#recommended">Reservas</a>
			<a  href="#faqs">Faqs</a>
			<a  href="#faqs">Sobre nosotros</a>
		</nav>

		<div>
			<button class="mr-6 text-primary transition ease-in delay-150 hover:bg-primary hover:text-white hover:cursor-pointer rounded p-3">
				<search-icon class="h-6 w-6"></search-icon>
			</button>
			<button class="text-primary transition ease-in delay-150 hover:bg-primary hover:text-white rounded p-3">
				<moon-icon class="h-6 w-6" @click="darkMode()"></moon-icon>
			</button>
		</div>
	</header>
</template>
