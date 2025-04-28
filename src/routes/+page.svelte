<script lang="ts">
	import { Time } from '$lib/time.svelte';
	import SingleUnit from '../components/single-unit.svelte';
	import TimeSection from '../components/time-section.svelte';

	const time = new Time();
	const binaryValues = $derived(time.binaryValues);
</script>

<svelte:head>
	<title>Binary Clock</title>
</svelte:head>

<div class="flex h-full w-full flex-col items-center justify-center gap-12">
	<div
		class="hidden w-8/12 justify-between text-3xl font-bold md:flex lg:w-5/12 lg:max-w-6/12 lg:min-w-4/12"
	>
		{#each [{ name: 'h', value: 0 }, { name: 'm', value: 2 }, { name: 's', value: 4 }] as ai, i (ai.name + ai.value + i)}
			{@const first = binaryValues[ai.value]}
			{@const second = binaryValues[ai.value + 1]}

			<div class="space-y-10">
				<div class="grid grid-cols-2 gap-4">
					<SingleUnit item="0" value={ai.name} />
					<SingleUnit item="1" value={ai.name} />
				</div>
				<div class="flex gap-4">
					<TimeSection value={first} />
					<TimeSection value={second} />
				</div>
			</div>
		{/each}
	</div>
	<p class="visible p-2 text-center text-2xl text-amber-400 md:hidden">
		You have to use a larger screen to see the time.
	</p>

	<p class="text-4xl font-extrabold text-blue-500">Binary clock</p>
</div>
