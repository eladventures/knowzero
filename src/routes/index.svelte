<script>
</script>

<svelte:head>
	<title>Hippocrades</title>
</svelte:head>

<!-- FIRST PANEL -->
<!-- 'Hero' component from taliwinduikit.com -->
<body class="bg-white">
	<div>
		<div class="container mx-auto flex flex-col items-center py-12 sm:py-12">
			<div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-5">
				<h1
					class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10"
				>
					Secure Healthcare Data
					<span class="text-sky-400">Access</span>
					to All.
				</h1>
				<p
					class="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center text-sm sm:text-lg"
				>
					Hippocrades' Mission: Build a decentralized healthcare tech infrastructure that is
					compliant, scalable, and auditable. Sensitive health data becomes shareable while keeping
					them private and secure.
				</p>
			</div>
			<div class="flex justify-center items-center pb-5">
				<!-- <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-sky-400 transition duration-150 ease-in-out hover:bg-sky-600 lg:text-xl rounded text-white px-4 sm:px-6 border border-indigo-700 py-2 sm:py-2 text-sm">Read Whitepaper</button> -->
				<!-- <button class="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Live Demo</button> -->
			</div>
			<div class="relative sm:w-2/3 w-11/12">
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<img
					src="/img/hippocrades-health-for-all.webp"
					alt="hippocrades-people-together"
					role="img"
				/>
			</div>
		</div>
	</div>

	<!-- SECOND PANEL -->
	<!-- 'Hero' component from taliwinduikit.com -->
	<div id="mission" class="w-full px-6">
		<div
			class="mt-8 relative rounded-3xl bg-sky-400 container-x mx-auto flex flex-col items-center pt-12 sm:pt-15 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-5"
		>
			<div class="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
				<h1
					class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold text-white leading-tight"
				>
					What Hippocrades is trying to solve?
				</h1>
				<p
					class="mt-5 sm:mt-10 lg:w-10/12 text-white font-normal text-center text-sm sm:text-lg mx-auto"
				>
					Data breaches affected 26.4 million records in US alone (2020). Lost or stolen personal
					health data may cost the US healthcare industry up to US$7 billion annually.
					<br /><br />The challenge is how to make sensitive personal health data shareable and
					interoperable while keeping health data private, secure, compliant and auditable in a
					decentralized structure.
					<br /><br />Simply, it’s the quest of achieving all these attributes without compromising
					their standards.
				</p>
			</div>
			<div class="flex justify-center items-center mb-1 sm:mb-20">
				<div class="relative sm:w-2/3 w-11/12">
					<img src="../img/hippocrades-hie.webp" alt="health-information-exchange-holy-grail" />
				</div>
			</div>
		</div>
	</div>

	<!-- THIRD PANEL -->
	<!-- 'Hero' component from taliwinduikit.com -->
	<div id="infra">
		<div class="container mx-auto flex flex-col items-center pt-20 pb-5 sm:py-15 mt-19">
			<div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-5">
				<h1
					class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10"
				>
					Tech Healthcare <span class="text-sky-400">Infrastructure</span>
				</h1>
				<p
					class="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center text-sm sm:text-lg"
				>
					To reach the elusive holy grail of healthcare data, it requires an infrastructure of (1)
					health applications, (2) a comprehensive set of secured health API services, and
					integration to a (3) blockchain.
					<br /><br />Hippocrades has already built the complementing technologies necessary in this
					framework namely Curie, Fleming, and Nightingale.
				</p>
			</div>
		</div>
	</div>

	<!-- Card module from DaisyUI, grid from tailwindUIkit  -->
	<div
		class="container-y mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-14 px-5 text-gray-800"
	>
		<div class="card shadow-2xl">
			<figure>
				<img src="../img/hippocrades-curie.webp" alt="hippocrades-health-apps" />
			</figure>
			<div class="card-body">
				<h2 class="card-title mx-auto">Curie</h2>
				<p>
					Provides ready-made healthcare modules and solutions like electronic medical records,
					registration, billing, materials management, & more.
				</p>
			</div>
		</div>

		<div class="card shadow-2xl">
			<figure>
				<img src="../img/hippocrades-fleming.webp" alt="hippocrades-api-services" />
			</figure>
			<div class="card-body">
				<h2 class="card-title mx-auto">Fleming</h2>
				<p>
					Provides a comprehensive list of Healthcare APIs that developers can use not only to add
					features but also to allow interoperability with other systems.
				</p>
			</div>
		</div>

		<div class="card shadow-2xl">
			<figure>
				<img src="../img/hippocrades-nightingale.webp" alt="hippocrades-blockchain" />
			</figure>
			<div class="card-body">
				<h2 class="card-title mx-auto">Nightingale</h2>
				<p>
					The blockchain component that serves as the decentralized healthcare information exchange
					(HIE) platform utilizing zero-knowledge (zk) protocol.
				</p>
			</div>
		</div>
	</div>

	<div class="flex justify-center items-center mb-10 sm:mb-10 pt-10">
		<button
			class="hover:bg-white hover:text-sky-400 lg:text-xl hover:border-sky-400 border bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-sky-400	focus:ring-white rounded border border-gray-600 text-gray-600 px-4 sm:px-8 py-1 sm:py-3 text-sm"
			onclick="window.location.href='https://about.hippocrades.org/hippocrades-cms';">Learn More</button
		>

		<a href="../img/hippocrades.pdf" target="_blank">
			<button
				class="hover:bg-white hover:text-sky-400 lg:text-xl hover:border-sky-400 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-sky-400 focus:ring-white hover:bg-indigo-700-800 rounded border border-gray-600 text-gray-600 px-4 sm:px-8 py-1 sm:py-3 text-sm"
			>
				Read Whitepaper
			</button>
		</a>
		<a href="https://demo.hippocrades.org" target="_blank">
			<button
				class="hover:text-white hover:bg-sky-400 lg:text-xl hover:border-white ml-3 sm:ml-6 bg-gray-500 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-sky-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-gray-600 text-white px-4 sm:px-8 py-1 sm:py-3 text-sm"
			>
				Try Demo
			</button>
		</a>
	</div>

	<!-- FOURTH PANEL -->
	<!-- Embed Youtube source: https://codepen.io/mnaus/pen/MWjaxLj -->

	<div class="flex flex-col items-center w-1/2 mx-auto">
		<div
			class="relative h-0 overflow-hidden max-w-full w-full border-8 border-sky-400 my-5"
			style="padding-bottom: 56.25%"
		>
			<!-- svelte-ignore a11y-missing-attribute -->

			<iframe
				src="https://www.youtube.com/embed/zvM3LIvq-6k"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				class="absolute top-0 left-0 w-full h-full"
			/>
		</div>
	</div>

	<!-- FIFTH PANEL -->
	<!-- Timeline component  https://codepen.io/sheikh_ishaan/pen/oNWpgoK-->

	<div class="container-x mx-auto pt-10">
		<div class="relative sm:w-1/2 w-11/12 mx-auto">
			<picture>
				<img src="../img/hippocrades-logo-black.webp" alt="Welcome" />
			</picture>
		</div>
		<div class="p-4 mt-4">
			<h1 class="text-4xl text-center font-bold mb-6 text-gray-800">Timeline</h1>
			<div class="container">
				<div class="flex flex-col md:grid grid-cols-12 text-gray-50">
					<div class="flex md:contents">
						<div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
							<div class="h-full w-6 flex items-center justify-center">
								<div class="h-full w-1 bg-sky-600 pointer-events-none" />
							</div>
							<div
								class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-sky-600 shadow text-center"
							>
								<i class="fas fa-check-circle text-white" />
							</div>
						</div>
						<div
							class="bg-sky-600 col-start-4 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
						>
							<h3 class="font-semibold text-lg mb-1">Curie</h3>
							<p class="leading-tight text-justify w-full">
								DONE, in production. Development: 2016 to present.
							</p>
						</div>
						z
					</div>

					<div class="flex md:contents">
						<div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
							<div class="h-full w-6 flex items-center justify-center">
								<div class="h-full w-1 bg-sky-600 pointer-events-none" />
							</div>
							<div
								class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-sky-600 shadow text-center"
							>
								<i class="fas fa-check-circle text-white" />
							</div>
						</div>
						<div
							class="bg-sky-600 col-start-4 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
						>
							<h3 class="font-semibold text-lg mb-1">Fleming</h3>
							<p class="leading-tight text-justify">
								DONE, in production. Development: 2016 to present.
							</p>
						</div>
					</div>

					<div class="flex md:contents">
						<div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
							<div class="h-full w-6 flex items-center justify-center">
								<div class="h-full w-1 bg-sky-400 pointer-events-none" />
							</div>
							<div
								class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-sky-400 shadow text-center"
							>
								<i class="fas fa-times-circle text-white" />
							</div>
						</div>
						<div
							class="bg-sky-400 col-start-4 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
						>
							<h3 class="font-semibold text-lg mb-1 text-white">Nightingale</h3>
							<p class="leading-tight text-justify text-white">
								Proof of Concept: DONE. Development: Dec 2021 to present
							</p>
						</div>
					</div>

					<div class="flex md:contents">
						<div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
							<div class="h-full w-6 flex items-center justify-center">
								<div class="h-full w-1 bg-sky-400 pointer-events-none" />
							</div>
							<div
								class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-sky-400 shadow text-center"
							>
								<i class="fas fa-exclamation-circle text-sky-400" />
							</div>
						</div>
						<div
							class="bg-white border-2 border-sky-400 col-start-4 col-end-11 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
						>
							<h3 class="font-semibold text-lg mb-1 text-sky-400">
								Hippocrades - Integration of the 3 Platforms
							</h3>
							<p class="leading-tight text-justify text-sky-400">
								Phase 1: April 1, 2022 <br />
								Phase 2: July 1, 2022<br />
								Phase 3: October 1, 2022
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- SIXTH PANEL -->
	<!-- Crypto Module  https://tailwindcomponents.com/component/sb-admin-2-forgot-password-page-1-->

	<!-- Container -->
	<div id="nft" class="container mx-auto">
		<div class="container mx-auto flex flex-col items-center pt-12 pb-5 sm:py-15 mt-19">
			<div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col sm:mb-5">
				<h1
					class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10"
				>
					Support this <span class="text-sky-400">Mission</span>!
				</h1>
			</div>
		</div>

		<div class="flex justify-center px-6 mb-12">
			<!-- Row -->
			<div class="w-full xl:w-3/4 lg:w-11/12 flex">
				<!-- Col -->
				<div
					class="w-full h-auto bg-transparent border-2 border-r-transparent hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
					style="background-image: url('../img/hippocrades-crypto.webp')"
				/>
				<!-- Col -->
				<div
					class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none border-2 border-l-transparent"
				>
					<div class="px-8 mb-4 mt-20">
						<h3 class="pt-4 mb-2 text-5xl font-semibold text-gray-700">Cryptocrades</h3>
						<p class="mb-4 text-base text-gray-700">
							You can support Hippocrades by collecting a Crypto Hippocrades NFT dubbed
							'Cryptocrades'.
						</p>
						<p class="mb-4 text-base text-gray-700">
							See collection <span onclick="window.location='/crypto'">here</span>
						</p>
					</div>
					<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
								Be the first to know of Cryptocrades release!
							</label>
							<input
								class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="email"
								type="email"
								placeholder="Enter Email Address..."
							/>
						</div>
						<div class="mb-6 text-center">
							<button
								class="w-full px-4 py-2 font-bold text-white bg-sky-400 rounded-full hover:bg-sky-600 focus:outline-none focus:shadow-outline"
								type="button"
							>
								Send Email
							</button>
						</div>
						<hr class="mb-6 border-t" />

						<!-- <div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./register.html"
								>
									Create an Account!
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./index.html"
								>
									Already have an account? Login!
								</a>
							</div> -->
					</form>
				</div>
			</div>
		</div>
	</div>
</body>

<style>
	.container-x {
		width: 60%;
	}
	.container-y {
		width: 75%;
	}
</style>
