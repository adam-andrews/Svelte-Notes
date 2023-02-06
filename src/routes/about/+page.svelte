<script>
	import Obj from '$lib/Obj.svelte';

	let objProps = {
		name: 'steve',
		place: 'london',
	};

	const onNameChanged = (name) => {
		console.log('onName Changed', name);
	};
</script>

<Obj {onNameChanged} />
<Obj {...objProps} />
