<script>
	import ErrorAlert from './ErrorAlert.svelte';
	import { enhance } from '$app/forms';

	export let createFunction;
	export let validForm;
	export let form;

	let roomName = '';

	$: validForm = true;

	const checkValue = (e) => {
		if (roomName == '') {
			validForm = false;
		} else {
			validForm = true;
			document.getElementById('createRoomModal').close();
		}
	};
</script>

<dialog id="createRoomModal" class="modal">
	<div class="modal-box">
		<form action="?/createRoom" method="post" id="createRoomForm" on:submit={createFunction} use:enhance>
			<div class="flex flex-col gap-3">
				{#if !validForm}
					<ErrorAlert message="I campi non possono essere vuoti"></ErrorAlert>
				{/if}
				{#if form?.message}
					<ErrorAlert message="{form.message}"></ErrorAlert>
				{/if}
				<input
					type="text"
					bind:value={roomName}
					name="roomName"
					class="input input-bordered w-full"
					placeholder="Choose the name for the room"
				/>

				<button class="btn w-full" on:click={checkValue}>+ Create</button>
			</div>
		</form>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
