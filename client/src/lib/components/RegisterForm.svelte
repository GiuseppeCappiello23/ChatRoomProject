<script>
	import PasswordInput from './PasswordInput.svelte';
	import UserInput from './UserInput.svelte';
    import ErrorAlert from './ErrorAlert.svelte';

    import { enhance } from '$app/forms'

    export let form
</script>

<div class="w-1/3 gap-3 p-3 glass">
	<form action="?/register" method="post" use:enhance>
		<div class="flex flex-col gap-5">
            {#if form?.missing} <ErrorAlert message = "Email non corretta" /> {/if}
            {#if form?.notMatch} <ErrorAlert message = "Le password non coincidono" /> {/if}
            {#if form?.fail} <ErrorAlert message = "Internal Error" /> {/if}
            <UserInput />
            <PasswordInput></PasswordInput>
            <PasswordInput name="passwordConfirm" placeholder="Confirm Password"/>
			
            <div>
                <button class="btn btn-primary w-full">Sign Up</button>
                Sei già registrato? Effettua il <a href="/" class="text-teal-600 underline">log in</a>
            </div>

		</div>
	</form>
</div>
