import React, { useState } from 'react'

const NewsLetterSignUpSection = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setLoading(true);
        try {
            // Simulate form submission process
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSubmitted(true);
        } catch (err) {
            setError('Something went wrong, please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="newsletter-signup" className="py-16 bg-gradient-to-b from-white to-gray-900">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4xl font-semibold mb-6">Stay Updated with Our Newsletter</h2>
                <p className="max-w-md mx-auto mb-6 text-gray-800">
                    Sign up now to be notified when our music player app is released, get exclusive updates on new merchandise, and stay informed with the latest news.
                </p>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col items-center sm:flex-row sm:justify-center">
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-3 mb-4 sm:mr-2 sm:mb-0 w-full sm:w-auto bg-white rounded shadow-md focus:outline-none focus:ring-2 focus:ring-spanishOrange"
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-8 py-3 text-white bg-spanishOrange rounded shadow-md hover:bg-white hover:text-spanishOrange focus:outline-none focus:ring-2 focus:ring-spanishOrange ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </form>
                ) : (
                    <p className="text-green-500">Thank you for signing up! You’ll receive updates when the app is out, new merch is available, and the latest news.</p>
                )}

                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </section>
    );
}

export default NewsLetterSignUpSection
