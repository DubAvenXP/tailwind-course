<script setup>

import hero from "./components/Hero.vue";
import recommended from "./components/Recommended.vue";
import faqs from "./components/Faqs.vue";
import rents from "./components/Rents.vue";

</script>

<template>
	<header>
		<nav></nav>
		<div id="tab-bar"></div>
	</header>
	<main class="w-full h-screen">
		<hero></hero>
		<recommended></recommended>
		<faqs></faqs>
		<rents></rents>
	</main>
</template>
