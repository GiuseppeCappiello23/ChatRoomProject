<script>
    export let roomName
    export let roomID

    const goToRoom = (event) => {
        window.location += "/" + roomID 
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="py-5 px-2 border border-b-primary cursor-pointer" data-room-id="{roomID}" on:click={goToRoom}>
    {roomName}
</div>