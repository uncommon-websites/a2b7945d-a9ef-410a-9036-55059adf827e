<script lang="ts">
	import Button from "../ui/Button.svelte";

	// Types
	type ZigZagFeature = {
		title: string;
		description: string;
		imageSrc: string;
		imageAlt?: string;
		callToAction?: {
			href: string;
			label: string;
		};
	};

	// Props
	const {
		features = [],
		...rest
	}: { features: ZigZagFeature[] } = $props();
</script>

<section class="section-py" {...rest}>
	<div class="container mx-auto section-px">
		{#each features as feature, index}
			<div class="feature-row {index % 2 === 0 ? 'feature-left' : 'feature-right'}">
				<div class="feature-content">
					<div class="feature-text">
						<h2 class="feature-title">{feature.title}</h2>
						<p class="feature-description">{feature.description}</p>
						{#if feature.callToAction}
							<div class="feature-cta">
								<Button href={feature.callToAction.href} variant="secondary">
									{feature.callToAction.label}
								</Button>
							</div>
						{/if}
					</div>
					<div class="feature-image">
						<img 
							src={feature.imageSrc} 
							alt={feature.imageAlt || feature.title}
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!--
@component
A zig-zag features section that displays features in an alternating left-right layout.

Usage:
```html
<ZigZagFeatures
  features={[
    {
      title: "Feature Title",
      description: "Feature description text",
      imageSrc: "/path/to/image.jpg",
      imageAlt: "Optional alt text",
      callToAction: { href: "/link", label: "Learn more" } // optional
    }
    // more features...
  ]}
/>
```
-->

<style>
	.feature-row {
		margin-bottom: var(--spacing-24);
	}

	.feature-row:last-child {
		margin-bottom: 0;
	}

	.feature-content {
		display: grid;
		gap: var(--spacing-8);
		align-items: center;
		grid-template-columns: 1fr;
	}

	.feature-text {
		order: 1;
	}

	.feature-image {
		order: 2;
		border-radius: var(--radius);
		overflow: hidden;
		background: var(--color-gray-100);
	}

	.feature-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		aspect-ratio: 16/10;
	}

	.feature-title {
		font-size: var(--text-3xl);
		font-weight: var(--font-semibold);
		line-height: var(--leading-tight);
		color: var(--color-gray-900);
		margin-bottom: var(--spacing-4);
	}

	.feature-description {
		font-size: var(--text-lg);
		line-height: var(--leading-relaxed);
		color: var(--color-gray-600);
		margin-bottom: var(--spacing-6);
	}

	.feature-cta {
		margin-top: var(--spacing-6);
	}

	/* Medium screens and up */
	@media (min-width: 768px) {
		.feature-row {
			margin-bottom: var(--spacing-32);
		}

		.feature-content {
			grid-template-columns: 1fr 1fr;
			gap: var(--spacing-12);
		}

		.feature-left .feature-text {
			order: 1;
		}

		.feature-left .feature-image {
			order: 2;
		}

		.feature-right .feature-text {
			order: 2;
		}

		.feature-right .feature-image {
			order: 1;
		}

		.feature-title {
			font-size: var(--text-4xl);
		}
	}

	/* Large screens */
	@media (min-width: 1024px) {
		.feature-content {
			gap: var(--spacing-16);
		}

		.feature-title {
			font-size: var(--text-5xl);
		}

		.feature-description {
			font-size: var(--text-xl);
		}
	}

	/* Extra large screens */
	@media (min-width: 1280px) {
		.feature-content {
			gap: var(--spacing-20);
		}
	}
</style>