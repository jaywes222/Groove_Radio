import React from 'react';
import hero from '../../assets/hero.svg';
import FeaturesSection from '../Features/FeaturesSection';
import HeroSection from './HeroSection';
import ScheduleSection from '../Schedule/ScheduleSection';

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
		</>
	);
};

export default HomePage;
