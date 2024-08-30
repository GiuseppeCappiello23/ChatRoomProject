<!-- <script>
    
</script>
--> 
<script>
    import NavbarLogged from '$lib/components/NavbarLogged.svelte';
    import ModalAddRoom from '../../lib/components/ModalAddRoom.svelte';
    import RoomCard from '../../lib/components/RoomCard.svelte';
    
    
    export let data;
    export let form;
    $: share = ""

    function updateList(list, newElements) {
        newElements.forEach(({ id, roomName }) => {
            list.push({ id, roomName })
        })
    }

    console.log(data);
    $: roomsList = data.user.rooms.items
    
    // updateList(roomsList, )
    // roomsList = roomsList

    const addRoom = (event) => {
        event.preventDefault();
        const formObj = Object.fromEntries(new FormData(event.target))

        if(formObj.roomName.trim() != "") {
            roomsList.push(formObj)
            roomsList = roomsList
        }
    }
</script>

<ModalAddRoom addFunction={addRoom} form={form}/>

<main class="flex flex-col h-screen">
	<NavbarLogged user={data.user}/>

    <div class="flex-1">
        <main class="w-full h-full flex">
            <div class="flex flex-col w-1/5 min-w-[260px] h-full overflow-y-auto border-2 border-transparent border-r-primary">
                <div id="myRooms">
                    {#each roomsList as room}
                        <RoomCard
                            roomName = {room.roomName}
                            roomID = {room.id}
                        />
                    {/each}
                </div>
                <div class="p-5 flex justify-center items-center">
                    <button class="btn btn-primary" onclick="addRoomModal.showModal()">+ Aggiungi</button>
                </div>
            </div>
    
            <div class="flex flex-1 justify-center items-center">
                <slot/>
            </div>
        </main>
        
    </div>
</main>
