<!--
    @component
    Swiss design inspired gradient hero with Apple-tier quality. Full-screen centered layout with subtle gradients.

    Usage:
    ```html
    <GradientHero
      title="Transform your operations"
      subtitle="Intelligent machinery for a safer, more efficient future"
      callsToAction={[
        {
          href: "/start",
          label: "Get started"
        },
        {
          href: "/learn",
          label: "Learn more"
        }
      ]}
    />
    ```

    Props:
    - `title`: Main headline (string)
    - `subtitle`: Supporting text (string, optional)
    - `callsToAction`: CTA buttons array (optional, max two: primary, secondary)
-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";

	// Types
	type Props = {
		title: string;
		subtitle?: string;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>;
	};

	let {
		title,
		subtitle,
		callsToAction = [],
		...rest
	}: Props = $props();
</script>

<section
	class="gradient-hero relative min-h-screen flex items-center justify-center overflow-hidden"
	{...rest}
	data-enter-container
>
	<!-- Subtle geometric accents for Swiss design -->
	<div class="absolute inset-0 opacity-30" aria-hidden="true">
		<div class="absolute top-1/3 left-0 w-px h-24 bg-gradient-to-b from-transparent via-gray-400/30 to-transparent"></div>
		<div class="absolute bottom-1/3 right-0 w-px h-24 bg-gradient-to-b from-transparent via-gray-400/30 to-transparent"></div>
		<div class="absolute top-0 left-1/3 w-24 h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
		<div class="absolute bottom-0 right-1/3 w-24 h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
	</div>

	<!-- Main content -->
	<div class="relative z-10 w-full max-w-6xl mx-auto section-px text-center">
		<div class="max-w-4xl mx-auto space-y-12">
			<!-- Title with precision typography -->
			<div class="space-y-6" data-enter>
				<h1 class="text-display text-balance">
					<AnimateText text={title} />
				</h1>

				<!-- Subtitle with refined spacing -->
				{#if subtitle}
					<div class="max-w-2xl mx-auto" data-enter>
						<p class="text-headline text-muted-foreground leading-relaxed">
							{subtitle}
						</p>
					</div>
				{/if}
			</div>

			<!-- Call to actions with Apple-style spacing -->
			{#if callsToAction.length > 0}
				<div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-enter>
					{#each callsToAction as cta, index}
						<Button
							href={cta.href}
							size="lg"
							variant={index % 2 === 0 ? "primary" : "secondary"}
							class="cta-button min-w-48 transition-all duration-500"
						>
							{cta.label}
						</Button>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<!-- Subtle fade overlay for depth -->
	<div class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none" aria-hidden="true"></div>
</section>

<style lang="postcss">
	.gradient-hero {
		background: 
			linear-gradient(135deg, 
				rgba(249, 250, 251, 0.95) 0%, 
				rgba(255, 255, 255, 1) 25%, 
				rgba(255, 255, 255, 1) 75%, 
				rgba(243, 244, 246, 0.95) 100%
			),
			radial-gradient(ellipse at center top, 
				rgba(229, 231, 235, 0.08) 0%, 
				transparent 60%
			);
	}

	/* Swiss typography refinements */
	h1 {
		font-optical-sizing: auto;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	p {
		font-optical-sizing: auto;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* Enhanced button animations */
	.cta-button {
		transform: scale(1);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	}

	.cta-button:hover {
		transform: scale(1.02);
		box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
	}

	.cta-button:active {
		transform: scale(0.98);
	}

	/* Entrance animations */
	[data-enter-container] [data-enter] {
		opacity: 0;
		transform: translateY(24px);
		animation: enterAnimation 1000ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
	}

	[data-enter-container] [data-enter]:nth-child(1) {
		animation-delay: 200ms;
	}

	[data-enter-container] [data-enter]:nth-child(2) {
		animation-delay: 400ms;
	}

	[data-enter-container] [data-enter]:nth-child(3) {
		animation-delay: 600ms;
	}

	@keyframes enterAnimation {
		from {
			opacity: 0;
			transform: translateY(24px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Responsive refinements */
	@media (max-width: 768px) {
		.gradient-hero {
			min-height: 100vh;
			min-height: 100svh;
		}

		.cta-button {
			min-width: 200px;
		}
	}
</style>