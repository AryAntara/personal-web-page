<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { BiMapPin, BiCollapse } from 'svelte-icons-pack/bi';
	import Map from '../map.svelte';

	export let intitution: string;
	export let yearsOfWorking: string[];
	export let descriptions: string[];
	export let location: string;
	export let mapLink: string;
	export let logoUrl: string;

	function openMapPreview(event: FocusEvent) {
		const element = event.currentTarget as HTMLElement;
		if (!element) return;

		const mapElement = element.nextElementSibling;
		mapElement?.classList.remove('hidden');

		// open map backdrop
		mapElement?.nextElementSibling?.classList.remove('hidden');
	}

	function closeMapPreview(event: FocusEvent) {
		const backDropElement = event.currentTarget as HTMLElement;
		if (!backDropElement) return;

		const mapElement = (backDropElement.parentElement?.childNodes.item(0) as Element)
			.nextElementSibling?.nextElementSibling;

		mapElement?.classList.add('hidden');

		// close map backdrop
		backDropElement.classList.add('hidden');
	}

	function closeMapFromButton(event: MouseEvent) {
		const closeButtonElement = event.currentTarget as HTMLElement;
		if (!closeButtonElement) return;

		const mapElement = closeButtonElement.parentElement?.parentElement;
		mapElement?.classList.add('hidden');

		// close map backdrop
		mapElement?.nextElementSibling?.classList.add('hidden');
	}
</script>

<div class="mt-4 flex flex-col items-start">
	<div class="flex items-center">
		<p class="font-inter text-md py-2 px-4 font-bold bg-navy text-white">
			{intitution}
		</p>
		<img
			src={logoUrl}
			alt=""
			class="h-[30px] w-[auto] object-cover rounded-full shadow-lg mx-[-12px] bg-white p-2"
		/>
	</div>

	<div class="flex justify-between items-center mt-2 relative">
		<span class="font-bold text-md text-gray-500">{yearsOfWorking.join(' - ')} </span>

		<button on:click={(e) => openMapPreview(e)} class="hover:underline">
			<div class="ml-4 flex items-center">
				<Icon src={BiMapPin} size={24} className="fill-gray-500"></Icon>
				<span class="font-bold text-md text-gray-500 mx-2">{location}</span>
			</div>
		</button>

		<div
			class="absolute bg-white lg:top-[-300px] lg:left-[200px] hidden border-2 border-navy hidden map z-10 rounded-md"
		>
			<div class="font-bold text-white bg-navy text-center p-4">
				Map Of {intitution}
			</div>
			<Map width={300} height={300} src={mapLink} />
			<div class="bg-navy">
				<button
					class="p-2 text-red-400 font-bold flex items-center align-middle"
					on:click={(e) => closeMapFromButton(e)}
				>
					<Icon src={BiCollapse} size={24} />
				</button>
			</div>
		</div>

		<button
			class="fixed w-screen h-screen bg-gray-500/50 hidden top-0 left-0"
			on:click={(e) => closeMapPreview(e)}
		></button>
	</div>

	<ul class="mt-2 list-disc pl-4">
		{#each descriptions as description}
			<li class="text-left text-gray-600 mb-2 text-lg">
				{description}
			</li>
		{/each}
	</ul>
</div>
