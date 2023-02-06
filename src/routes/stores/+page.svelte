<script>
	import { count, time } from './store';
	import { onDestroy } from 'svelte';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit',
	});

	function increment() {
		count.update((n) => n + 1);
	}

	let countValue;
	// This is the boiler plately way to avoid memory leak
	// Memory leak will occur if we add many versions of count button and delte them
	const unsubscribe = count.subscribe((count) => (countValue = count));
	onDestroy(unsubscribe);

	// Or you can use a $count to handle it for you
	console.log($count);
</script>

<button on:click={increment}>Increment {countValue}</button>
<button on:click={increment}>Increment {$count}</button>
<h1>The time is {formatter.format($time)}</h1>
