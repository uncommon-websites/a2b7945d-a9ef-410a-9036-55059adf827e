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
						<h2 class="text-title2 font-[450] mb-4">{feature.title}</h2>
						<p class="text-body text-black/70 mb-8">{feature.description}</p>
						{#if feature.callToAction}
							<div class="mt-8">
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
		margin-bottom: 4rem;
	}
	
	@media (min-width: 768px) {
		.feature-row {
			margin-bottom: 5rem;
		}
	}
	
	@media (min-width: 1024px) {
		.feature-row {
			margin-bottom: 6rem;
		}
	}

	.feature-row:last-child {
		margin-bottom: 0;
	}

	.feature-content {
		display: grid;
		gap: 2rem;
		align-items: center;
		grid-template-columns: 1fr;
	}
	
	@media (min-width: 768px) {
		.feature-content {
			gap: 3rem;
			grid-template-columns: 1fr 1fr;
		}
	}
	
	@media (min-width: 1024px) {
		.feature-content {
			gap: 4rem;
		}
	}
	
	@media (min-width: 1280px) {
		.feature-content {
			gap: 5rem;
		}
	}

	.feature-text {
		@apply order-1;
	}

	.feature-image {
		@apply order-2 rounded-lg overflow-hidden bg-gray-100;
	}

	.feature-image img {
		@apply w-full h-full object-cover block;
		aspect-ratio: 16/10;
	}

	/* Zig-zag layout for medium screens and up */
	@media (min-width: 768px) {
		.feature-left .feature-text {
			@apply order-1;
		}

		.feature-left .feature-image {
			@apply order-2;
		}

		.feature-right .feature-text {
			@apply order-2;
		}

		.feature-right .feature-image {
			@apply order-1;
		}
	}
</style>