<script lang="ts">
	import { Time } from '$lib/time.svelte';
	import SingleUnit from '../components/single-unit.svelte';
	import TimeSection from '../components/time-section.svelte';

	const time = new Time();
	const timesSections = $derived(time.timesSections);
	const names = ['H', 'M', 'S'];

	const getRandomInt = () => {
		// Generate a random integer between 0 and 1
		return Math.floor(Math.random() * 2).toString();
	};
</script>

<svelte:head>
	<title>Binary Clock</title>
</svelte:head>

<div class="flex h-full w-full flex-col items-center justify-center gap-12">
	<div
		class="hidden w-8/12 justify-between text-3xl font-bold md:flex lg:w-5/12 lg:max-w-6/12 lg:min-w-4/12"
	>
		{#each timesSections as times, idx (times.join('-') + idx)}
			<div class="space-y-10">
				<div class="grid grid-cols-2 gap-4">
					<SingleUnit item={getRandomInt()} value={names[idx]} />
					<SingleUnit item={getRandomInt()} value={names[idx]} />
				</div>
				<div class="flex gap-4">
					{#each times as time, i (i + time)}
						<TimeSection value={time} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<p class="visible p-2 text-center text-2xl text-amber-400 md:hidden">
		You have to use a larger screen to see the time.
	</p>

	<p class="text-4xl font-extrabold text-blue-500">Binary clock</p>
</div>
