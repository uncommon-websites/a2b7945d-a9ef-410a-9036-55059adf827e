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
	type Props = {
		values?: Value[];
	};

	let { values = [
		{
			title: 'Engineers first',
			description: 'We solve hard, physical problems with code and sensors—not spreadsheets. Real product work in every role.'
		},
		{
			title: 'Real outcomes over optics',
			description: 'If it does not make our machines safer or smarter, it is not worth shipping. We focus on field value—not vanity metrics.'
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
	] }: Props = $props();

	let cards: HTMLElement[] = $state([]);

	onMount(() => {
		if (!cards.length) return;
		cards.forEach((card, index) => {
			animate(
				card,
				{ 
					opacity: [0, 1], 
					y: [20, 0] 
				},
				{ 
					delay: index * 0.1,
					duration: 0.6
				}
			);
		});
	});
</script>

<section class="section-py section-px container mx-auto">
	<SectionHeader
		title="Our culture runs deep"
		subtitle="Built by engineers, for engineers. We value direct communication, technical excellence, and real-world impact."
		size="lg"
	/>

	<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each values as value, i}
			<div 
				bind:this={cards[i]}
				class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
			>
				<h3 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
					{value.title}
				</h3>
				<p class="text-gray-600 dark:text-gray-300">
					{value.description}
				</p>
			</div>
		{/each}
	</div>
</section>