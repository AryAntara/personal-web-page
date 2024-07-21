<script lang="ts">
	import Tooltip from '../tooltip.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { BiSolidLock, BiSolidFolderOpen } from 'svelte-icons-pack/bi';
	import type { Technology } from '$lib/types';
	export let name: string,
		technologies: Technology[],
		description: string,
		isPrivate: boolean,
		sourceLink: string = '';
</script>

<div
	class="
    w-[100%] h-auto border-2 border-navy rounded-md p-4 project mt-4
    hover:shadow-lg
    md:mr-0 md:w-auto md:mr-4
    "
>
	<div class="flex justify-between">
		<span class="font-inter font-bold text-lg text-navy">{name}</span>
		{#if isPrivate}
			<Tooltip content="The project was privated">
				<Icon src={BiSolidLock} size={32} className="fill-navy"></Icon>
			</Tooltip>
		{:else}
			<a href={sourceLink} target="_blank">
				<Icon src={BiSolidFolderOpen} size={32} className="fill-navy"></Icon>
			</a>
		{/if}
	</div>

	<p class="text-gray-600 mt-4 mb-4">
		<span>{description}</span>
	</p>
	<p class="font-bold text-gray-600">Created With</p>
	<div class="flex">
		{#each technologies as technology}
			<Tooltip content={technology.name}>
				<div class="border-2 border-gray-200 p-2 m-2 rounded shadow-lg">
					<Icon src={technology.icon} size={32} color={technology.color}></Icon>
				</div>
			</Tooltip>
		{/each}
	</div>
</div>

<style>
	.project:hover {
		animation: animate-border 4s infinite;
		/* cursor: ; */
	}

	@keyframes animate-border {
		0% {
			border-right-color: var(--navy);
			border-bottom-color: var(--navy);
			border-left-color: var(--grey);
			border-top-color: var(--grey);
		}
		25% {
			border-left-color: var(--navy);
			border-top-color: var(--navy);
			border-right-color: var(--grey);
			border-bottom-color: var(--grey);
		}
		50% {
			border-right-color: var(--navy);
			border-bottom-color: var(--navy);
			border-left-color: var(--grey);
			border-top-color: var(--grey);
		}
		75% {
			border-left-color: var(--navy);
			border-top-color: var(--navy);
			border-right-color: var(--grey);
			border-bottom-color: var(--grey);
		}
		100% {
			border-right-color: var(--navy);
			border-bottom-color: var(--navy);
			border-left-color: var(--grey);
			border-top-color: var(--grey);
		}
	}
</style>
