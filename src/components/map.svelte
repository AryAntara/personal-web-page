<script lang="ts">
	export let src = '';
	export let width: number;
	export let height: number;
</script>

<iframe
	title="A Prview Of Map"
	{src}
	{width}
	{height}
	style="border:0;"
	allowfullscreen={true}
	loading="lazy"
	referrerpolicy="no-referrer-when-downgrade"
></iframe>
