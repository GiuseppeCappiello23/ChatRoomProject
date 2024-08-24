<script>
	import Navbar from "../../lib/components/Navbar.svelte";
	import RegisterForm from "../../lib/components/RegisterForm.svelte";
    import ErrorAlert from "../../lib/components/ErrorAlert.svelte";

     /** @type {import('./$types').ActionData} */
    export let form
</script>

<main class="flex flex-col h-screen">
	<Navbar></Navbar>

    <div class="flex-1 justify-center items-center">
        <div id="registerForm" class="w-full h-full flex items-center justify-center">
            <RegisterForm form={form} />
        </div>
    </div>
</main>
