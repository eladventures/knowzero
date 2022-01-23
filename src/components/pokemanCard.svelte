<script>
	import { fade } from 'svelte/transition';
	export let pokeman;
</script>

<div
	class="list-none p-6 text-gray-800 text-center rounded-md shadow-lg hover:shadow-md flex flex-col items-center"
>
	<img class="h-40 w-40 " src={pokeman.image} alt={pokeman.name} />
	<h2 class="uppercase text-">{pokeman.id}. {pokeman.name}</h2>
</div>

<!-- NOTE: Use code below if you want to link in the card (once there are already details provided) -->
<!-- <a class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/pokemon/${pokeman.id}`} transition:fade>
    <img class="h-40 w-40 " src={pokeman.image} alt={pokeman.name}/>
    <h2 class="uppercase text-2xl">{pokeman.id}. {pokeman.name}</h2>
</a> -->

<slot />
