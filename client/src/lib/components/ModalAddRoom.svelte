<script>
    import ErrorAlert from "./ErrorAlert.svelte"

    export let addFunction
    export let validForm

    let roomID = ""
    let roomName = ""

    $: validForm = true;

    const checkValue = (e) => {
        if( roomID == "" || roomName == "") {
            validForm = false
        } else {
            validForm = true
            document.getElementById("addRoomModal").close()
        }
    }

</script>

<dialog id="addRoomModal" class="modal">
	<div class="modal-box">
		<form id="addRoomForm" on:submit={addFunction}>
            <div class="flex flex-col gap-3">
                {#if !validForm}
                    <ErrorAlert message="I campi non possono essere vuoti"></ErrorAlert>
                {/if}
                <input type="text" bind:value={roomID} name="roomID" class="input input-bordered w-full" placeholder="Insert RoomID to join a room">
                <input type="text" bind:value={roomName} name="roomName" class="input input-bordered w-full" placeholder="Choose the name for the room">

                <button class="btn w-full" on:click={checkValue}>+ Add</button>
            </div>
            
        </form>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
