<script lang="ts">
	import { Time } from '$lib/time.svelte';

	const time = new Time();
	const binaryValues = $derived(time.binaryValues);
</script>

<svelte:head>
	<title>Binary Clock</title>
</svelte:head>

{#snippet EachNumber(item: string, value: number | string)}
	<div
		class:text-blue-500={item === '0'}
		class:text-white={item === '1'}
		class:bg-blue-700={item === '1'}
		class:bg-gray-700={item === '0'}
		class="grid aspect-square w-fit place-items-center rounded-full p-2"
	>
		{value}
	</div>
{/snippet}

{#snippet TimeSection(value: string)}
	{#if value}
		{@const items = value.split('')}
		<div class="flex flex-col gap-6">
			<div class="grid gap-4">
				{#each items as item, _idx (item + _idx)}
					{@const value = Math.pow(2, Math.abs(_idx - 3))}
					{@render EachNumber(item, value)}
				{/each}
			</div>
			<div class="grid aspect-square w-full place-items-center rounded-full p-2">
				{parseInt(value, 2)}
			</div>
		</div>
	{/if}
{/snippet}

<div class="flex h-full w-full flex-col items-center justify-center gap-12">
	<div
		class="hidden w-8/12 justify-between text-3xl font-bold md:flex lg:w-5/12 lg:max-w-6/12 lg:min-w-4/12"
	>
		{#each [{ name: 'h', value: 0 }, { name: 'm', value: 2 }, { name: 's', value: 4 }] as ai, i (ai.name + ai.value + i)}
			{@const first = binaryValues[ai.value]}
			{@const second = binaryValues[ai.value + 1]}

			<div class="space-y-10">
				<div class="grid grid-cols-2 gap-4">
					{@render EachNumber('0', ai.name)}
					{@render EachNumber('1', ai.name)}
				</div>
				<div class="flex gap-4">
					{@render TimeSection(first)}
					{@render TimeSection(second)}
				</div>
			</div>
		{/each}
	</div>
	<p class="visible p-2 text-center text-2xl text-amber-400 md:hidden">
		You have to use a larger screen to see the time.
	</p>

	<p class="text-4xl font-extrabold text-blue-500">Binary clock</p>
</div>
