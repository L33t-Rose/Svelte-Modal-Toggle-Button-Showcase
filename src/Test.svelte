<script>
	export let action;
	export let parameters;
	console.log(parameters);
</script>

{#if action}
<div class="sure" use:action={parameters}>
	Test
</div>
{/if}