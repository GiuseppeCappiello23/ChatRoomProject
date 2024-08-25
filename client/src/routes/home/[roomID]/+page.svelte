<script>
    import { page } from '$app/stores';
    
    export let data

    let roomID = $page.params.roomID
</script>

ciao {data.user.username} nella stanza {roomID}