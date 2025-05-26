/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Mining site control",
				href: "/use-cases/mining-site-control",
				image: "/generated/image-a-team-of-miners-in-safety-gear-working-.webp",
				description: "React faster to shifting material flow and terrain with Site OS. Operators keep mines safe, efficient, and operational—all in real time.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Construction safety",
				href: "/use-cases/construction-safety",
				image: "/generated/image-a-group-of-construction-workers-wearing-.webp",
				description: "Machine Assist delivers live warnings for crews and vehicles in any weather—reducing incidents and keeping teams protected on every site.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Autonomous ag loading",
				href: "/use-cases/autonomous-loading-agriculture",
				image: "/generated/image-farmers-working-together-in-an-agricultu.webp",
				description: "Put Loader Automation to work and keep crop cycles running—all day, all night, no manual retraining or oversight needed.",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
		]
	}
];