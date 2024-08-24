<script>
	import PasswordInput from './PasswordInput.svelte';
	import UserInput from './UserInput.svelte';
</script>

<div class="w-1/3 h-1/3 gap-3 p-3 glass">
	<form action="" method="post">
		<div class="flex flex-col gap-5">
            <UserInput />
			<PasswordInput />

            <div>
                <button class="btn btn-primary w-full">Log In</button>
                <p>Non sei ancora registrato? <a href="/register" class=" text-teal-600 underline">Registrati</a></p>
            </div>
		</div>
	</form>
</div>
