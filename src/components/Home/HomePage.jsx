import React from 'react';
import hero from '../../assets/hero.svg';
import FAQAccordionSection from '../FAQ/FAQAccordionSection';
import FeaturesSection from '../Features/FeaturesSection';
import FooterSection from '../Footer/FooterSection';
import MerchandiseSection from '../Merch/MerchandiseSection';
import NewsSection from '../News/NewsSection';
import NewsLetterSignUpSection from '../NewsLetter/NewsLetterSignUpSection';
import PodAdSection from '../PodAd/PodAdSection';
import HeroSection from './HeroSection';
import ScheduleTable from '../Schedule/ScheduleTable';

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
			<ScheduleTable />
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
