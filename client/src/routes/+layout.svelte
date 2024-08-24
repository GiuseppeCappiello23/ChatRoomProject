<script>
	import { onMount } from 'svelte';
	import '../app.css';

    let themeMap = {
        true : "nord",
        false : "dim"
    }

	onMount(() => {
		if (localStorage.getItem('theme')) {
			document.documentElement.setAttribute('data-theme', themeMap[localStorage.getItem('theme')]);
		}
	});

</script>

<slot />
