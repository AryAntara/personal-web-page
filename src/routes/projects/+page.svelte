<script lang="ts">
	import Paragraph from '../../components/paragraph.svelte';
	import ListProject from '../../components/project/listProject.svelte';
	import {
		SiLaravel,
		SiMysql,
		SiPhp,
		SiBun,
		SiTypescript,
		SiHono,
		SiCodeigniter
	} from 'svelte-icons-pack/si';
	import type { Project, Technology } from '$lib/types';

	let php: Technology = {
			name: 'PHP',
			icon: SiPhp,
			color: '#484C89'
		},
		laravel: Technology = {
			name: 'Laravel',
			icon: SiLaravel,
			color: 'red'
		},
		mysql: Technology = {
			name: 'Mysql',
			icon: SiMysql,
			color: '#00758f'
		},
		bun: Technology = {
			name: 'Bun',
			icon: SiBun,
			color: '#fbf0df'
		},
		typescript: Technology = {
			name: 'Typescript',
			icon: SiTypescript,
			color: '#3178C6'
		},
		hono: Technology = {
			name: 'Hono',
			icon: SiHono,
			color: '#fb5c13'
		},
		codeigniter: Technology = {
			name: 'CodeIgniter',
			icon: SiCodeigniter,
			color: '#f01c04'
		};

	let projectEntries: Project[] = [
		{
			name: 'Forstaff',
			technologies: [laravel, mysql, php],
			description: `
                ForStaff is a  employee management system for managing employee information, attendance, and performance evaluations.`,
			isPrivate: true
		},
		{
			name: 'Emil Commerce (BE)',
			technologies: [bun, mysql, typescript, hono],
			description: `A Rest API for product, stock, user, user address, and payment management in an e-commerce platform.`,
			isPrivate: false,
			sourceLink: 'https://github.com/aryantara/emil-furniture-backend'
		},
		{
			name: 'Wood Craving Course',
			technologies: [mysql, php, codeigniter],
			description: `A simple booking system for scheduling wood carving courses. Users can easily find, and book a course.`,
			isPrivate: false,
			sourceLink: 'https://github.com/aryantara/sistem-booking-course-wood-craving'
		},
		{
			name: 'Stock Management System',
			technologies: [laravel, mysql, php],
			description:
				'A Simple stok management system. In this sistem can manageme product, stock, and user.',
			isPrivate: false,
			sourceLink: 'https://github.com/aryantara/sistem-manajemen-stok'
		}
	];
</script>

<div class="w-[100%] mb-4">
	<div class="border-b-2 border-navy pt-2 font-bold text-xl text-navy w-max">
		Project I Was Made
	</div>

	<Paragraph
		>Welcome to the Projects section of my personal portfolio. As a web developer, I have created
		several projects that highlight my expertise in building functional and visually appealing web
		applications.</Paragraph
	>
</div>
<div
	class="
w-[100%] mb-4 grid grid-cols-1 mt-8 justify-center
md:justify-between md:grid md:grid-cols-2
xl:grid-cols-3
"
>
	{#each projectEntries as projectEntry}
		<ListProject
			isPrivate={projectEntry.isPrivate}
			sourceLink={projectEntry.sourceLink}
			name={projectEntry.name}
			technologies={projectEntry.technologies}
			description={projectEntry.description}
		></ListProject>
	{/each}
</div>
