<script>
  import { portal } from "./util";
  import { fade, fly, slide } from "svelte/transition";
  import Button from "./Button.svelte";
  import CloseIcon from "./CloseIcon.svelte";
  import Test from "./Test.svelte";
  import Modal from "./Modal.svelte";
  import Counter from "./Counter.svelte";
  import { onMount } from "svelte";
  let count = 0;
  let loaded = false;
  onMount(() => {
    loaded = true;
  });
</script>

<p style="margin:0;" use:portal={{ condition: true, moveToTop: true }}>
  Using portal action to move this to the top of the body.<br />
  This is paragraph is inside of PortalDemo.svelte
</p>

<!-- Button Bar that when a button is pressed will teleport it's content to a different div with id "portal" -->
<div id="button-bar" style="flex">
  <Button
    id="junior"
    label="Junior"
    let:pressed
    --display
    let:toggle
    --border="1px solid"
  >
    <div class="modal" use:portal={{ selector: "#portal", condition: pressed }}>
      <div class="modal-content">
        <button class="close" on:click={toggle}><CloseIcon /></button>
        Junior
      </div>
    </div>
  </Button>
  <Button
    id="was"
    label="Was"
    let:pressed
    --display
    let:toggle
    --border="1px solid"
  >
    <div class="modal" use:portal={{ selector: "#portal", condition: pressed }}>
      <div class="modal-content">
        <button class="close" on:click={toggle}><CloseIcon /></button>
        Was
      </div>
    </div>
  </Button>
  <Button
    id="here"
    label="Here"
    let:pressed
    --display
    let:toggle
    --border="1px solid"
  >
    <Modal
      close={toggle}
      action={portal}
      parameters={{ selector: "#portal", condition: pressed }}
    >
      <div class="modal-content">
        <button class="close" on:click={toggle}><CloseIcon /></button>
        Here
      </div>
    </Modal>
  </Button>
</div>
<div id="portal" />

<Test action={portal} parameters={{ selector: "#portal", condition: true }} />

<Button let:pressed let:toggle>
  <Modal action={portal} close={toggle} parameters={{ condition: pressed }}>
    <div class="modal-content">
      <button class="close" on:click={toggle}><CloseIcon /></button>
      Here
      <Button let:pressed --border="1px solid black" --borderRadius="0.5em">
        {pressed}
        <div
          use:portal={{ selector: ".modal", condition: pressed }}
          style="color:white; padding:1em; width:100%;"
        >
          Surely this works
        </div>
      </Button>
    </div>
  </Modal>
</Button>

<Button
  bypass={JSON.parse(localStorage.getItem("showOnPageLoad")) ?? false}
  label="Transition?"
  let:pressed
  let:toggle
>
  {#if loaded}
    <div
      use:portal={{
        selector: "#portal",
        condition: pressed,
      }}
      transition:slide={{duration:1000}}
      style="background:#ef4444; width:75%; margin:0 auto; border-radius:1em; color:white; padding:1em; display:flex; justify-content:space-between; align-items:center;"
    >
      This should fade into #portal {count}
      <Counter bind:count />
      <button
        on:click={toggle}
        style="width:2em; height:2em; cursor:pointer; border-radius: 50%; padding:0; margin:0; border:none; margin:0; background:transparent;"
      >
        <CloseIcon />
      </button>
    </div>
  {/if}
</Button>

<style>
  #portal {
    border: 1px solid black;
    height: 200px;
    position: relative;
  }
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.modal-content {
    width: 75%;
    /* height: 100px; */
    position: relative;
    background: white;
    color: black;
    padding: 1em;
    border-radius: 1em;
  }
  button.close {
    all: initial;
    position: absolute;
    right: -0.5em;
    top: -0.5em;
    width: 1.5em;
    height: 1.5em;
    background: black;
    padding: 0px;
    margin: 0;
    border: none;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
  }
  :global(#junior, #was, #here) {
    --borderRadius: 1em 1em 0 0;
    margin: 0;
    border-style: solid solid none solid;
  }
  :global(#junior:focus, #was:focus, #here:focus) {
    border-width: 2px;
  }
</style>
