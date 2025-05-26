// Types
import type { PageLoad } from "./$types";

// Use cases can be considered industries depending on the company.
// Types
type UseCase = {
	meta: {
		title: string;
		description: string;
		image: string;
		url: string;
	};
	hero: {
		title: string;
		subtitle: string;
		imageSrc: string;
		callsToAction: Array<{
			href: string;
			label: string;
		}>;
	};
	summary: {
		title: string;
		text: string;
	};
	testimonials: Array<{
		quote: string;
		name: string;
		position: string;
		company: string;
		image: string;
	}>;
	features: {
		title: string;
		subtitle: string;
		items: Array<{
			title: string;
			description: string;
			icon: string;
		}>;
	};
	cta: {
		title: string;
		subtitle: string;
		description: string;
		callsToAction: Array<{
			href: string;
			label: string;
			variant?: "primary" | "secondary" | "ghost";
		}>;
	};
};

// Constants
const miningSiteControlUseCase: UseCase = {
	meta: {
		title: "Mining Site Control - sensmore",
		description: "React faster to shifting material flow and terrain with Site OS. Operators keep mines safe, efficient, and operational—all in real time.",
		image: "/generated/image-a-team-of-miners-in-safety-gear-working-.webp",
		url: "/use-cases/mining-site-control"
	},
	hero: {
		title: "React faster to shifting material flow and terrain",
		subtitle: "Site OS gives operators complete control. Keep mines safe, efficient, and operational—all in real time.",
		imageSrc: "/generated/image-a-team-of-miners-in-safety-gear-working-.webp",
		callsToAction: [
			{ href: "/", label: "Book demo" },
			{ href: "#features", label: "Learn more" }
		]
	},
	summary: {
		title: "Turn complex mining operations into simple decisions",
		text: "Site OS transforms raw operational data into actionable insights. Mine operators get unprecedented visibility into material flow, equipment positioning, and site conditions—enabling faster decisions that keep operations running smoothly and safely."
	},
	testimonials: [
		{
			quote: "We equipped our entire site with sensmore's technology. The real-time visibility into our operations has been game-changing.",
			name: "Thomas Weber",
			position: "Head of Quarry Operations",
			company: "CEMEX Rüdersdorf",
			image: "/generated/image-a-mining-manager-named-thomas-weber-is-s.webp"
		}
	],
	features: {
		title: "Complete site visibility and control",
		subtitle: "Purpose-built for mining operations that never stop",
		items: [
			{
				title: "Live operational intelligence",
				description: "Real-time dashboard showing complete site status, material flow, and equipment positioning",
				icon: "chart-line"
			},
			{
				title: "Customizable zones",
				description: "Set speed zones, restricted areas, and material zones that update instantly across all machinery",
				icon: "map"
			},
			{
				title: "Material flow insights",
				description: "Track material movement and identify bottlenecks before they impact production",
				icon: "truck"
			},
			{
				title: "Safety-critical alerts",
				description: "Instant notifications for unsafe conditions or equipment conflicts",
				icon: "shield-check"
			}
		]
	},
	cta: {
		title: "See Site OS in action at your operation",
		subtitle: "Join mining operations already using sensmore",
		description: "Get a personalized demo showing how Site OS can improve your mining operation's safety and efficiency.",
		callsToAction: [
			{ href: "/", label: "Book demo", variant: "primary" },
			{ href: "/about", label: "Learn about us", variant: "secondary" }
		]
	}
};

