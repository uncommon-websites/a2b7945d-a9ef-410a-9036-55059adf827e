<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Innovation",
			description: "Constantly challenging the status quo to create better solutions."
		},
		{
			title: "Integrity",
			description: "Building trust through transparent actions and honest communication."
		},
		{
			title: "Impact",
			description: "Measuring our success by the positive change we create for our clients."
		}
	];
</script>

<SecondaryHero
	title="Smarter machines. Safer worksites."
	subtitle="We bring intelligence to the world’s largest off-highway machines—making them safer, more aware, and always ready for tough conditions."
	imageSrc="/generated/image-a-diverse-team-of-engineers-collaboratin.webp"
/>

<!-- Story Section -->
<Story
  paragraphs={[
    "sensmore began with a simple conviction: the world’s heaviest machines deserve intelligent systems just as advanced as the people operating them. Founders Bjarne Johannsen and Maximilian Rolf, both engineers in machine learning and robotics, saw a gap—powerful AI was changing cars and phones, but not the machinery that builds our world. They set out to close that gap, placing physical AI directly into off-highway machines that work in mud, dust, and darkness.",
    "From day one, sensmore has been about building intelligence that holds up in the toughest places—mines, quarries, fields, and defense zones. Software alone can’t predict a mudslide or see through fog. Hardware alone won’t make decisions on the fly. By fusing sensor data, robust hardware, and deep learning, our team creates technology that helps people make faster, better, and safer decisions every day.",
    "What drives us is simple: keeping people safe, elevating productivity, and delivering real impact where it matters most. Our platform transforms huge fleets into connected, aware, and adaptable teams—ready for every tough task, on every site. We do the hard work so that operators and businesses can focus on what they do best—getting the job done right."
  ]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
  stakeholderType="team"
  title="Our founders."
  subtitle="Specialists in AI, robotics, and heavy machinery."
  stakeholders={[
    {
      name: "Bjarne Johannsen",
      position: "Co-founder & CTO",
      bio: "Bjarne blends deep expertise in machine learning and robotics with hands-on experience at Uni Stuttgart, Mercedes, Bosch, and ZF. He leads technology at sensmore with a focus on robust, real-world intelligence for heavy machinery.",
      image: "/generated/image-a-professional-headshot-portrait-of-bjar.webp"
    },
    {
      name: "Maximilian Rolf",
      position: "Co-founder & CEO",
      bio: "With a background from TUM, UCL, and industry experience at Mercedes, Bosch, and ZF, Maximilian drives sensmore's mission to bring safe, adaptive physical AI to global worksites.",
      image: "/generated/image-a-professional-headshot-portrait-of-maxi.webp"
    }
  ]}
/>

<StakeholderGrid
  stakeholderType="investor"
  title="Backed by the best."
  subtitle="Tier 1 investors and industry operators."
  stakeholders={[
    {
      name: "Point Nine Capital",
      image: "https://cdn.brandfetch.io/pointnine.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7"
    },
    {
      name: "TSIC Ventures",
      image: "https://cdn.brandfetch.io/tiny.vc/w/400/h/400/logo?c=1a2b3c4d5e"
    },
    {
      name: "Acequia Capital",
      image: "https://via.placeholder.com/400x400/e5e7eb/6b7280?text=AC"
    },
    {
      name: "Prototype Capital",
      image: "https://via.placeholder.com/400x400/e5e7eb/6b7280?text=PC"
    },
    {
      name: "Entrepreneur First",
      image: "https://via.placeholder.com/400x400/e5e7eb/6b7280?text=EF"
    }
  ]}
/>

<!-- CTA Section -->
<CallToAction
  title="Engineers wanted"
  subtitle="Build what moves the world"
  description="If you believe in solving the hardest engineering challenges, want your work to keep people safe, and thrive at the intersection of AI and real hardware — you belong at sensmore. We're looking for technical talent and builders ready to make an impact on real sites across the globe. Let's build physical intelligence together."
  imageSrc="/generated/image-a-proud-engineer-dressed-in-work-gear-is.webp"
  callsToAction={[
    { href: '/careers', label: 'See open roles', variant: 'primary' },
    { href: '/contact', label: 'Get in touch', variant: 'secondary' }
  ]}
/>
