<script>
    import NavbarLogged from '$lib/components/NavbarLogged.svelte';

    export let data;

</script>

<NavbarLogged user={data.user}/>