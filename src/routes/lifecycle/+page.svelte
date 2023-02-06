<script>
	import { onMount } from 'svelte';

	let photos = [];
	// It's recommended to put the fetch in onMount rather than at the top level of the <script> because of server-side rendering (SSR). With the exception of onDestroy, lifecycle functions don't run during SSR, which means we can avoid
	// fetching data that should be loaded lazily once the component has been mounted in the DOM.
	onMount(async () => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
		const data = await res.json();
		photos = data.results;

		console.log(photos);
	});
</script>

<div>
	{#each photos as photo}
		<div>
			{photo.name}
		</div>
	{:else}
		<p>Loading</p>
	{/each}
</div>
>

<!-- On destroy performs code when a component is destroyed(Used to stop memory leaks) -->
