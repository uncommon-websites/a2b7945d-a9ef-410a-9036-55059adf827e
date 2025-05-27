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
			<!-- Title with refined typography system -->
			<div class="max-w-4xl mx-auto space-y-6">
				<!-- Icon above title -->
				<div class="flex justify-center mb-6" data-enter>
					<div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
						<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
						</svg>
					</div>
				</div>
				
				<h1 
					class="text-display text-gray-900" 
					data-enter
				>
					<span class="block"><AnimateText text={title} /></span>
				</h1>

				<!-- Subtitle with refined typography -->
				<div class="max-w-2xl mx-auto">
					<p
						data-enter
						class="text-title3 text-gray-600"
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
							class="min-w-[200px] rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-[1.02] max-lg:hidden"
						>
							{cta.label}
						</Button>
						<Button
							href={cta.href}
							size="md"
							variant={index % 2 === 0 ? "primary" : "secondary"}
							class="min-w-[180px] rounded-full px-6 py-2.5 text-base font-medium transition-all duration-300 hover:scale-[1.02] lg:hidden"
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

	/* Typography handled by design system */
</style>
