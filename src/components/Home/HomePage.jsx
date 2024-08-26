import React from 'react';
import hero from '../../assets/hero.svg';
import FeaturesSection from '../Features/FeaturesSection';
import HeroSection from './HeroSection';

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
			{/* Features */}
		</>
	);
};

export default HomePage;
