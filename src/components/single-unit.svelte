<script lang="ts">
	type TProps = {
		item: string;
		value: number | string;
	};

	let { item, value }: TProps = $props();
</script>

<div
	class:text-blue-500={item === '0'}
	class:text-white={item === '1'}
	class:bg-blue-700={item === '1'}
	class:bg-gray-700={item === '0'}
	class="grid aspect-square w-fit place-items-center rounded-full p-2"
>
	{value}
</div>
