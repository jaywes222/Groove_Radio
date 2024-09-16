import { FaGithub } from 'react-icons/fa';

const Jack = () => {
    return (
        <footer className="text-white py-2 mt-4">
            <div className="flex flex-col items-center space-y-1">
                <span className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Groove Radio. All rights reserved.</span>
                <a
                    href="https://github.com/jaywes222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1"
                >
                    <FaGithub className="text-gray-400" size={18} />
                    <span className="text-gray-400 text-sm hover:text-white hover:underline transition-colors">Jack Jr</span>
                </a>
            </div>
        </footer>
    );
};

export default Jack;
