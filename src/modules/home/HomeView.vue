<script setup>

import Hero from "./components/Hero.vue";
import Recommended from "./components/Recommended.vue";
import Faqs from "./components/Faqs.vue";
import Rents from "./components/Rents.vue";

import VueFooter from "./../shared/components/Footer.vue";

</script>

<template>
	<header>
		<nav></nav>
	</header>
	<main class="w-full h-auto">
		<hero></hero>
		<recommended></recommended>
		<rents></rents>
		<faqs></faqs>
	</main>
	<vue-footer></vue-footer>
	<div id="tab-bar" class="h-20 bg-black fixed bottom-0 left-0 right-0"></div>
</template>
