<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="w-screen h-screen grid place-items-center dark:bg-gray-900 dark:text-white">
{@render children()}
</div>
