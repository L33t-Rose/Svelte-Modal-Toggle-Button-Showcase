<script>
	export let id="test";
	export let bypass = false;
	export let label = "Click Button";
	let pressed = bypass;
	function toggle(){pressed = !pressed}
</script>

<button {id} on:click={toggle}>
	{label}
</button>

{#if pressed}
	<slot pressed={pressed} toggle={toggle} bypass={bypass}/>
{/if}

<style>
	button{
		box-sizing:border-box;
		background:var(--bg,white);
		color:var(--textColor,black);
		border-radius:var(--borderRadius,0);
		border:var(--border,none);
		cursor:pointer;
		display:var(--display,block);
	}
</style>