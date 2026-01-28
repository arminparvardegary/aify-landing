'use client';

import { useState, useEffect } from 'react';

// Brand Colors
const colors = {
    seashell: '#F6F2EF',
    cadmiumRed: '#B1162C',
    prussianBlue: '#002C52',
    regalBlue: '#00457A',
    softPink: '#FFB1CA',
    darkNight: '#000000',
    mirage: '#231F20',
    regentGrey: '#939598',
    platinum: '#E6E7E8',
    white: '#FFFFFF',
};

// Icons
const Icons = {
    ArrowRight: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    ),
    X: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    ),
    Check: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    ),
};

// Compact Data
const stats = [
    { number: '30-70%', desc: 'Organic reach dropped' },
    { number: '220%', desc: 'AI content growth' },
    { number: '70%', desc: 'Creators exit early' },
];

const aiTeam = [
    { initial: 'C', name: 'Content Strategist', desc: 'Plans, drafts and repurposes all your content', color: colors.softPink },
    { initial: 'S', name: 'Client Success', desc: 'Handles onboarding, support and retention', color: colors.regalBlue },
    { initial: 'M', name: 'Marketing & Analytics', desc: 'Builds campaigns and analyses performance', color: colors.cadmiumRed },
    { initial: 'D', name: 'Community Manager', desc: 'Nurtures relationships and engagement', color: colors.prussianBlue },
];

const processSteps = [
    { num: '01', title: 'Apply & Tell Us Your Bottlenecks' },
    { num: '02', title: 'Receive Your Custom AI Team Plan' },
    { num: '03', title: 'We Build & Integrate Everything' },
    { num: '04', title: 'You Scale With Ongoing Support' },
];

const outcomes = [
    'More time to think and lead',
    'Higher output with lower effort',
    'Consistent content without burnout',
    'Better client experiences',
    'Growth without hiring stress',
    'Business that runs when you are off',
];

