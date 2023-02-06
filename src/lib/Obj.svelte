<script>
	export let name = 'adam';
	export let place = 'oxford';
	export let onAgeChanged;
	$: if (typeof onNameChanged === 'function') onNameChanged(name);

	function clicky() {
		name = 'simon';
	}
</script>

<h1 on:click={clicky}>{name}</h1>
{place}
