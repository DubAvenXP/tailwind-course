<script setup></script>

<template>
	<section id="hero">
		<div class="w-full h-3/4 relative">
			<div class="w-full h-full flex flex-col justify-between absolute top-0 py-4 items-center">
				<input
					class="outline-none p-3 rounded-full shadow-sm trasition duration-300 focus-within:shadow-sm focus:scale-105 focus:outline-none"
					placeholder="Ingresa tu destino..."
					type="search"
				/>
				<button
					class="transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-primary hover:text-white duration-300 bg-white text-lg font-semibold p-3 w-36 rounded-full text-primary shadow-sm"
				>
					Explorar
				</button>
			</div>
			<img
				class="w-full h-full"
				src="https://images.pexels.com/photos/3249412/pexels-photo-3249412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt=""
			/>
		</div>
	</section>
</template>
