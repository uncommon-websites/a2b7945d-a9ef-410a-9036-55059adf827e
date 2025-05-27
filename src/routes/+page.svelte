<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import ZigZagFeatures from "$lib/components/layout/ZigZagFeatures.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<!-- Typography styles now handled by design system -->

<!-- Hero section with clean background for black text -->
<div class="hero-section relative overflow-hidden">
	<!-- Clean background that works with black text -->
	<div class="absolute inset-0 bg-white"></div>
	
	<CustomerCardHero
	  centered={true}
	  title="Heavy machiner that thinks ahead"
	  subtitle="Making heavy minds intelligent, safe, and ready for every tough task. Reduce downtime by 30% while keeping people safe."
	  callsToAction={[
	    { href: '/book-demo', label: 'Book a demo' },
	    { href: '/contact', label: 'See it in action' }
	  ]}
	/>
	
	<!-- Video section integrated into hero area -->
	<div class="relative z-10 pb-24 section-px">
		<div class="mx-auto max-w-6xl">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
					See our technology in action
				</h2>
				<p class="mt-4 text-lg text-gray-300">
					Watch how sensmore's Physical AI transforms heavy minds operations
				</p>
			</div>
			<div class="mx-auto max-w-4xl">
				<div class="relative aspect-video overflow-hidden rounded-xl shadow-2xl bg-gray-900 ring-1 ring-white/20 backdrop-blur-sm">
					<iframe
						src="https://www.youtube.com/embed/dQw4w9WgXcQ"
						title="sensmore Technology Demonstration"
						class="absolute inset-0 h-full w-full"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	</div>
</div>

<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		'https://logo.clearbit.com/bhp.com',
		'https://logo.clearbit.com/cat.com',
		'https://logo.clearbit.com/cemex.com',
		'https://logo.clearbit.com/liebherr.com'
	]}
/>

<ZigZagFeatures
	features={[
		{
			title: "Real-time site control with Site OS",
			description: "See everything happening on your site in a single dashboard. Monitor material flow, manage zones, and send instant updates to any machine. Get the operational intelligence you need to stay ahead of challenges and keep production flowing smoothly.",
			imageSrc: "/generated/image-a-busy-mining-site-bustling-with-activit.webp",
			callToAction: {
				href: "/products/site-os",
				label: "Explore Site OS"
			}
		},
		{
			title: "AI-powered collision prevention",
			description: "Machine Assist provides real-time warnings for people, vehicles, and obstacles—working reliably in mud, rain, and darkness. Quick to install on any heavy equipment and proven to dramatically reduce incident risk on-site.",
			imageSrc: "/generated/image-a-group-of-industrial-workers-clad-in-sa.webp",
			callToAction: {
				href: "/products/machine-assist",
				label: "Learn about safety"
			}
		},
		{
			title: "Smart monitoring with sensmore Eye",
			description: "AI-powered cameras continuously track stockpiles, crusher levels, boulder detection, and material quality. Get real-time alerts that help prevent costly downtime and optimize your material handling operations.",
			imageSrc: "/generated/image-a-diverse-team-of-engineers-collaboratin.webp",
			callToAction: {
				href: "/products/eye",
				label: "See Eye in action"
			}
		},
		{
			title: "Live digital mapping of your site",
			description: "Every machine automatically updates a live, digital map of your site. Instantly spot terrain changes, track material movement, and plan operations from anywhere. Your site data, always current, always accessible.",
			imageSrc: "/generated/image-an-autonomous-front-loader-in-action-at-.webp",
			callToAction: {
				href: "/products/live-mapping",
				label: "Explore mapping"
			}
		},
		{
			title: "Autonomous operations with zero-shot AI",
			description: "Loader Automation handles complex material tasks using natural language commands. No retraining needed—machines adapt instantly to new challenges. Run operations day or night with human-like intelligence built in.",
			imageSrc: "/generated/image-a-joyful-industrial-worker-operating-a-l.webp",
			callToAction: {
				href: "/products/loader-automation",
				label: "See autonomy"
			}
		}
	]}
/>

