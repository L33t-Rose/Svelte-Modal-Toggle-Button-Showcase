<script>
  import Demo from "./Demo.svelte";
  import PortalDemo from "./PortalDemo.svelte";
  import {portal} from "./util";
</script>

<svelte:body use:portal={{ selector: "body" }} />
<h1 style="margin:0">Made By Junior</h1>
<p>
  Wanted to explore a pattern in which we can use a button to trigger any
  content we want. So instead of having to keeping track of all the modals that
  are possile we just create a button that shows the content when it's pressed.
</p>
<p>
  Also wanted to try my hand at svelte actions so that I can create "portals".
  Portals aren't originally and I first heard about them from React so I thought
  it'd be cool to replicate them in svelte.
</p>
<Demo />
<PortalDemo/>

<!-- Wanted to try out the button but make it so the conent shows up somewhere else -->
<!-- <div id="button-bar" style="flex">
  <Button
    id="junior"
    label="Junior"
    let:pressed
    --display
    let:toggle
    --border="1px solid"
  >
    <div class="modal" use:portal={{ selector: "#portal", condition: pressed }}>
      <div>
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
      <div>
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
    <div class="modal" use:portal={{ selector: "#portal", condition: pressed }}>
      <div class="modal-content">
        <button class="close" on:click={toggle}><CloseIcon /></button>
        Here
      </div>
    </div>
  </Button>
</div>
<div id="portal" />
<Test action={portal} parameters={{ selector: "#portal", condition: true }} />
<Button let:pressed let:toggle>
  <Modal
    action={portal}
    close={toggle}
    parameters={{ selector: "body", condition: pressed }}
  >
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
<Button label="Transition?" let:pressed>
  <div
    use:portal={{ selector: "#portal", condition: pressed }}
    transition:fade={pressed}
    style="background:coral; padding:1em"
  >
    Yes
  </div>
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
  div.modal-content button.close {
    all: initial;
    position: absolute;
    right: -0.5em;
    top: -0.5em;
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
</style> -->
