import React from 'react';
import hero from '../../assets/hero.svg';
import FeaturesSection from '../Features/FeaturesSection';
import HeroSection from './HeroSection';
import ScheduleSection from '../Schedule/ScheduleSection';
import NewsSection from '../News/NewsSection';
import MerchandiseSection from '../Merch/MerchandiseSection';
import PodAdSection from '../PodAd/PodAdSection';
import FAQAccordionSection from '../FAQ/FAQAccordionSection';
import NewsLetterSignUpSection from '../NewsLetter/NewsLetterSignUpSection';
import FooterSection from '../Footer/FooterSection';

const HomePage = () => {
	return (
		<>
			{/*Hero Section */}
			<HeroSection
				title="Welcome to Groove Radio"
				subtitle="Your ultimate destination for great music, conversations & latest news."
				link=""
				image={hero}
			/>
			{/* Features */}
			<FeaturesSection />
			{/* Schedule */}
			<ScheduleSection />
			{/* News */}
			<NewsSection />
			{/* Merch */}
			<MerchandiseSection />
			{/* PodAd*/}
			<PodAdSection />
			{/* FAQ */}
			<FAQAccordionSection />
			{/* NewsLetterSignUp */}
			<NewsLetterSignUpSection />
			{/* Footer */}
			<FooterSection />
		</>
	);
};

export default HomePage;
