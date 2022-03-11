<script>
	const geeksLength = 40, surgeonsLength = 20;
	const geeks = [], surgeons = [];
	for (let index = 0; index < geeksLength; index++) {
		geeks.push(index + 1);
	}
	for (let index = 0; index < surgeonsLength; index++) {
		surgeons.push(index + 1);
	}
</script>

<body class="bg-white">
	<div id="nft" class="container mx-auto">
		<div class="container mx-auto flex flex-col items-center pt-12 pb-5 sm:py-15 mt-19">
			<div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col sm:mb-5">
				<h1
					class="text-2xl lg:text-4xl xl:text-5xl font-bold"
				>
					<span class="text-sky-400">Cryptocrades</span> NFT
				</h1>
				<p
					class="py-6 text-center lg:px-32 text-base md:text-xl"
				>
					Hippocrades, obviously, is inspired by the "Father of Medicine" himself - Hippocrates, who
					was regarded as the greatest physician of his time. His teachings has been carried on up
					to this day by the same doctors who keep on saving our lives now. <br /> <br />

					In his honor and for the doctors who continue to heal this world, we are creating
					"Cryptocrades" as a recognition to their relentless efforts. This NFT version of
					Hippocrades suits different characters and personalities that represent all of us who have
					been treated and healed by the medical professionals around us. <br /> <br />

					One of the primary reasons Hippocrades is built is to provide innovative tech tools that
					health providers can use to save more lives. By supporting Cryptocrades, you become a part
					of helping achieve this mission as well.
				</p>
				<div class="row">
					<a href="#geeks" class="btn btn-primary btn-outline normal-case">The Geeks Collection</a>
					<a href="#surgeons" class="btn btn-primary btn-outline normal-case">The Surgeons Collection</a>
					<a href="#more" class="btn btn-primary btn-outline normal-case">More Coming Soon!</a>
				</div>
			</div>
		</div>
	</div>

	<!-- https://codepen.io/danfascia/pen/jOPajpR?editors=1100 -->

	<!-- Geeks Collection -->
	<div class="container mx-auto pt-20">
		<h1
			id="geeks"
			class="text-2xl sm:text-3xl md:text-4xl text-center text-gray-800 font-black leading-7 md:leading-10"
		>
			<span class="text-sky-400">The Geeks Collection</span>
		</h1>

		<section class="py-8 px-4">
			<div class="flex flex-wrap -mx-4 -mb-8">
				{#each geeks as num }
					<div class="md:w-1/4 px-4 mb-8">
						{#if num.toString().length === 1}
							<img class="rounded shadow-md p-10" src="./nft/geeks/cryptocrades_geek_00{num}.png" alt="" />
						{/if}
						{#if num.toString().length === 2}
							<img class="rounded shadow-md p-10" src="./nft/geeks/cryptocrades_geek_0{num}.png" alt="" />
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<h1
			id="surgeons"
			class="text-2xl sm:text-3xl md:text-4xl text-center text-gray-800 font-black leading-7 md:leading-10 pt-20"
		>
			<span class="text-sky-400">The Surgeons Collection</span>
		</h1>
		<section class="py-8 px-4">
			<div class="flex flex-wrap -mx-4 -mb-8">
				{#each surgeons as num }
					<div class="md:w-1/4 px-4 mb-8">
						{#if num.toString().length === 1}
						<img class="rounded shadow-md p-10" src="./nft/surgeons/cryptocrades_surgeon-00{num}.png" alt="" />
						{/if}
						{#if num.toString().length === 2}
						<img class="rounded shadow-md p-10" src="./nft/surgeons/cryptocrades_surgeon-0{num}.png" alt="" />
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<h1
			id="more"
			class="text-2xl sm:text-3xl md:text-4xl text-center text-gray-800 font-black leading-7 md:leading-10 pt-20"
		>
			<span class="text-sky-400">More Collection Coming!</span>
		</h1>
		<section class="py-8 px-4">
			<div class="flex flex-wrap -mx-4 -mb-8">
				<div class="md:w-1/4 px-4 mb-8">
					<img class="rounded shadow-md p-10" src="./nft/misc/cryptocrades_artist-001.png" alt="" />
				</div>
				<div class="md:w-1/4 px-4 mb-8">
					<img class="rounded shadow-md p-10" src="./nft/misc/cryptocrades_doctor-001.png" alt="" />
				</div>
				<div class="md:w-1/4 px-4 mb-8">
					<img class="rounded shadow-md p-10" src="./nft/misc/cryptocrades_doctor-002.png" alt="" />
				</div>
				<div class="md:w-1/4 px-4 mb-8">
					<img class="rounded shadow-md p-10" src="./nft/misc/cryptocrades_drag-001.png" alt="" />
				</div>
			</div>
		</section>
	</div>
</body>
