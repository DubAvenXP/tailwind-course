<script setup>
const movies = [
	{
		id: 1,
		title: "The avengers",
		year: 2012,
		rating: 8.1,
		poster: "https://www.elarbolblanco.com/noticias/Image/smcin002_0.jpg",
		description:
			"Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
	},
	{
		id: 2,
		title: "The Godfather",
		year: 1972,
		rating: "9.2",
		poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, placeat consequatur? Facere sit maxime quia aut inventore molestias nobis praesentium eveniet.",
	},
	{
		id: 3,
		title: "The Dark Knight",
		year: 2008,
		rating: 9.0,
		poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, placeat consequatur? Facere sit maxime quia aut inventore molestias nobis praesentium eveniet.",
	},
	{
		id: 4,
		title: "Dark Knight Rises",
		year: 2012,
		rating: 8.5,
		poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, placeat consequatur? Facere sit maxime quia aut inventore molestias nobis praesentium eveniet.",
	},
]
</script>

<template>
	<h2 class="text-center font-bold text-4xl mt-5">Recent movies</h2>
	<main class="pt-6 flex justify-center items-center gap-5 flex-wrap">
		<article
			v-for="movie in movies"
			:key="movie.id"
			class="max-w-2xl h-52 flex space-x-5 bg-slate-100 rounded-md overflow-hidden"
		>
			<img
				class="w-1/3 h-full object-cover"
				:src="movie.poster"
				alt="image 1"
			/>
			<div class="w-2/3 h-full py-2 pr-2 flex flex-col justify-between">
				<h6 class="font-bold">{{ movie.title }}</h6>
				<p class="font-medium text-red-500">{{ movie.year }}</p>
				<p class="font-light">
					{{ movie.description }}
				</p>
				<div class="flex justify-end">
					<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
						See more
					</button>
				</div>
			</div>
		</article>
	</main>
</template>
