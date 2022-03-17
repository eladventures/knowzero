<script>
	import { LINKS_MAP } from '../utils';
	const linksMap = LINKS_MAP;
</script>

<svelte:head>
	<title>Know Zero</title>
</svelte:head>

<!-- FIRST PANEL -->
<!-- 'Hero' component from taliwinduikit.com -->
<body class="bg-white">
	<div>
		<div class="container mx-auto flex flex-col items-center py-12 sm:py-12">
			<div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-5">
				<h1 class="text-2xl lg:text-4xl xl:text-7xl font-bold">
					<span class="text-sky-400">zk dApp</span> in a snap!
				</h1>
				<p class="py-6 text-center lg:px-32 text-base md:text-xl">
					Quickly build zero-knowledge dApps with provided APIs and Javascript SDK. Store proofs in
					Cardano blockchain. No sweat!
				</p>
			</div>
			<div class="flex justify-center items-center">
				<button
					class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-sky-400 transition duration-150 ease-in-out hover:bg-sky-600 lg:text-xl rounded text-white px-4 sm:px-6 border border-indigo-700 py-2 sm:py-2 text-sm"
					>ZK APIs with Javascript SDK, soon!</button
				>
				<!-- <button class="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Live Demo</button> -->
			</div>
			<div class="relative sm:w-2/3 w-11/12">
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<img src="/img/knowzero.jpeg" alt="zero-knowledge-proof" role="img" />
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
