# Experiments With Button Toggled Modals
I origially made this in svelte's [REPL](https://svelte.dev/repl/cdd69831aded4443a3aaae8384bf6cdd?version=3.52.0) so check it out there if you don't want to download this.

Wanted to explore a patten where the button and the modal exists in one place. I don't like the idea of try to maintain multiple isModalClosed
for cases where there are multiple modals.

As a result, I've created a Button component (better name pending) with Svelte to see how intuitive it'll be. The code is in `Button.svelte`. The whole goal was to make it reusable and allow for different styling. 

If you press the `Initial Test` button you should see a bunch of buttons that trigger modals but have some key differences.

While the buton component is really simple, one of the things I also wanted to expand on to make it so that the content can appear anywhere. The basic idea is that when the button is pressed I'd append the content in the slot into a different location. 

This is basically React's portal component. This was made possible thanks to Svelte actions where I can pass in the node and some parameters if I want to.

