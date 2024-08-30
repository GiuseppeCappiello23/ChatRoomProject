<script>
	import ErrorAlert from './ErrorAlert.svelte';
	import { enhance } from '$app/forms';

	export let addFunction;
	export let validForm;
	export let form;

	let roomName = '';

	$: validForm = true;

	const checkValue = (e) => {
		if (roomName == '') {
			validForm = false;
		} else {
			validForm = true;
			document.getElementById('addRoomModal').close();
		}
	};
</script>

<dialog id="addRoomModal" class="modal">
	<div class="modal-box">
		<form action="?/createRoom" method="post" id="addRoomForm" on:submit={addFunction} use:enhance>
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

				<button class="btn w-full" on:click={checkValue}>+ Add</button>
			</div>
		</form>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
