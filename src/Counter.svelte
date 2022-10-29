<script>
  import { onDestroy } from "svelte";


  export let count = 0;
  onDestroy(()=>{console.log("This is unmounting!")})
</script>

<div style="display:flex; flex-direction:row; align-items:center; gap:0 1em;">
  <button on:click={() => count++}>+</button>
  <span>{count}</span>
  <button on:click={() => count--}>-</button>
</div>

<slot {count}/>
<style>
    button{
        margin:0;
    }
</style>
