<script>
	import PasswordInput from './PasswordInput.svelte';
	import UserInput from './UserInput.svelte';
    import ErrorAlert from './ErrorAlert.svelte';

    import { enhance } from '$app/forms'

    export let form
</script>

<div class="w-1/3 gap-3 p-3 glass">
	<form action="?/login" method="post" use:enhance>
		<div class="flex flex-col gap-5">
            {#if form?.notVerified} <ErrorAlert message = "Errore durante il login" /> {/if}
            <UserInput />
            <PasswordInput></PasswordInput>			
            <div>
                <button class="btn btn-primary w-full">Login</button>
                Non sei ancora registrato? <a href="/" class="text-teal-600 underline">Registrati</a>
            </div>

		</div>
	</form>
</div>
