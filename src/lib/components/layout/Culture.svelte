<script lang="ts">
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import { animate, stagger } from "motion";
	import { onMount } from "svelte";

	// Types
	export type Value = {
		title: string;
		description: string;
	};

	// Props
	const { values = [
  {
    title: 'Engineers first',
    description: 'We solve hard, physical problems with code and sensors—not spreadsheets. Real product work in every role.'
  },
  {
    title: 'Real outcomes over optics',
    description: 'If it doesn’t make our machines safer or smarter, it’s not worth shipping. We focus on field value—not vanity metrics.'
  },
  {
    title: 'Honest work with smart people',
    description: 'No corporate layers. No politics. Just mutual respect, technical common sense, and curiosity about how far we can push the frontier.'
  },
  {
    title: 'Diverse by default',
    description: 'We strive for a mix of backgrounds, ideas, and experiences—better outcomes come from open minds.'
  },
  {
    title: 'Ownership and support',
    description: 'Everyone has skin in the game. We help each other, give direct feedback, and care about team success.'
  }
]: { values: Value[] } = $props();

	let cards: HTMLElement[] = $state([]);

	onMount(() => {
		if (!cards.length) return;
		animate(
			cards,
			{
				y: ["1.5rem", 0],
				filter: ["blur(2px)", "blur(0px)"],
				opacity: [0, 1]
			},
			{
				duration: 0.3,
				ease: "easeOut",
				delay: stagger(0.1, {
					ease: "easeInOut"
				})
			}
		);
	});
</script>

<section class="bg-white dark:bg-gray-950">
	<div
		class="section-py section-px container mx-auto grid gap-8 [--gap:--spacing(8)] [--radius:var(--radius-2xl)]"
	>
		<SectionHeader title="Our culture." subtitle="The values that guide everything we do" />

		<div
			class="grid gap-(--gap)"
			style:grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))"
		>
			{#each values as value, i}
				<div
					bind:this={cards[i]}
					class="relative border-t border-gray-200 pt-4 dark:border-gray-900"
				>
					<!-- Content -->
					<div class="text-caption z-10">
						<div>
							<div class="text-headline mb-[1em]">{value.title}</div>
							<div class="text-body text-gray-500 dark:text-gray-400">{value.description}</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
