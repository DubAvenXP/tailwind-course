<script setup>

import Hero from "./components/Hero.vue";
import Recommended from "./components/Recommended.vue";
import Faqs from "./components/Faqs.vue";
import Rents from "./components/Rents.vue";

import VueFooter from "./../shared/components/Footer.vue";
import VueTabBar from "./../shared/components/TabBar.vue";

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
	<vue-tab-bar></vue-tab-bar>
</template>
