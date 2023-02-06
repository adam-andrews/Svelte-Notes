<script>
	import DispatchComponent from '$lib/dispatchComponent.svelte';
	import Wrapper from '$lib/Wrapper.svelte';
	import CustomButton from '$lib/CustomButton.svelte';
	let x = 0;
	let y = 0;
	function onHandleMouse(event) {
		console.log(event);
		x = event.clientX;
		y = event.clientY;
	}

	function handleMyEvent(event) {
		alert(event.detail.text);
	}

	function clicked() {
		alert('This function was forwarded');
	}
</script>

<div on:mousemove={onHandleMouse}>
	{x} X
	{y} Y
</div>

<!-- Some frameworks don't like inline events but svelte doesnt' mind -->
<div
	on:mousemove={(e) => {
		x = e.clientX;
		y = e.clientY;
	}}
>
	The mouse position is {x} x {y}
</div>

<DispatchComponent on:myevent={handleMyEvent} />
<!-- Wrapper uses Event forwarding to pass myevent from Dispatch to the event page(check Wrapper to see how) -->
<Wrapper on:myevent={handleMyEvent} />
<CustomButton on:click={clicked} />

<style>
	div {
		height: 500px;
		width: 500px;
		background-color: aqua;
	}
</style>