const constructionSafetyUseCase: UseCase = {
	meta: {
		title: "Construction Safety - sensmore",
		description: "Machine Assist delivers live warnings for crews and vehicles in any weather—reducing incidents and keeping teams protected on every site.",
		image: "/generated/image-a-group-of-construction-workers-wearing-.webp",
		url: "/use-cases/construction-safety"
	},
	hero: {
		title: "Live warnings for crews and vehicles in any weather",
		subtitle: "Machine Assist reduces incidents and keeps teams protected on every construction site.",
		imageSrc: "/generated/image-a-group-of-construction-workers-wearing-.webp",
		callsToAction: [
			{ href: "/", label: "Book demo" },
			{ href: "#features", label: "See features" }
		]
	},
	summary: {
		title: "Zero tolerance for construction site accidents",
		text: "Machine Assist gives heavy machinery operators real-time awareness of people, vehicles, and obstacles around them. Our Physical AI works in all weather conditions, ensuring reliable collision detection when visibility is poor and safety is critical."
	},
	testimonials: [
		{
			quote: "sensmore Site OS and Machine Assist elevated our operations. The safety improvements have been remarkable.",
			name: "Nicolai Hecker",
			position: "Department for Extraction",
			company: "Lhoist Flandersbach",
			image: "/generated/image-nicolai-hecker-a-construction-operations.webp"
		}
	],
	features: {
		title: "Safety technology that works in any condition",
		subtitle: "Engineered for the toughest construction environments",
		items: [
			{
				title: "All-weather collision detection",
				description: "4D radar technology provides reliable detection in mud, rain, dust, and poor visibility",
				icon: "shield-alert"
			},
			{
				title: "Real-time crew alerts",
				description: "Instant warnings when people or vehicles enter danger zones around machinery",
				icon: "bell"
			},
			{
				title: "Centimeter-accurate positioning",
				description: "RTK GNSS localization ensures precise machinery tracking for safety zones",
				icon: "map-pin"
			},
			{
				title: "One-day installation",
				description: "Lean hardware kit installs quickly without disrupting ongoing construction",
				icon: "wrench"
			}
		]
	},
	cta: {
		title: "Protect your construction crews with Machine Assist",
		subtitle: "Join construction companies preventing accidents with sensmore",
		description: "See how Machine Assist can reduce incidents and create safer worksites for your teams.",
		callsToAction: [
			{ href: "/", label: "Book demo", variant: "primary" },
			{ href: "/pricing", label: "View pricing", variant: "secondary" }
		]
	}
};

const autonomousLoadingAgricultureUseCase: UseCase = {
	meta: {
		title: "Autonomous Agriculture Loading - sensmore",
		description: "Put Loader Automation to work and keep crop cycles running—all day, all night, no manual retraining or oversight needed.",
		image: "/generated/image-farmers-working-together-in-an-agricultu.webp",
		url: "/use-cases/autonomous-loading-agriculture"
	},
	hero: {
		title: "Keep crop cycles running all day, all night",
		subtitle: "Loader Automation works continuously—no manual retraining or oversight needed.",
		imageSrc: "/generated/image-farmers-working-together-in-an-agricultu.webp",
		callsToAction: [
			{ href: "/", label: "Book demo" },
			{ href: "#features", label: "How it works" }
		]
	},
	summary: {
		title: "Autonomous loading that adapts to any agricultural task",
		text: "Our Loader Automation uses VLAM (Vision Language Action Models) to handle material loading tasks with zero-shot autonomy. Whether it's grain, feed, or other materials, the system adapts instantly to new challenges without prior training—keeping agricultural operations running 24/7."
	},
	testimonials: [
		{
			quote: "We saw an autonomous LHD in action with sensmore at our manufacturing plant. The technology is impressive.",
			name: "Christian Pothoff",
			position: "Project Lead",
			company: "Paus",
			image: "/generated/image-christian-pothoff-an-engineer-is-at-an-i.webp"
		}
	],
	features: {
		title: "Automation that thinks and adapts",
		subtitle: "Built for the dynamic nature of agricultural operations",
		items: [
			{
				title: "Zero-shot autonomy",
				description: "Adapts instantly to new materials and tasks without manual programming or training",
				icon: "brain"
			},
			{
				title: "Human-like control",
				description: "Interact with machinery using simple language commands that the system understands",
				icon: "message-circle"
			},
			{
				title: "All-weather operation",
				description: "Continues working in harsh conditions when human operators cannot",
				icon: "cloud-rain"
			},
			{
				title: "Seamless integration",
				description: "Fits into existing agricultural workflows without major operational changes",
				icon: "puzzle-piece"
			}
		]
	},
	cta: {
		title: "Automate your agricultural loading operations",
		subtitle: "Join farms already using sensmore automation",
		description: "See how Loader Automation can keep your operations running efficiently around the clock.",
		callsToAction: [
			{ href: "/", label: "Book demo", variant: "primary" },
			{ href: "/about", label: "Our technology", variant: "secondary" }
		]
	}
};

const useCases: Record<string, UseCase> = {
	"mining-site-control": miningSiteControlUseCase,
	"construction-safety": constructionSafetyUseCase,
	"autonomous-loading-agriculture": autonomousLoadingAgricultureUseCase
};

export const load: PageLoad = async ({ params }) => {
	const { usecase } = params;

	if (!usecase || !(usecase in useCases)) {
		return {
			meta: {
				title: "Use Case Not Found - sensmore",
				description: "The requested use case could not be found.",
				image: "/og.png",
				url: "/use-cases"
			}
		};
	}

	return useCases[usecase as keyof typeof useCases];
};