<script>
	export let roomName;
	export let roomID;

	const goToRoom = (event) => {
		if (window.location.pathname != '/home') {
			let url = window.location.toString().split('/');
			url[url.length - 1] = roomID;
			window.location = url.join('/');
		} else {
			window.location += '/' + roomID;
		}
	};

	const handleClick = (event) => {
		let closestDiv = event.target.closest('div');
		let input = closestDiv.querySelector('input');
        input.select()
		navigator.clipboard.writeText(input.value);
		alert('Testo copiato: ' + input.value);
	};
</script>

<dialog id="shareRoomModal{roomID}" class="modal">
	<div class="modal-box gap-3">
		<h3 class="text-lg font-bold">Share your id!</h3>
		<div class="flex gap-2">
			<div name="parent" class="w-full flex gap-2 mt-2">
				<input type="text" class="input input-bordered w-full" bind:value={roomID} disabled />
				<button class="btn btn-ghost" on:click={handleClick}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="py-5 px-2 border border-b-primary cursor-pointer flex justify-between"
	data-room-id={roomID}
	on:click={goToRoom}
>
	<div class="flex items-center">
		{roomName}
	</div>
	<div>
		<div
			class="btn btn-ghost"
			onclick="event.stopPropagation(); shareRoomModal{roomID}.showModal()"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
				/>
			</svg>
		</div>
	</div>
</div>
