<script>
	import { tick } from 'svelte';
	import Component from '$lib/Component.svelte';
	// Reactive declarations and statement
	let elephants = 4;
	let herons = 2;
	let name = 'matey';
	// Note: Legs is only called just before the DOM is edited
	// Note $: only works on the top level
	// so console logging legs when elephants increased will show the old value in the function
	$: legs = elephants * 4 + herons * 2;
	// Calls every time legs exceeds x amount
	$: if (legs > 20) {
		console.log('thats a lot of legs');
	}
	// Can Also call this every time
	$: thisWasCalled;

	function thisWasCalled() {
		console.log(elephants);
		alert('thisWasCalled');
	}

	function increaseElephants() {
		elephants += 1;
		console.log('legs before tick', legs);
		// Tick now shows updated value for legs after all the promises have been completed
		tick().then(() => {
			console.log('legs after tick', legs);
		});
		alert('elephants');
	}
	async function differentTickSyntax() {
		await tick();
		console.log('legs after tick', legs);
	}
</script>

Buttons can use Events like so
<button on:click|once={increaseElephants}>Increase Elephants</button>
<button class="hello">This button is effected by a global class</button>

<Component />
<Component name="haha" />
<Component {name} />

<style>
	:global(button.hello) {
		color: red;
	}
</style>
