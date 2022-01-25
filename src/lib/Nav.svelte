<script>
	// 'Hero' component - Function to toggle header menu in mobile view.
	function toggleMenu(flag) {
		let value = document.getElementById('menu');
		if (flag) {
			value.classList.remove('hidden');
		} else {
			value.classList.add('hidden');
		}
	}
</script>

<!-- Nav Bar module from: https://tailwinduikit.com/components/marketing/page_section/hero -->

<nav class="w-full">
	<div class="container mx-auto px-6 flex items-center justify-between">
		<div class="flex items-center" aria-label="Home" role="img">
			<!-- <img class="cursor-pointer w-8 sm:w-auto" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg1.svg" alt="logo"/>      -->
			<p class="ml-2 lg:ml-4 text-base lg:text-2xl font-bold text-gray-800">
				H I P P O C R A D E S
			</p>
		</div>
		<div>
			<button
				onclick="toggleMenu(true)"
				class="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
			>
				<img
					class="h-8 w-8"
					src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg"
					alt="show"
				/>
			</button>
			<div id="menu" class="md:block lg:block hidden">
				<button
					onclick="toggleMenu(false)"
					class="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-30 top-0 mt-3"
				>
					<img
						class="h-8 w-8"
						src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg"
						alt="hide"
					/>
				</button>
				<ul
					class="flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20"
				>
					<li
						class="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0"
					>
						<a href="#mission">Mission</a>
					</li>
					<li
						class="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0"
					>
						<a href="#infra">Health Infrastructure</a>
					</li>
					<li
						class="text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0 pr-20"
					>
						<a href="#nft">NFT</a>
					</li>

					<li
						class="pr-3"
					>
						<a href="../img/hippocrades.pdf" target="_blank">
							<button
								class="bg-transparent hover:bg-white hover:text-sky-400 text-base text-gray-600 border border-gray-600 hover:border-sky-400 py-2 px-4 rounded"
							>
								Whitepaper
							</button>
						</a>
					</li>

					<li>
						<a href="https://demo.hippocrates.org" target="_blank">
							<button
								class="bg-gray-500 hover:bg-sky-400 hover:text-white text-base text-white  py-2 px-4 rounded"
							>
								Try Demo
							</button>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
