<script lang="ts">
	export let id="test";
	let pressed = false;
	export let label = "Click Button";
	function toggle(){pressed = !pressed}
</script>

<button {id} on:click={toggle}>
	{label}
</button>

{#if pressed}
	<slot pressed={pressed} toggle={toggle}/>
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