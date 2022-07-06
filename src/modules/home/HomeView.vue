<script setup>

import Hero from "./components/Hero.vue";
import Recommended from "./components/Recommended.vue";
import Faqs from "./components/Faqs.vue";
import Rents from "./components/Rents.vue";

import VueFooter from "./../shared/components/Footer.vue";
import VueHeader from "./../shared/components/Header.vue";
import VueTabBar from "./../shared/components/TabBar.vue";

</script>

<template>
	
	<vue-header></vue-header>
	<main class="dark:bg-dark-gray">
		<hero></hero>
		<recommended></recommended>
		<rents></rents>
		<faqs></faqs>
	</main>
	<vue-footer></vue-footer>
	<vue-tab-bar></vue-tab-bar>
</template>
