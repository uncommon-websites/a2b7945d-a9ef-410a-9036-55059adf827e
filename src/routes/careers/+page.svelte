<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
	{
		title: "Shape machines that matter",
		description: "Bring physical AI to mining, agriculture, construction, and defense—real-world impact at global scale.",
		icon: IconBriefcase
	},
	{
		title: "Build breakthrough tech",
		description: "Work on next-level AI, sensor systems, and robotics—move fast, learn even faster.",
		icon: IconUsers
	},
	{
		title: "Growth, ownership, and recognition",
		description: "Early seat on a team moving real machines. Transparent progress, true ownership, and support to grow with top-tier investors.",
		icon: IconHeart
	}
];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
	{
		name: "David Chen",
		position: "Software Engineer",
		company: "Engineering Team",
		quote:
			"Everyone here genuinely cares about sharing knowledge and lifting each other up. The inclusivity and openness make you feel at home from day one.",
		image:
			"/generated/image-professional-headshot-of-a-male-software.webp"
	},
	{
		name: "Priya Sharma",
		position: "Product Designer",
		company: "Design Team",
		quote:
			"sensmore invests in my growth—not just as a designer, but as a future leader. I am trusted to take on ambitious projects and learn every day.",
		image:
			"/generated/image-professional-headshot-of-a-south-asian-w.webp"
	},
	{
		name: "Marcus Johnson",
		position: "Marketing Manager",
		company: "Marketing Team",
		quote:
			"The work environment is collaborative and flexible, and the support from leadership gives me confidence to tackle new challenges with my team.",
		image:
			"/generated/image-professional-headshot-of-a-black-male-ma.webp"
	}
];

	const processSteps = [
  {
    step: 1,
    title: "Apply online",
    description: "Send us a CV or your profile—we’re especially interested in previous project or product work."
  },
  {
    step: 2,
    title: "Call with the team",
    description: "We’ll set up a 30-minute call to understand your goals, share our mission, and see if it’s a fit both ways."
  },
  {
    step: 3,
    title: "Technical deep dive",
    description: "For technical roles, we run short and focused problem sessions—realistic, not riddles. Non-technical roles will have a domain-relevant case study instead."
  },
  {
    step: 4,
    title: "Final chat + offer",
    description: "You’ll meet co-founders and others you'd directly work with. You'll get clarity on the role and offer details within a few days."
  }
];

	const values = [
		{
			icon: IconHeart,
			title: "Passion",
			description: "We're driven by a shared passion for innovation and excellence."
		},
		{
			icon: IconUsers,
			title: "Collaboration",
			description: "We believe in teamwork and collaboration to achieve great things."
		},
		{
			icon: IconGlobe,
			title: "Global Impact",
			description: "We're committed to making a positive impact on the world."
		}
	];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Build the future of intelligent machines"
	subtitle="Join a collaborative team shaping how the world's toughest machinery thinks and moves"
	imageSrc="/generated/image-a-diverse-group-of-professionals-collabo.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Build your career while making an impact" />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
