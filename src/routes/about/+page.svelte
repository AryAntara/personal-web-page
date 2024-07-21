<script lang="ts">
	import ListEducation from '../../components/about/listEducation.svelte';
	import ListWorkExperince from '../../components/about/listWorkExperience.svelte';
	import Paragraph from '../../components/paragraph.svelte';
	import type { Education, WorkOfExperience } from '$lib/types';

	let educationEntries: Education[] = [
		{
			institution: 'UNIVERSITAS HINDU INDONESIA',
			description: `Relevant Courses: Programming, Web-Based Programming, Mobile-Based Programming, Information System Project Management, Information System Analysis and Design, and Network and Server Management.`,
			years: ['2022', 'Now'],
			location: 'Denpasar',
			logoUrl: '/images/unhi_logo.png',
			mapLink:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.607604498217!2d115.2411176758025!3d-8.633615791412767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f9bedcf9601%3A0x308ca0bd284795eb!2sUniversitas%20Hindu%20Indonesia!5e0!3m2!1sid!2sid!4v1721445334899!5m2!1sid!2sid'
		},
		{
			institution: 'SMAN 2 LUWU TIMUR',
			description: `Relevant Courses: Physics, and Mathematics.`,
			years: ['2019', '2022'],
			location: 'Luwu Timur',
			logoUrl: '/images/smada_lutim_logo.jpg',
			mapLink:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7974.253143173021!2d120.79754128293528!3d-2.5785142867860427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d91aea49e30db43%3A0xbfba18cca20f42e2!2sSMA%20Negeri%202%20Luwu%20Timur!5e0!3m2!1sid!2sid!4v1721443823793!5m2!1sid!2sid'
		}
	];

	let workingEntries: WorkOfExperience[] = [
		{
			institution: 'RED SYSTEM',
			descriptions: [
				`Developed and maintained web applications using JavaScript, HTML, CSS, Laravel, and MySql.`,
				`Collaborated with cross-functional teams to define, design, and ship new features.`
			],
			years: ['2023', 'Now'],
			location: 'Denpasar',
			logoUrl: '/images/redsystem-logo.png',
			mapLink:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.113319517932!2d115.24620017580288!3d-8.680772791367334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2415b2e1bb0b3%3A0x6176343ea33b149e!2sRED%20STUDIO%20PHOTO!5e0!3m2!1sid!2sid!4v1721563008195!5m2!1sid!2sid'
		}
	];
</script>

<div class="w-[100%] mb-4">
	<div class="border-b-2 border-navy pt-2 font-bold text-xl text-navy w-max">About me</div>
	<Paragraph
		>I'm I Komang Ary Antara, originally from East Luwu, South Sulawesi, but Bali is my current
		home. I double as a student and a Web Developer at Pt. Guna Teknologi Nusantara. Laravel is my
		current framework of choice, but I'm also familiar with PHP, HTML, CSS, Svelte, MySQL,
		Javascript, And Typescript.</Paragraph
	>
</div>
<div
	class="
    w-[100%]
    xl:w-1/2 xl:pr-8
    "
>
	<div class="border-b-2 border-navy pt-2 font-bold text-xl text-navy w-max">Education</div>
	<div>
		{#each educationEntries as educationEntry}
			<ListEducation
				logoUrl={educationEntry.logoUrl}
				mapLink={educationEntry.mapLink}
				educationIntitution={educationEntry.institution}
				yearsOfEducation={educationEntry.years}
				description={educationEntry.description}
				location={educationEntry.location}
			/>
		{/each}
	</div>
</div>

<div
	class="
w-[100%]
xl:w-1/2
"
>
	<div class="border-b-2 border-navy pt-2 font-bold text-xl text-navy w-max">
		Working Experience
	</div>
	<div>
		{#each workingEntries as workingEntry}
			<ListWorkExperince
				logoUrl={workingEntry.logoUrl}
				mapLink={workingEntry.mapLink}
				intitution={workingEntry.institution}
				yearsOfWorking={workingEntry.years}
				descriptions={workingEntry.descriptions}
				location={workingEntry.location}
			/>
		{/each}
	</div>
</div>
