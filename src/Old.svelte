<script>
	import Button from "./Button.svelte"
	let name = 'world';
</script>

<h1 style="margin:0;">Hello {name}!</h1>
<Button label="Modal Toggle Button" let:pressed let:toggle >
	<div class="yes">
			<div class="container">
				<button on:click={toggle}>Close</button>
				<h1>The Modal is Open: <span style="color:red">{pressed}</span></h1>
				<p>
					This is really powerful since that we means we have self contained modals that we can control easily.
				</p>
				<p>
					This also means that we can possibily lazy load some content when the page loads. Will have to investigate
				</p>
			</div>
	</div>
</Button>
<Button label="Different Modal Toggle Button" let:pressed let:toggle>
	<div class="yes">
			<div class="container">
				<button on:click={toggle}>Close</button>
				<h1>The Modal is Open: <span style="color:red">{pressed}</span></h1>
				<p>
					This is a different modal with my Button (name pending) component!
				</p>
				<p>
					This is so cool!
				</p>
			</div>
	</div>
</Button>
<Button id="button" label="Modal Toggle Button With ID" let:pressed let:toggle>
	<div class="yes">
			<div class="container">
				<button on:click={toggle}>Close</button>
				<h1>The Modal is Open: <span style="color:red">{pressed}</span></h1>
				<p>
					This is a different modal with my Button (name pending) component!
				</p>
				<p>
					This is so cool! For this once I styled the button using css that targets the id that I've set in my props!
				</p>
			</div>
	</div>
</Button>
<Button label="Button Using CSS variables" let:pressed let:toggle --bg="red" --textColor="white" --borderRadius="0.25em">
	<div class="yes">
			<div class="container">
				<button on:click={toggle}>Close</button>
				<h1>The Modal is Open: <span style="color:red">{pressed}</span></h1>
				<p>
					This is a different modal with my Button (name pending) component!
				</p>
				<p>
					This is so cool! I made use of the fact that selte allows us to set css variables kinda like props
				</p>
			</div>
	</div>
</Button>
<Button label="Button Using CSS variables" let:pressed let:toggle --border="1px solid #1cc" --borderRadius="0.25em">
	<div class="yes">
			<div class="container">
				<button on:click={toggle}>Close</button>
				<h1>The Modal is Open: <span style="color:red">{pressed}</span></h1>
				<p>
					This is a different modal with my Button (name pending) component!
				</p>
				<p>
					This is so cool! I made use of the fact that selte allows us to set css variables kinda like props
				</p>
			</div>
	</div>
</Button>

<style>
	h1{
		margin:0px;
	}
	:global(body){
		margin:0;
		padding:0;
	}
	:global(button){
		display:block;
	}
	.yes{
		position:absolute;
		top:0;
		width:100%;
		height:100%;
		background-color: rgba(0,0,0,0.85);
		color:white;
		display:flex;
		align-items:center;
		justify-content:center;
	}
	.yes .container{
		box-sizing:border-box;
		background:white;
		color:black;
		width:75%;
		max-width:400px;
		padding:1em 0.5em;
		border-radius:1em;
	}
	:global(#button){
		background:black;
		color:white;
		font-weight:bold;
		font-size:large;
		border-radius:0.25em;
	}
</style>