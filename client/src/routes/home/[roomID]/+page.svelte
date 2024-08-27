<script>
	import { page } from '$app/stores';
	import ChatBubbleLeft from '$lib/components/ChatBubbleLeft.svelte';
	import ChatBubbleRight from '$lib/components/ChatBubbleRight.svelte';
	import { onMount } from 'svelte';

	export let data;

	let roomID = $page.params.roomID;
    let domain = "localhost"

    // if(data.env == "container") domain = "server"

	let uri = `ws://${domain}:3000/ws?id=${data.user.username}&rooms=${roomID}`;
	console.log("uri :", uri)
    let text = ""

	$: messagesList = [];

	let ws;
	let height;

	// function handleResize() {
	// 	height = document.getElementById("messages").scrollHeight
	// }

	onMount(() => {
		$: height = document.getElementById("messages").scrollHeight
		
		// window.onresize = handleResize
		ws = new WebSocket(uri);

		ws.onopen = function () {
			console.log('Connected to room :', roomID);
		};

		ws.onmessage = function (event) {
            let mes = JSON.parse(event.data)
			console.log(mes);
            messagesList.push(mes)
            messagesList = messagesList
		};

        document.getElementById('messaggio').onkeydown = (e) => {
            if(e.key == "Enter") {
                document.getElementById('inviaMessaggio').click()
            }
        }

		document.getElementById('inviaMessaggio').onclick = () => {
			ws.send(text);
            text = ""
		};
	});
</script>

<main class="w-full h-full flex flex-col">
	<div class="flex-1 overflow-y-scroll" style="max-height: {height}px;" id="messages">
		{#each messagesList as message}
			{#if message.sender == data.user.username}
				<ChatBubbleRight username={message.sender} time="12:45" text={message.text} />
			{:else}
				<ChatBubbleLeft username={message.sender} time="12:45" text={message.text} />
			{/if}
		{/each}
	</div>
    <div class="py-2 px-1 flex gap-3 border-2 border-primary bg-primary bg-opacity-20">
        <input id="messaggio" name="messaggio" type="text" class="input input-bordered w-full" bind:value={text}>
        <button id="inviaMessaggio" class="btn">Invia</button>
    </div>
</main>
