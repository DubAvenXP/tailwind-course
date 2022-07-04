<script setup>
import { useExampleStore } from "@/stores"

const store = useExampleStore()
</script>

<template>
	<h1 class="text-3xl font-bold underline">{{ store.getMessage }}</h1>
</template>

