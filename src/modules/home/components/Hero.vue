<script setup></script>

<template>
	<section id="hero">
		<div class="w-full h-3/4 relative lg:mt-20">
			<div class="w-full h-full flex flex-col justify-between absolute top-0 py-4 items-center lg:items-start lg:justify-center lg:pl-16">
				<input
					class="outline-none p-3 rounded-full shadow-sm trasition duration-300 focus-within:shadow-sm focus:scale-105 focus:outline-none lg:hidden"
					placeholder="Ingresa tu destino..."
					type="search"
				/>
				<div class="hidden h-auto lg:w-2/5 lg:flex pb-6 text-white">
					<p class="text-4xl font-bold">Encuentra más ubicaciones como esta</p>
				</div>
				<button
					class="transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-primary hover:text-white duration-300 bg-white text-lg font-semibold p-3 w-36 rounded-full text-primary shadow-sm "
				>
					Explorar
				</button>
			</div>
			<figure class="w-full h-full lg:h-96 lg:bg-europe lg:bg-no-repeat lg:bg-cover lg:bg-center">
				<img
					class="w-full h-full lg:hidden"
					src="https://images.pexels.com/photos/3249412/pexels-photo-3249412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>
			</figure>
		</div>
	</section>
</template>
