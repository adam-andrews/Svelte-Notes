<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function dispatchMessage() {
		dispatch('myevent', {
			text: 'hello',
		});
	}
</script>

<button on:click={dispatchMessage}> Click me </button>
