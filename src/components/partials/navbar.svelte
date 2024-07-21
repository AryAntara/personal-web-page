<script lang="ts">
	import { onMount } from 'svelte';
	import { BiSolidHandRight, BiSolidDownArrow, BiSolidUpArrow } from 'svelte-icons-pack/bi';
	import { Icon } from 'svelte-icons-pack';
	import type { Contact, Menu } from '$lib/types';
	export let menuEntries: Menu[];
	export let activePath: string;
	export let contacts: Contact[];

	let dropdownElement: Element;
	let buttonElement: Element;

	function toggleDropdownContacts(event: MouseEvent) {
		if (!buttonElement) return;

		const downArrowIconElement = buttonElement.querySelector('.close'),
			upArrawIconElement = buttonElement.querySelector('.open'),
			dropdownClassList = dropdownElement.classList,
			isStateOpen = dropdownClassList.contains('opened');

		if (!isStateOpen) {
			// make button down hidden, then show the up arrow icon and dropdown
			dropdownClassList.remove('hidden');
			dropdownClassList.add('opened');
			downArrowIconElement?.classList.remove('hidden');
			upArrawIconElement?.classList.add('hidden');
			return;
		}

		// make dropdown and up icon hidden, then showing the down arrow icon
		dropdownClassList.add('hidden');
		dropdownClassList.remove('opened');
		downArrowIconElement?.classList.add('hidden');
		upArrawIconElement?.classList.remove('hidden');
	}
</script>

<div
	class="
	flex flex-wrap justify-center items-top w-auto h-max mx-auto
	xl:flex-wrap xl:mx-40 xl:justify-between xl:mt-8
	lg:flex-wrap lg:mx-40 lg:justify-center lg:mt-8
	md:flex-wrap md:mx-32 md:justify-center
	sm:flex-wrap sm:mx-32 sm:justify-center
	xs:flex-wrap xs:mx-0 xs:justify-center
	"
>
	<div
		class="
	rounded-xl h-max flex border-navy p-2 mt-4
	lg:p-4 lg:boredr-2
	md:p-4 md:border-2
	"
	>
		<div class="rounded-full bg-navy w-[100px] h-[100px] overflow-hidden border-2 border-[#f1f1f1] shadow-lg">
			<img src="/images/profile_photo.jpeg" class="realtive top-40" alt="" />
		</div>
		<div class="flex flex-col justify-center ml-4">
			<p class="font-bold text-2xl text-gray-600 font-inter">I Komang Ary Antara</p>
			<p class="text-gray-600">@github.com/aryantara</p>
			<div class="flex items-center text-navy text-md w-max relative">
				<button
					bind:this={buttonElement}
					class="
					flex items-center p-2 my-2 border-b-2 border-navy
					hover:bg-navy hover:text-white hover:rounded"
					on:click={(event) => toggleDropdownContacts(event)}
				>
					<span class="mr-2 font-bold">Contacts</span>
					<Icon src={BiSolidUpArrow} className="close hidden"></Icon>
					<Icon src={BiSolidDownArrow} className="open"></Icon>
				</button>

				<div
					bind:this={dropdownElement}
					class="absolute z-10 bg-gray-100 rounded-xl font-bold shadow-lg top-14 hidden p-4 border-l-4 border-r-4 border-navy"
				>
					<ul class="flex w-max">
						{#each contacts as contact}
							<li
								class="
								w-100%
								p-2
								hover:bg-navy hover:text-white"
							>
								<a href={contact.link} target="_blank" class="flex items-center justify-center">
									<Icon src={contact.icon} className="mr-1" size={24} />
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div
		class="
	mt-4
	md:mt-4
	sm:mt-4
	lg:mt-0
	"
	>
		<div
			class="
			flex items-center h-max m-4 w-[300px]
			lg:overflow-x-hidden lg:w-max
			md:overflow-x-hidden lg:w-max
			sm:overflow-x-hidden sm:w-max
		"
		>
			{#each menuEntries as menuEntry}
				{@const isActive = activePath == menuEntry.path}
				<a
					href={menuEntry.path}
					id="nav-{menuEntry.name.toLowerCase()}"
					class="p-2 px-4 {isActive
						? 'bg-navy rounded-md'
						: ''} border-navy flex items-center border-2 border-t-transparent border-r-transparent border-l-transparent border-b-navy ml-4
						hover:border-navy hover:rounded"
				>
					<!-- <Icon src={menuEntry.icon} size={24} className="" color="text-white"></Icon> -->
					<p class="font-bold font-inter text-center text {isActive ? 'text-white' : 'text-navy'}												">
						{menuEntry.name}
					</p>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes rotate {
		0% {
			transform: rotate(175deg);
		}
		25% {
			transform: rotate(260deg);
		}

		50% {
			transform: rotate(260deg);
		}

		100% {
			transform: rotate(175deg);
		}
	}

	.scroll-indicator {
		rotate: 45deg;
		animation: rotate 2s infinite;
	}	
</style>
