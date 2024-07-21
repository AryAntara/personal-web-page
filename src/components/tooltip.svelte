<script lang="ts">
	export let content: string;
	export function onClick(evenet: FocusEvent): void {}

	function showToolTipText(event: MouseEvent) {
		const element = event.currentTarget as HTMLElement;
		if (!element) return;

		const tooltipElement = element.children.item(0);
		tooltipElement?.classList.remove('hidden');
	}
	function hideToolTipText(event: MouseEvent) {
		const element = event.currentTarget as HTMLElement;
		if (!element) return;

		const tooltipElement = element.children.item(0);
		tooltipElement?.classList.add('hidden');
	}
</script>

<button
	class="relative
    hover:underline hover:cursor-zoom-in
    "
	on:mouseover={(e) => showToolTipText(e)}
	on:focus={(e) => onClick(e)}    
	on:mouseleave={(e) => hideToolTipText(e)}
>
	<div class="tooltip absolute top-[-30px] right-0 hidden w-max px-2 bg-white text-gray-400 rounded border-2 border-navy/50 font-bold m-2">
		{content}
	</div>
	<slot />
</button>
