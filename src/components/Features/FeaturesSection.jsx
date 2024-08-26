import React, { useState } from 'react';
import Panel from './Panel';
import Tab from './Tab';
import player from '../../assets/boombox.png'
import archives from '../../assets/archives.png'
import community from '../../assets/group-chat.png'
import personalization from '../../assets/personalization.png'


const tabs = [
	{ label: 'Interactive Player', target: 'panel-1' },
	{ label: 'Archives Access', target: 'panel-2' },
	{ label: 'Community Engagement', target: 'panel-3' },
	{ label: 'Personalization Options', target: 'panel-4' },
];

const panels = [
	{
		target: 'panel-1',
		image: player, 
		altText: 'Interactive Player',
		title: 'Interactive Player',
		content:
			'Enhance your listening experience with interactive controls and personalized playlists. Enjoy seamless playback and dynamic audio visualizations.',
	},
	{
		target: 'panel-2',
		image: archives,
		altText: 'Archives Access',
		title: 'Archives Access',
		content:
			'Explore past shows and episodes easily. Search by date, genre, or presenter to find your favorite content and revisit memorable broadcasts.',
	},
	{
		target: 'panel-3',
		image: community,
		altText: 'Community Engagement',
		title: 'Community Engagement',
		content:
			'Connect with fellow listeners through live chat during broadcasts. Share your favorite shows on social media and join discussions on the latest episodes.',
	},
	{
		target: 'panel-4',
		image: personalization,
		altText: 'Personalization Options',
		title: 'Personalization Options',
		content:
			'Customize your listening experience with favorite shows, personalized playlists, and notifications for new episodes. Tailor your radio experience to suit your preferences.',
	},
];

const FeaturesSection = () => {
	const [activePanel, setActivePanel] = useState('panel-1');

	const handleTabClick = (target) => {
		setActivePanel(target);
	};

	return (
		<section id="tabs">
			<div className="container relative mx-auto my-4 px-6">
				<h2 className="mb-4 text-5xl font-semibold text-center m-16">
					Features
				</h2>
				<p className="max-w-md mx-auto text-center text-battleshipGray">
					Our aim is to provide you with an unparalleled audio
					experience with the following features:
				</p>
				<div className="bg-tabs"></div>
				<div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
					{tabs.map((tab) => (
						<Tab
							key={tab.target}
							label={tab.label}
							target={tab.target}
							onClick={handleTabClick}
							isActive={tab.target === activePanel}
						/>
					))}
				</div>
				<div id="panels" className="container mx-auto">
					{panels
						.filter((panel) => panel.target === activePanel)
						.map((panel) => (
							<Panel
								key={panel.target}
								image={panel.image}
								altText={panel.altText}
								title={panel.title}
								content={panel.content}
							/>
						))}
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
