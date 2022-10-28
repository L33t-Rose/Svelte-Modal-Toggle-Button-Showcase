<script>
  export let action = () => {};
  export let parameters = {};

  export let close;
  let elem;
  function handleClickOutside(e){
    console.log(e.target,elem);
    if(e.target == elem){
      close();
    }
  }
</script>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- <div class="modal-background" on:click={close}/> -->
  <div class="modal" use:action={parameters} bind:this={elem} on:click={handleClickOutside}>
    <slot />
  </div>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
</style>
