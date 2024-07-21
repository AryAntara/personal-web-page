<script lang="ts">
	export let className: string = "";
</script>

<p class="mt-4 text-lg border-l-2 pl-4 border-navy text-gray-600 pr-4 {className}">
	<slot />
</p>
