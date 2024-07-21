<script lang="ts">
	import '../app.css';
	import Nav from '../components/partials/navbar.svelte';
	import Footer from '../components/partials/footer.svelte';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import {
		BiLogoGmail,
		BiLogoFacebook,
		BiLogoLinkedin,
		BiLogoWhatsapp
	} from 'svelte-icons-pack/bi';

	import type { IconType } from 'svelte-icons-pack';
	import type { Menu, Contact } from '$lib/types';

	let menuEntries: Menu[] = [
			{
				path: '/home',
				name: 'Home'
			},
			{
				path: '/about',
				name: 'About'
			},
			{
				path: '/projects',
				name: 'Projects'
			}
		],
		contactEntries: Contact[] = [
			{
				link: 'mailto://ikomangaryantara@gmail.com',
				icon: BiLogoGmail,
				name: 'Gmail'
			},
			{
				link: 'https://web.facebook.com/komang11111',
				icon: BiLogoFacebook,
				name: 'Facebook'
			},
			{
				link: 'https://wa.me/6281911001315',
				icon: BiLogoWhatsapp,
				name: 'Whatsapp'
			},
			{
				link: 'https://www.linkedin.com/in/komangary',
				icon: BiLogoLinkedin,
				name: 'Linkedin'
			}
		];

	const menu = writable(menuEntries);

	setContext('menu', menu);
</script>

<Nav {menuEntries} activePath={$page.url.pathname} contacts={contactEntries} />
<div
	class="
	mt-8 justify-left mx-8
	md:mx-24
	lg:mx-40 lg:flex lg:flex-wrap
	xl:mx-50
"
>
	<slot />
</div>
<Footer></Footer>
