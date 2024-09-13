import React from 'react';
import facebookIcon from '/src/assets/icon-facebook.svg';
import twitterIcon from '/src/assets/icon-twitter.svg';
import youtubeIcon from '/src/assets/icon-youtube.svg';
import instagramIcon from '/src/assets/icon-instagram.svg';

const FooterSection = () => {
    return (
        <footer className="bg-gray-900">
            <div className="container max-w-6xl py-10 mx-auto">
                <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                    {/* Logo and Menu */}
                    <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                        <div>
                            <h1 className="text-2xl md:text-4xl font-sans text-earthYellow">
                                Groove Radio
                            </h1>
                        </div>
                        <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                            {['Features', 'Schedule', 'Archives', 'News & Updates','Merchandise', 'Podacast & Ad Hub', 'FAQ'].map((item) => (
                                <div className="h-10 group" key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-earthYellow">
                                        {item}
                                    </a>
                                    <div className="mx-2 group-hover:border-b group-hover:border-earthYellow"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons and Copyright */}
                    <div className="flex flex-col items-start justify-between space-y-6 text-gray-500 md:space-y-0 md:ml-12">
                        <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                            {[facebookIcon, twitterIcon, youtubeIcon, instagramIcon].map((icon, index) => (
                                <div className="h-8 group" key={index}>
                                    <a href="#">
                                        <img src={icon} alt={`${icon.split('-')[1]} Icon`} className="h-6" />
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="font-bold text-white">
                            &copy; 2024. Groove Radio. All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
