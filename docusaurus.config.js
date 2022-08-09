// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Polygon zkDAO",
	tagline: "zk ftw",
	url: "https://your-docusaurus-test-site.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",	

	organizationName: "arihantbansal",
	projectName: "polygon-zkdao", 
	deploymentBranch: "gh-pages",
	trailingSlash: false,

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/arihantbansal/polygon-zkdao",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "zkDAO",
				logo: {
					alt: "Polygon Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "doc",
						docId: "about",
						position: "left",
						label: "About",
					},
					{
						href: "https://github.com/maticnetwork",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Resources",
						items: [
							{
								label: "About",
								to: "/docs/about",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Stack Overflow",
								href: "https://stackoverflow.com/questions/tagged/polygon",
							},
							{
								label: "Discord",
								href: "https://discord.gg/0xPolygon",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/0xPolygon",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								href: "https://blog.polygon.technology/",
							},
							{
								label: "GitHub",
								href: "https://github.com/maticnetwork",
							},
						],
					},
				],
				copyright: `&copy; ${new Date().getFullYear()} Polygon technology. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;

