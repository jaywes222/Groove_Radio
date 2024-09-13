import React, { useState } from "react";

const FAQAccordionSection = () => {
    const faqs = [
        {
            question: "How can I listen to live radio?",
            answer:
                "You can listen to live radio by clicking the 'Live Stream' button on our homepage or by visiting our 'Live' section in the app.",
        },
        {
            question: "Can I access past shows?",
            answer:
                "Yes, you can access past shows by navigating to the 'Archives' section in the app or on our website.",
        },
        {
            question: "How do I request a song?",
            answer:
                "You can request a song by visiting our 'Request a Song' page and filling out the request form.",
        },
        {
            question: "Do you have a mobile app?",
            answer:
                "Yes, our mobile app is available for both iOS and Android. You can download it from the App Store or Google Play Store.",
        },
        {
            question: "How can I contact the station?",
            answer:
                "You can contact the station by visiting our 'Contact Us' page and filling out the form, or by calling the number provided on the same page.",
        },
        {
            question: "Can I advertise on your station?",
            answer:
                "Yes, you can advertise on our station. Visit our 'Advertise with Us' page for more information on advertising packages and rates.",
        },
    ];

    // State to track the currently active tab
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq">
            <div className="container mx-auto my-4 px-6">
                <h2 className="mb-6 text-4xl font-semibold text-center">FAQ</h2>
                <p className="max-w-md mx-auto text-center text-grayishBlue">
                    Here Are Some of Our FAQs
                </p>
            </div>

            {/* FAQ Accordion */}
            <section id="faq-accordion">
                <div className="container mx-auto px-6 mb-32">
                    <div className="max-w-2xl m-8 mx-auto overflow-hidden">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="py-1 border-b outline-none group"
                                tabIndex={index}
                                onClick={() => handleToggle(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                                    <div className="transition duration-500 ease group-hover:text-spanishOrange">
                                        {faq.question}
                                    </div>
                                    <div
                                        className={`transition duration-500 ease transform ${activeIndex === index ? "-rotate-180" : ""
                                            } group-focus:text-spanishOrange`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                            <path
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                d="M1 1l8 8 8-8"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition duration-500 ease ${activeIndex === index ? "max-h-screen" : "max-h-0"
                                        }`}
                                >
                                    <p className="py-2 text-justify text-gray-400">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default FAQAccordionSection;
