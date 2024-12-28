import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    const [isVisible, setIsVisible] = useState(false);
    const words = ["Luxury", "Comfort", "Adventure", "Relaxation"];
    const [currentWord, setCurrentWord] = useState(0);
  
    useEffect(() => {
      setIsVisible(true);
      const interval = setInterval(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-orange-300">
                {/* Navigation Bar */}
                <nav className="p-4 flex justify-between items-center bg-white/10 backdrop-blur-md">
                    <div className="text-2xl font-bold text-white">
                    LuxStay
                    </div>
                    <div className="space-x-4">
                    <PrimaryButton variant="ghost" className="text-white hover:bg-white/20">About</PrimaryButton>
                    <PrimaryButton variant="ghost" className="text-white hover:bg-white/20">Contact</PrimaryButton>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="container mx-auto px-4 pt-20 pb-32">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
                        <h1 className="text-6xl font-bold text-white mb-4">
                        Find Your Perfect Stay
                        </h1>
                        <div className="h-12">
                        <p className="text-2xl text-white/90 transition-all duration-500">
                            Experience {words[currentWord]}
                        </p>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-3 gap-4 my-12">
                        {[1, 2, 3].map((i) => (
                        <div key={i} className="relative h-48 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-xl">
                            <img
                            src="https://images.pexels.com/photos/261108/pexels-photo-261108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt={`Luxury Hotel ${i}`}
                            className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        ))}
                    </div>

                    {/* Auth Buttons */}
                    <div className="space-x-6">
                        <Link
                            href={route('login')}
                            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route('register')}
                            className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            Register
                        </Link>
                    </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-white/10 backdrop-blur-md py-16">
                    <div className="container mx-auto px-4">
                    <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
                        {[
                        { icon: "✨", title: "Best Prices", desc: "Guaranteed best rates and exclusive deals" },
                        { icon: "🏆", title: "Top Rated", desc: "Curated selection of premium hotels" },
                        { icon: "💎", title: "VIP Service", desc: "24/7 concierge support for members" }
                        ].map((feature, i) => (
                        <div key={i} className="space-y-4 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                            <div className="text-4xl">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                            <p className="text-white/80">{feature.desc}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-purple-900/30 backdrop-blur-md text-white">
                    <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="space-y-4">
                        <h4 className="text-xl font-bold">LuxStay</h4>
                        <p className="text-sm text-white/80">Experience luxury at its finest with our carefully curated collection of premium hotels worldwide.</p>
                        </div>
                        <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2 text-white/80">
                            <li className="hover:text-white cursor-pointer">About Us</li>
                            <li className="hover:text-white cursor-pointer">Our Hotels</li>
                            <li className="hover:text-white cursor-pointer">Destinations</li>
                        </ul>
                        </div>
                        <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Support</h4>
                        <ul className="space-y-2 text-white/80">
                            <li className="hover:text-white cursor-pointer">Help Center</li>
                            <li className="hover:text-white cursor-pointer">Contact Us</li>
                            <li className="hover:text-white cursor-pointer">FAQs</li>
                        </ul>
                        </div>
                        <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Newsletter</h4>
                        <p className="text-sm text-white/80">Subscribe for exclusive deals and updates.</p>
                        <div className="flex gap-2">
                            <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <PrimaryButton className="bg-white text-purple-600 hover:bg-purple-100">
                            Subscribe
                            </PrimaryButton>
                        </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
                        <p>© 2024 LuxStay. All rights reserved.</p>
                    </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
