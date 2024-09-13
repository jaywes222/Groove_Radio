import React, { useState } from 'react'
import FeatureItem from './FeatureItem';
import IconFeature from './IconFeature';

const PodAdSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="pod-ad" className='py-8 md:py-20'>
            {/* Podcast/Ad Heading */}
            <div className="container mx-auto my-4 px-6">
                <h2 className="mb-6 text-4xl font-semibold text-center">Podcast & Advertise Hub</h2>
                <p className="max-w-md mx-auto text-center text-battleshipGray">
                    Hire Your Podcast Space or Advertise With Groove Radio
                </p>
            </div>

            {/* Podcast-Ad Container */}
            <section className="flex items-center justify-center min-h-screen">
                {/* Card Container */}
                <div className="relative flex flex-col m-6 space-y-10 shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
                    {/* Left Side */}
                    <div
                        className="relative bg-cover bg-center"
                        style={{ backgroundImage: "url('src/assets/podcast.jpg')" }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-80"></div>

                        {/* Content Container */}
                        <div className="p-6 md:p-20 relative z-10 text-white">
                            <h2 className="font-mono mb-5 text-4xl font-bold">Hire a Podcast Space</h2>
                            <p className="max-w-sm mb-12 font-sans font-medium text-gray-200">
                                Have your voice heard! Hire our podcast space and reach out to our vibrant audience.
                                Whether you're a seasoned podcaster or just starting, our space is equipped with everything you need.
                            </p>
                            {/* Features */}
                            <div className="space-y-6">
                                <FeatureItem
                                    imageSrc="src/assets/schedule.jpg"
                                    title="State-of-the-Art Equipment"
                                    description="Professional microphones, mixers, and more."
                                />
                                <FeatureItem
                                    imageSrc="src/assets/calendar.jpg"
                                    title="Flexible Scheduling"
                                    description="Book slots that fit your schedule."
                                />
                                <FeatureItem
                                    imageSrc="src/assets/team.jpg"
                                    title="Supportive Staff"
                                    description="Our team is here to assist you at every step."
                                />
                            </div>
                            {/* CTA */}
                            <div className="mt-16 text-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-earthYellow hover:bg-tigerEye"
                                >
                                    Book Your Space
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="p-6 md:p-20 border-l-2 border-gray-200">
                        <h2 className="font-mono mb-5 text-4xl font-bold">Advertise with Us</h2>
                        <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
                            Partner with Nafsi Groove FM to amplify your message and connect with our vibrant community.
                        </p>
                        {/* Features */}
                        <div className="space-y-6">
                            <IconFeature
                                icon={
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 17l4-4-4-4m5 8l4-4-4-4"
                                        />
                                    </svg>
                                }
                                title="High Reach"
                                description="Expand your audience with our extensive listener base."
                            />
                            <IconFeature
                                icon={
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
                                    </svg>
                                }
                                title="Flexible Packages"
                                description="Choose from a variety of advertising packages that suit your needs."
                            />
                        </div>

                        {/* Steps to Hire/Advertise */}
                        <div className="mt-16">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">How to Get Started</h3>
                            <div className="mt-4 text-base text-gray-500">
                                <ol className="list-decimal ml-5 space-y-2">
                                    <li>Contact our team via the form below or at info@nafsigroovefm.com.</li>
                                    <li>Discuss your needs and goals with our advertising experts.</li>
                                    <li>Choose a package that best fits your objectives.</li>
                                    <li>Launch your advertisement or podcast with our support.</li>
                                </ol>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-16 text-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-earthYellow hover:bg-tigerEye"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>

                    {/* Close Button */}
                    {isModalOpen && (
                        <div
                            className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150"
                            onClick={handleCloseModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-black group-hover:text-gray-600"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                    )}
                </div>
            </section>
        </section>
    );
};

export default PodAdSection