<Testimonials
	testimonials={[
		{
			name: "Elena Kohler",
			position: "Site Manager",
			company: "Ironway Mining",
			quote:
				"We've reduced crusher downtime by 27% since installing sensmore Eye. Its live alerts and level monitoring make a real difference.",
			image: "/generated/image-a-female-mining-manager-at-a-site-wearin.webp"
		},
		{
			name: "Thomas Weber",
			position: "Head of Quarry Operations",
			company: "CEMEX Rüdersdorf",
			quote:
				"sensmore's technology transformed our site operations. The real-time insights and safety features have made our quarry both more productive and safer.",
			image: "/generated/image-a-mining-manager-named-thomas-weber-is-s.webp"
		},
		{
			name: "Nicolai Hecker",
			position: "Department for Extraction",
			company: "Lhoist Flandersbach",
			quote:
				"Site OS and Machine Assist elevated our operations beyond expectations. The platform's intelligence helps us stay ahead of potential issues.",
			image: "/generated/image-nicolai-hecker-a-construction-operations.webp"
		},
		{
			name: "Christian Pothoff",
			position: "Project Lead",
			company: "Paus",
			quote:
				"Seeing autonomous LHD in action at sensmore's facility was impressive. The technology shows real promise for the future of heavy minds.",
			image: "/generated/image-christian-pothoff-an-engineer-is-at-an-i.webp"
		}
	]}
/>

<Features
  title="Platform features"
  subtitle="smarter machines. safer sites. proven results."
  features={[
    {
      title: "Site OS",
      description: "See everything on site in a single dashboard and manage operations as they happen. Plan zones, monitor material flow, and send updates to any machine instantly."
    },
    {
      title: "Machine Assist",
      description: "AI-powered collision warnings for people, vehicles, and obstacles—reliable in mud, rain, and darkness. Installs quickly and works with any heavy equipment."
    },
    {
      title: "sensmore Eye",
      description: "Real-time cameras and AI track stockpiles, crusher levels, boulders, and more—helping prevent downtime and improve material quality."
    },
    {
      title: "Live Mapping",
      description: "Every machine updates a live, digital map of your site. Instantly spot changes, track terrain, and plan from anywhere."
    },
    {
      title: "Loader Automation",
      description: "Autonomous load and carry for any site, powered by zero-shot AI. Machines understand new tasks—even simple language commands."
    },
    {
      title: "Physical AI platform",
      description: "German-engineered platform with layered, embodied intelligence keeps people safe and operations running—whatever the challenge."
    }
  ]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for your business needs"
	useCases={[
		{
			title: "Real-time site control in mining",
			description: "Site OS dashboards let mine operators react instantly to material flow and terrain—reducing overfills, speeding up decision-making, and keeping production on schedule.",
			image: "/generated/image-a-team-of-miners-in-safety-gear-working-.webp",
			link: {
				href: "/use-cases/mining-site-control",
				label: "Learn more"
			}
		},
		{
			title: "Collision prevention for construction crews",
			description: "Machine Assist dramatically lowers incident risk by alerting operators to people, vehicles, and hazards in real time—working reliably in harsh conditions.",
			image: "/generated/image-a-group-of-construction-workers-wearing-.webp",
			link: {
				href: "/use-cases/construction-safety",
				label: "See how"
			}
		},
		{
			title: "Autonomous loading in agriculture",
			description: "Loader Automation keeps crops moving even with fewer hands—running material carry cycles on natural-language commands, day or night, no retraining needed.",
			image: "/generated/image-farmers-working-together-in-an-agricultu.webp",
			link: {
				href: "/use-cases/autonomous-loading-agriculture",
				label: "Explore autonomy"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction
  title="Project operational peace of mind"
  subtitle="Trusted AI that brings safer, smarter machines to your site"
  description="sensmore makes heavy minds intelligent—with automation that's proven in the field, fast to deploy, and works on your existing fleet. Increase safety and productivity from day one—no surprises, no complex rollout."
  imageSrc="/generated/image-a-cheerful-male-site-manager-in-a-mining.webp"
  callsToAction={[
    { href: '/book-demo', label: 'Book a demo', variant: 'primary' },
    { href: '/contact', label: 'Contact sales', variant: 'secondary' }
  ]}
/>