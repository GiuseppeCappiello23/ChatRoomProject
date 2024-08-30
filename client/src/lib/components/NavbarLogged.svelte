<script>
    import ThemeController from "./ThemeController.svelte";
    import Avatar from "./Avatar.svelte";

    export let user
</script>

<div class="navbar bg-primary text-primary-content flex justify-between">
    <button class="btn btn-ghost text-xl">ChatRoom</button>
    <div class="flex gap-6">
        <ThemeController/>
        <Avatar/>
    </div>
    
</div>