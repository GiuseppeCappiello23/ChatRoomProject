<script>
	import LoginForm from "../lib/components/LoginForm.svelte";
    import Navbar from "../lib/components/Navbar.svelte";

    export let form
</script>

<main class="flex flex-col h-screen">
	<Navbar></Navbar>

    <div class="flex-1 justify-center items-center">
        <div id="loginForm" class="w-full h-full flex items-center justify-center">
            <LoginForm {form}/>
        </div>
    </div>
</main>
