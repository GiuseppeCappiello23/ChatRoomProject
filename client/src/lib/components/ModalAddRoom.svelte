<script>
    export let addFunction
</script>

<dialog id="addRoomModal" class="modal">
	<div class="modal-box">
		<form id="addRoomForm" on:submit={addFunction}>
            <div class="flex flex-col gap-3">
                <input type="text" name="roomID" class="input input-bordered w-full" placeholder="Insert RoomID to join a room">
                <input type="text" name="roomName" class="input input-bordered w-full" placeholder="Choose the name for the room">

                <button class="btn w-full">Join</button>
            </div>
            
        </form>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
