<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<CustomerCardHero
  centered={true}
  title="Proven performance for the world’s toughest sites"
  subtitle="Trusted by leaders at CEMEX and Lhoist, sensmore helps heavy machines work smarter—improving safety, cutting downtime, and keeping productivity on track."
  customers={[
    {
      name: "Thomas Weber",
      position: "Head of Quarry Operations, CEMEX",
      imageSrc: "/generated/image-a-middle-aged-male-mining-operations-man.webp"
    },
    {
      name: "Nicolai Hecker",
      position: "Extraction Department, Lhoist",
      imageSrc: "/generated/image-an-older-male-industrial-plant-superviso.webp"
    },
    {
      name: "Laura Schmidt",
      position: "Project Manager, Construction",
      imageSrc: "/generated/image-an-adult-female-project-manager-in-a-yel.webp"
    },
    {
      name: "Mark Bausch",
      position: "Technician, Heavy Machinery",
      imageSrc: "/generated/image-a-mature-male-technician-in-dark-blue-ov.webp"
    },
    {
      name: "Sophie Berger",
      position: "Engineer, Civil Works",
      imageSrc: "/generated/image-a-young-female-engineer-dressed-in-a-con.webp"
    }
  ]}
/>
<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		'https://logo.clearbit.com/bhp.com',
		'https://logo.clearbit.com/cat.com',
		'https://logo.clearbit.com/cemex.com',
		'https://logo.clearbit.com/liebherr.com'
	]}
/>

<Testimonials
	testimonials={[
		{
			name: "Elena Kohler",
			position: "Site Manager, Ironway Mining",
			company: "Ironway Mining",
			quote:
				"We've reduced crusher downtime by 27% since installing sensmore Eye. Its live alerts and level monitoring make a real difference.",
			image: "/generated/image-a-female-mining-manager-at-a-site-wearin.webp"
		},
		{
			name: "Lars Heldt",
			position: "Director of Field Operations, Triton Construction",
			company: "Triton Construction",
			quote:
				"Machine Assist helped prevent two major collisions last quarter. It's become essential to keeping our crews safe.",
			image: "/generated/image-a-male-construction-foreman-on-a-bustlin.webp"
		},
		{
			name: "Monika Rey",
			position: "Precision Ag Lead, GreenFields Co-op",
			company: "GreenFields Co-op",
			quote:
				"With Site OS we cut route planning time by 40%. It’s made daily logistics smoother and reduced idle time across our fleet.",
			image: "/generated/image-a-female-agriculture-specialist-in-a-coz.webp"
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
  description="sensmore makes heavy machinery intelligent—with automation that’s proven in the field, fast to deploy, and works on your existing fleet. Increase safety and productivity from day one—no surprises, no complex rollout."
  imageSrc="/generated/image-a-cheerful-male-site-manager-in-a-mining.webp"
  callsToAction={[
    { href: '/book-demo', label: 'Book a demo', variant: 'primary' },
    { href: '/contact', label: 'Contact sales', variant: 'secondary' }
  ]}
/>
