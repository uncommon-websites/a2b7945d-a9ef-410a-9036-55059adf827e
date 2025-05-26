<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Rafael Morales",
      position: "Mining Operations Lead",
      company: "Industrias Andinas",
      quote:
        "With sensmore, our investment paid off within months. We've seen fewer breakdowns, smoother shifts, and our team trusts the system every day.",
      image: "/generated/image-a-hispanic-male-mining-executive-standin.webp"
    },
    {
      name: "Maya Carter",
      position: "Construction Project Director",
      company: "Apex Build",
      quote:
        "Rolling sensmore out across our sites was fast and simple. The support team actually listened and tailored the setup for us. It's proven its value many times over.",
      image: "/generated/image-a-black-female-construction-manager-at-a.webp"
    },
    {
      name: "Wei Zhang",
      position: "Automation Engineer",
      company: "UrbanTech Manufacturing",
      quote:
        "Efficiency is up, downtime is down, and the data is clear. sensmore gives us true insight and predictable results—worth every cent.",
      image: "/generated/image-an-east-asian-male-engineer-in-an-indust.webp"
    }
  ]}
/>

<CallToAction
	title="Intelligent machines. Operational insight. Results from day one."
	subtitle="No downtime. No disruption."
	description="Bring real-time awareness, advanced safety, and adaptable automation to your site—whether you're in mining, construction, agriculture, or defense. Our team handles installation and setup; your machines are productive from day one, with measurable impact in days—not months."
	imageSrc="/generated/image-a-joyful-industrial-worker-operating-a-l.webp"
	callsToAction={[
		{ href: '/contact', label: 'See your site in action', variant: 'primary' },
		{ href: '/get-started', label: 'Request demo', variant: 'secondary' }
	]}
/>

