import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({ setShowAnalysis }) => {
    const navigate = useNavigate();

    const handleAnalysisClick = () => {
        setShowAnalysis(true);
        navigate('/analysis');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
            <div className="container mx-auto px-6 py-20">
                {/* Navigation */}
                <nav className="flex justify-between items-center mb-16">
                    <div className="text-2xl font-bold text-white">
                        Social<span className="text-purple-400">Metrics</span>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 text-white">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Transform Your Social Media Analytics
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                {" "}Experience
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Get powerful insights into your social media performance with our advanced analytics platform.
                            Understand your audience, track engagement, and grow your presence.
                        </p>

                        {/* CTA Button */}
                        <div className="space-y-4">
                            <button
                                onClick={handleAnalysisClick}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full 
                                hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300
                                shadow-lg hover:shadow-xl flex items-center space-x-2"
                            >
                                <span>Generate Analysis</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="lg:w-1/2 mt-12 lg:mt-0 grid grid-cols-2 gap-6">
                        {[
                            { icon: '📊', title: 'Real-time Analytics', description: 'Track your social media performance in real-time with detailed metrics' },
                            { icon: '🎯', title: 'Audience Insights', description: 'Understand your audience behavior and engagement patterns' },
                            { icon: '📈', title: 'Growth Tracking', description: 'Monitor your account growth and content performance' },
                            { icon: '🔍', title: 'Deep Analysis', description: 'Get detailed insights into your social media strategy' }
                        ].map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
                            >
                                <div className="text-purple-400 text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: 'Active Users', value: '10K+' },
                        { label: 'Analytics Generated', value: '1M+' },
                        { label: 'Platform Support', value: '5+' },
                        { label: 'Success Rate', value: '99%' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-purple-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;