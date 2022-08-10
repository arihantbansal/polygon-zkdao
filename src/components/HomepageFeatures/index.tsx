import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Dive into zero-knowledge",
		Svg: require("@site/static/img/undraw_knowledge.svg").default,
		description: (
			<>
				ZKU is a study group on learning how to build Web3 products using
				Zero-Knowledge Proof (ZKP) technology. With the goal of launching your
				very own ZK product in a couple of months, it is never too early to
				start preparing!
			</>
		),
	},
	{
		title: "Learn from the best",
		Svg: require("@site/static/img/undraw_teaching.svg").default,
		description: (
			<>
				ZK Whiteboard sessions from the best devs at Polygon, building the
				future of zk.
			</>
		),
	},
	{
		title: "Learn at your own pace",
		Svg: require("@site/static/img/undraw_savings.svg").default,
		description: (
			<>
				There's no time limit to it. Watch recorded sessions, browse through the
				material and submit assignments as you please. And the best part, get
				rewarded for it!
			</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}

