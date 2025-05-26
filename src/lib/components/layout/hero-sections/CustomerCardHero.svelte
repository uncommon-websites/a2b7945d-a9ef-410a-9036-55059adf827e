<!--

@component CustomerCardHero

This hero displays a clean, Swiss-style interface with subtle gradient background.
Designed with Apple-tier design principles for maximum visual impact.

-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";

	// Constants
	import { cta } from "$lib/navigation";

	// Types
	type Props = {
		centered?: boolean;
		title: string;
		subtitle: string;
		customers?: Array<{
			name: string;
			position?: string;
			imageSrc: string;
		}>; // Legacy prop - no longer used
		callsToAction?: Array<{
			href: string;
			label: string;
		}>; // A maximum of two calls to action, with the first one being primary and the second one being secondary
	};

	let {
		title,
		subtitle,
		customers = [], // Legacy prop - ignored
		callsToAction = [cta],
		centered = true, // Default to centered for Swiss design
		...rest
	}: Props = $props();
</script>

<section
	class="relative min-h-screen flex items-center justify-center overflow-hidden"
	{...rest}
>
	<!-- Sophisticated gradient background with premium Apple-style aesthetics -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white to-blue-50/20"
		aria-hidden="true"
	></div>
	
	<!-- Multi-layered depth with subtle color transitions -->
	<div
		class="absolute inset-0 bg-gradient-to-t from-gray-50/30 via-transparent to-slate-100/40"
		aria-hidden="true"
	></div>
	
	<!-- Premium radial overlay for visual depth -->
	<div
		class="absolute inset-0 bg-radial-gradient opacity-40"
		aria-hidden="true"
	></div>

	<!-- Premium Swiss design geometric accents -->
	<div
		class="absolute top-1/4 right-12 w-px h-40 bg-gradient-to-b from-transparent via-slate-300/30 to-transparent hidden lg:block"
		aria-hidden="true"
	></div>
	<div
		class="absolute bottom-1/4 left-12 w-px h-40 bg-gradient-to-b from-transparent via-slate-300/30 to-transparent hidden lg:block"
		aria-hidden="true"
	></div>
	
	<!-- Subtle corner accents for enhanced depth -->
	<div
		class="absolute top-8 left-8 w-16 h-px bg-gradient-to-r from-slate-200/40 to-transparent hidden xl:block"
		aria-hidden="true"
	></div>
	<div
		class="absolute bottom-8 right-8 w-16 h-px bg-gradient-to-l from-slate-200/40 to-transparent hidden xl:block"
		aria-hidden="true"
	></div>

	<!-- Main content container -->
	<div class="relative z-10 w-full max-w-6xl mx-auto section-px">
		<header
			class={[
				"container mx-auto flex flex-col items-center justify-center text-center",
				"min-h-[80vh] space-y-8"
			]}
			data-enter-container
		>
			<!-- Title with Swiss typography principles -->
			<div class="max-w-4xl mx-auto space-y-6">
				<h1 
					class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-gray-900 leading-[0.9] swiss-text" 
					data-enter
				>
					<span class="block"><AnimateText text={title} /></span>
				</h1>

				<!-- Subtitle with generous spacing -->
				<div class="max-w-2xl mx-auto">
					<p
						data-enter
						class="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed tracking-wide swiss-text"
					>
						{subtitle}
					</p>
				</div>
			</div>

			<!-- Call to actions with Apple-style spacing -->
			{#if callsToAction.length > 0}
				<div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8" data-enter>
					{#each callsToAction as cta, index}
						<Button
							href={cta.href}
							size="lg"
							variant={index % 2 === 0 ? "primary" : "secondary"}
							class="min-w-[200px] rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] max-lg:hidden"
						>
							{cta.label}
						</Button>
						<Button
							href={cta.href}
							size="md"
							variant={index % 2 === 0 ? "primary" : "secondary"}
							class="min-w-[180px] rounded-full px-6 py-2.5 text-base font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] lg:hidden"
						>
							{cta.label}
						</Button>
					{/each}
				</div>
			{/if}
		</header>
	</div>
</section>

<style>
	/* Premium gradient system for sophisticated Apple-tier aesthetics */
	section {
		background: 
			linear-gradient(
				135deg,
				rgba(248, 250, 252, 0.95) 0%,
				rgba(255, 255, 255, 1) 30%,
				rgba(255, 255, 255, 1) 70%,
				rgba(241, 245, 249, 0.8) 100%
			),
			radial-gradient(
				ellipse 120% 80% at 50% 0%,
				rgba(219, 234, 254, 0.1) 0%,
				transparent 50%
			),
			radial-gradient(
				ellipse 80% 60% at 50% 100%,
				rgba(229, 231, 235, 0.08) 0%,
				transparent 50%
			);
	}

	/* Custom radial gradient class for premium overlay */
	.bg-radial-gradient {
		background: radial-gradient(
			ellipse 150% 100% at center top,
			rgba(203, 213, 225, 0.06) 0%,
			rgba(248, 250, 252, 0.03) 30%,
			transparent 70%
		);
	}

	/* Swiss typography refinements */
	.swiss-text {
		font-optical-sizing: auto;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	h1.swiss-text {
		font-variation-settings: "wght" 300;
	}

	p.swiss-text {
		font-variation-settings: "wght" 400;
	}
</style>
