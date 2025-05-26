<script lang="ts">
	import Button from "$lib/components/ui/Button.svelte";
	import type { Snippet } from "svelte";

	type CallToAction = {
		href: string;
		title: string;
		variant?: "primary" | "secondary" | "ghost";
	};

	type Props = {
		title: string;
		subtitle?: string;
		callsToAction?: CallToAction[];
	};

	let { title, subtitle, callsToAction = [] }: Props = $props();
</script>

<section
	class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100/50"
>
	<!-- Subtle gradient overlay for depth -->
	<div
		class="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
		aria-hidden="true"
	></div>

	<!-- Main content container -->
	<div class="relative z-10 w-full max-w-6xl mx-auto section-px text-center">
		<div class="max-w-4xl mx-auto space-y-8">
			<!-- Title with Swiss typography principles -->
			<h1
				class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-gray-900 leading-[0.9] mb-6"
			>
				{title}
			</h1>

			<!-- Subtitle with generous spacing -->
			{#if subtitle}
				<div class="max-w-2xl mx-auto">
					<p
						class="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed tracking-wide"
					>
						{subtitle}
					</p>
				</div>
			{/if}

			<!-- Call to actions with Apple-style spacing -->
			{#if callsToAction.length > 0}
				<div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
					{#each callsToAction as cta}
						<Button
							href={cta.href}
							variant={cta.variant || "primary"}
							size="lg"
							class="min-w-[200px] rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
						>
							{cta.title}
						</Button>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<!-- Subtle geometric accent for Swiss design flair -->
	<div
		class="absolute top-1/4 right-8 w-px h-32 bg-gradient-to-b from-transparent via-gray-300/50 to-transparent hidden lg:block"
		aria-hidden="true"
	></div>
	<div
		class="absolute bottom-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-gray-300/50 to-transparent hidden lg:block"
		aria-hidden="true"
	></div>
</section>

<style>
	/* Custom gradient for Apple-like sophistication */
	section {
		background: linear-gradient(
				135deg,
				rgba(249, 250, 251, 0.8) 0%,
				rgba(255, 255, 255, 1) 25%,
				rgba(255, 255, 255, 1) 75%,
				rgba(243, 244, 246, 0.6) 100%
			),
			radial-gradient(ellipse at top, rgba(229, 231, 235, 0.1) 0%, transparent 70%);
	}

	/* Swiss typography refinements */
	h1 {
		font-optical-sizing: auto;
		font-variation-settings: "wght" 300;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	p {
		font-optical-sizing: auto;
		font-variation-settings: "wght" 400;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>