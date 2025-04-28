<script lang="ts">
	import SingleUnit from './single-unit.svelte';

	type TProps = {
		value: string | undefined;
	};
	let { value }: TProps = $props();
</script>

{#if value}
	{@const items = value.split('')}
	<div class="flex flex-col gap-6">
		<div class="grid gap-4">
			{#each items as item, _idx (item + _idx)}
				{@const value = Math.pow(2, Math.abs(_idx - 3))}
				<SingleUnit {item} {value} />
			{/each}
		</div>
		<div class="grid aspect-square w-full place-items-center rounded-full p-2">
			{parseInt(value, 2)}
		</div>
	</div>
{/if}
