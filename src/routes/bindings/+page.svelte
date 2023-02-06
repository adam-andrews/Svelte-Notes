<script>
	let name = 'world';
	let a = 0;
	let yes = false;
	let flavours = ['Mint choc chip'];
	let html = '<h1 class=""> This HTML is from a variable </h1>';

	let w;
	let h;
	let size = 42;

	function handleInput(event) {
		console.log(event.target.value);
		name = event.target.value;
	}
	let menu = ['Cookies and cream', 'Mint choc chip', 'Raspberry ripple'];
</script>

<!-- Possible boiler plate way -->
<input on:input={handleInput} />
<h1>Oldey Not bind {name}!</h1>

<!-- Using Bind -->

<input bind:value={name} />
<h1>Using bind {name}!</h1>

<!-- Bind using ranges and numbers -->
<input type="range" bind:value={a} min="0" max="10" />
<h1>This is the value of {a}!</h1>

<!-- Boolean using Checked -->

<input type="checkbox" bind:checked={yes} />

{#if yes}
	<p>This is checked</p>
{:else}
	<p>This is not checked</p>
{/if}

<!-- Bind Groups -->
<h2>Flavours</h2>

{#each menu as flavour}
	<label>
		<input
			type="checkbox"
			bind:group={flavours}
			name="flavours"
			value={flavour}
		/>
		{flavour}
	</label>
{/each}

<h1>
	{flavours}
</h1>

<!-- Binding Multiple (Same as icecream) -->
<!-- Press ctrl to select multiple -->
<select multiple bind:value={flavours}>
	{#each menu as flavour}
		<option value={flavour}>
			{flavour}
		</option>
	{/each}
</select>

<h1>
	{flavours}
</h1>

<!-- Binding values to an HTML output -->
<div contenteditable="true" bind:innerHTML={html} />

<!-- Binding Value to css property -->
<p>size: {w}px x {h}px</p>

<div bind:clientWidth={w} bind:clientHeight={h}>
	<span style="font-size: {size}px">Hello</span>
</div>

<!-- Can use bind a value to this keyword -->