// Button Component
const Button = ({
    children,
    onClick,
    size = 'default',
    className = '',
}: {
    children: React.ReactNode;
    onClick?: () => void;
    size?: 'default' | 'large';
    className?: string;
}) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0";
    const sizes = {
        default: 'px-6 py-3 text-sm md:px-8 md:py-4 md:text-base',
        large: 'px-8 py-4 text-base md:px-10 md:py-4 md:text-lg',
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${sizes[size]} ${className}`}
            style={{ background: colors.cadmiumRed, color: colors.white }}
        >
            {children}
        </button>
    );
};

export default function ShortPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', businessType: '', bottlenecks: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
    }, [isModalOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitStatus('success');
        setTimeout(() => {
            setIsModalOpen(false);
            setSubmitStatus('idle');
            setFormData({ name: '', email: '', businessType: '', bottlenecks: '' });
        }, 2000);
    };

    return (
        <main className="min-h-screen overflow-x-hidden">
            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(8px)' }}
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8 relative"
                        style={{ background: colors.white }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:rotate-90"
                            style={{ background: colors.seashell, color: colors.darkNight }}
                        >
                            <Icons.X />
                        </button>

                        {submitStatus === 'success' ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `${colors.cadmiumRed}20` }}>
                                    <Icons.Check />
                                </div>
                                <h3 className="text-2xl font-bold mb-2" style={{ color: colors.darkNight }}>Application Received!</h3>
                                <p style={{ color: colors.regentGrey }}>We'll send your personalised AI Team Plan shortly.</p>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-extrabold mb-2" style={{ color: colors.darkNight }}>Get Your AI Team Plan</h2>
                                <p className="mb-6 text-sm" style={{ color: colors.regentGrey }}>Tell us about your business.</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkNight }}>Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#B1162C] transition-colors"
                                            style={{ borderColor: colors.platinum }}
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkNight }}>Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#B1162C] transition-colors"
                                            style={{ borderColor: colors.platinum }}
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkNight }}>Business Type *</label>
                                        <select
                                            name="businessType"
                                            value={formData.businessType}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#B1162C] transition-colors appearance-none cursor-pointer"
                                            style={{ borderColor: colors.platinum, paddingRight: '3rem' }}
                                        >
                                            <option value="">Select type</option>
                                            <option value="creator">Creator</option>
                                            <option value="coach">Coach</option>
                                            <option value="consultant">Consultant</option>
                                            <option value="founder">Founder</option>
                                            <option value="small-business">Small Business</option>
                                        </select>
                                        <div className="absolute right-4 top-[2.7rem] pointer-events-none">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={colors.darkNight} strokeWidth="2">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkNight }}>Main Challenges *</label>
                                        <textarea
                                            name="bottlenecks"
                                            value={formData.bottlenecks}
                                            onChange={handleInputChange}
                                            required
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#B1162C] transition-colors resize-none"
                                            style={{ borderColor: colors.platinum }}
                                            placeholder="What's slowing you down?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{ background: colors.cadmiumRed, color: colors.white }}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Get My AI Team Plan'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Hero */}
            <section className="min-h-screen flex items-center py-20 relative overflow-hidden" style={{ background: colors.seashell }}>
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `radial-gradient(${colors.darkNight} 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }} />
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'url(/wave-background.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                    backgroundRepeat: 'no-repeat'
                }} />

                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left: Content */}
                        <div className="max-w-3xl">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.1]" style={{ color: colors.darkNight }}>
                                <span style={{ color: colors.cadmiumRed }}>AI-<i>Ify</i></span> Your Small Business
                            </h1>

                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 leading-tight" style={{ color: colors.mirage }}>
                                Earn like a team of ten. Operate with the freedom and clarity of one.
                            </p>

                            <p className="text-base md:text-lg mb-8 md:mb-10 max-w-xl leading-relaxed" style={{ color: colors.regentGrey }}>
                                Custom AI assistants built for your business, so you stop drowning in day-to-day tasks and finally create the freedom, consistency and growth your work deserves.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <Button onClick={() => setIsModalOpen(true)} size="large">
                                    Reveal Your AI Team Plan
                                    <Icons.ArrowRight />
                                </Button>
                            </div>

                            <p className="text-sm flex items-center gap-2" style={{ color: colors.regentGrey }}>
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                Get a clear breakdown in just 5 minutes
                            </p>
                        </div>

                        {/* Right: Image Grid */}
                        <div className="hidden lg:flex flex-col gap-4">
                            <div className="flex gap-4">
                                {/* Top Left - Team Meeting */}
                                <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                    <img src="/hero-1.jpg" alt="Team Collaboration" className="w-full h-64 object-cover" />
                                </div>
                                {/* Top Right - Product Planning */}
                                <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                    <img src="/hero-2.jpg" alt="Product Planning" className="w-full h-64 object-cover" />
                                </div>
                            </div>
                            {/* Bottom - Clean Workspace (Full Width) */}
                            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                <img src="/hero-3.jpg" alt="Modern Workspace" className="w-full h-64 object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-16 md:py-20" style={{ background: colors.white }}>
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8" style={{ color: colors.darkNight }}>
                        The Challenge
                    </h2>

                    <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-10">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-xl text-center border-2"
                                style={{ background: colors.seashell, borderColor: colors.platinum }}
                            >
                                <span className="block text-4xl font-extrabold mb-2" style={{ color: colors.cadmiumRed }}>
                                    {stat.number}
                                </span>
                                <p className="text-sm" style={{ color: colors.regentGrey }}>{stat.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 rounded-2xl text-center border-2" style={{ background: colors.darkNight, borderColor: colors.mirage, color: colors.white }}>
                        <p className="text-xl md:text-2xl font-bold mb-2">AI has reset the pace of business.</p>
                        <p className="text-lg" style={{ color: colors.regentGrey }}>If you're not using it, you're at a disadvantage.</p>
                    </div>
                </div>
            </section>

            {/* AI Team */}
            <section className="py-16 md:py-20" style={{ background: colors.seashell }}>
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ color: colors.darkNight }}>
                        Your AI Team
                    </h2>
                    <p className="text-center mb-10 max-w-2xl mx-auto" style={{ color: colors.regentGrey }}>
                        Custom AI assistants designed for your specific business needs.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        {aiTeam.map((member, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-xl border-2 transition-all hover:-translate-y-1"
                                style={{ background: colors.white, borderColor: colors.platinum }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl font-extrabold"
                                    style={{ background: member.color, color: colors.white }}
                                >
                                    {member.initial}
                                </div>
                                <h3 className="text-lg font-bold mb-2" style={{ color: colors.darkNight }}>{member.name}</h3>
                                <p className="text-sm" style={{ color: colors.regentGrey }}>{member.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 md:py-20" style={{ background: colors.white }}>
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10" style={{ color: colors.darkNight }}>
                        How It Works
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {processSteps.map((step, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-xl border-2"
                                style={{ background: colors.seashell, borderColor: colors.platinum }}
                            >
                                <span
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-3"
                                    style={{ background: colors.cadmiumRed, color: colors.white }}
                                >
                                    {step.num}
                                </span>
                                <h3 className="text-base font-bold" style={{ color: colors.darkNight }}>{step.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section className="py-16 md:py-20" style={{ background: colors.prussianBlue, color: colors.white }}>
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
                        What You Get
                    </h2>
                    <p className="text-center mb-10" style={{ color: colors.platinum }}>
                        With your AI team running the day-to-day:
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {outcomes.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 p-4 rounded-xl"
                                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                            >
                                <span
                                    className="w-6 h-6 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                                    style={{ background: colors.softPink, color: colors.prussianBlue }}
                                >
                                    +
                                </span>
                                <p className="text-sm font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: colors.darkNight }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 rounded-full" style={{ background: colors.cadmiumRed, filter: 'blur(100px)' }} />
                    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full" style={{ background: colors.prussianBlue, filter: 'blur(100px)' }} />
                </div>

                <div className="max-w-3xl mx-auto px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6" style={{ color: colors.white }}>
                        Get Your Personalised AI Team Plan
                    </h2>

                    <p className="text-lg md:text-xl mb-10" style={{ color: colors.platinum }}>
                        See exactly which AI assistants your business needs to scale with clarity and confidence.
                    </p>

                    <Button onClick={() => setIsModalOpen(true)} size="large">
                        Apply Now
                        <Icons.ArrowRight />
                    </Button>

                    <p className="mt-6 text-sm" style={{ color: colors.regentGrey }}>
                        Apply before your competitors do.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12" style={{ background: colors.darkNight, color: colors.white, borderTop: `1px solid ${colors.mirage}` }}>
                <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
                    <p className="text-2xl font-extrabold mb-2">
                        <span style={{ color: colors.cadmiumRed }}>AI</span><span>-<i>Ify</i></span>
                    </p>
                    <p className="text-sm" style={{ color: colors.regentGrey }}>
                        Custom AI assistants for small businesses.
                    </p>
                    <p className="text-sm mt-4" style={{ color: colors.regentGrey }}>
                        &copy; 2026 AI-Ify. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
