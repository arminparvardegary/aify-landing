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
    ArrowUp: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
        </svg>
    ),
    ChevronDown: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M6 9l6 6 6-6" />
        </svg>
    ),
    Star: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ),
    Menu: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    ),
    X: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    ),
};

// Data from brief
const stats = [
    { number: '30-70%', desc: 'Organic reach dropped since 2021' },
    { number: '34%', desc: 'Audience loyalty down' },
    { number: '220%', desc: 'AI-generated content surged year-on-year' },
    { number: '60-70%', desc: 'Of week spent on admin, not growth' },
    { number: '70%', desc: 'Creators exit within 12-18 months' },
];

const painPoints = [
    "You're doing too much for too little return.",
    "Output expectations have doubled; your capacity hasn't.",
    "Tech changes weekly — and you're tired of duct-taping systems together.",
    "You've outgrown your backend but don't know what to rebuild next.",
    "Content takes hours, reach is inconsistent, and conversion feels unpredictable.",
    "You spend more time inside the business than leading it.",
    "Hiring even one person can cut margins by 50–70%.",
    "Burnout rises because you're wearing every hat.",
];

const aiTeam = [
    {
        initial: 'C',
        name: 'Content Strategist AI',
        nickname: 'Cara, your content engine in heels',
        desc: 'Plans your editorial calendar, researches your niche, drafts high-converting content, and repurposes everything you create into reels, carousels, emails and scripts without you rewriting a thing.',
        gradient: 'linear-gradient(135deg, #FFB1CA 0%, #B1162C 100%)',
        image: '/ai-content-writer.png',
    },
    {
        initial: 'S',
        name: 'Client Success AI',
        nickname: "Sarah, your customer's favourite person",
        desc: 'Welcomes every new client, handles onboarding, answers FAQs, collects check-ins and flags risks before they become churn. Keeps clients engaged, supported and sticking around longer.',
        gradient: 'linear-gradient(135deg, #00457A 0%, #002C52 100%)',
        image: '/ai-support.png',
    },
    {
        initial: 'T',
        name: 'Operations & Systems AI',
        nickname: 'Tom, your operational backbone',
        desc: 'Organises your workflow, manages tasks and priorities, builds SOPs, fixes bottlenecks and keeps everything moving without babysitting. Zero chaos. Total clarity.',
        gradient: 'linear-gradient(135deg, #231F20 0%, #000000 100%)',
        image: '/ai-email.png',
    },
    {
        initial: 'M',
        name: 'Marketing & Analytics AI',
        nickname: 'Megan, Your Strategic Marketer',
        desc: 'Builds campaigns, writes landing pages, analyses performance, identifies gaps and opportunities, and turns your data into decisions you can actually use.',
        gradient: 'linear-gradient(135deg, #B1162C 0%, #002C52 100%)',
        image: '/ai-social-media.png',
    },
    {
        initial: 'D',
        name: 'Community AI',
        nickname: 'Dave, the one who never forgets to reply',
        desc: 'Starts conversations, nurtures relationships, prompts engagement, checks in with your audience and keeps your community active, warm and ready to buy.',
        gradient: 'linear-gradient(135deg, #002C52 0%, #00457A 100%)',
        image: '/ai-social-media.png',
    },
    {
        initial: 'L',
        name: 'Sales Support AI',
        nickname: 'Lorrie - Your quiet closer',
        desc: 'Pre-qualifies leads, prepares call notes, drafts follow-ups, handles objections and keeps pipeline momentum moving, so you convert more without working more.',
        gradient: 'linear-gradient(135deg, #939598 0%, #231F20 100%)',
        image: '/ai-sales.png',
    },
];

const processSteps = [
    { num: '01', title: 'Apply & Tell Us Your Bottlenecks', desc: 'We audit your workflows, capacity gaps and growth goals.' },
    { num: '02', title: 'Receive Your Custom AI Team Plan', desc: 'A tailored blueprint outlining the exact assistants, systems and automations you need.' },
    { num: '03', title: 'We Build, Integrate & Test Everything', desc: 'Your AI team, workflows, dashboards, content engine and backend, done for you.' },
    { num: '04', title: 'You Scale With Ongoing Support & Optimisation', desc: 'We maintain, refine and evolve your AI team as your business grows.' },
];

const packageItems = [
    'Full AI assistant build (done-for-you)',
    'Done-with-you strategic sprint',
    'Workflow mapping + automation setup',
    'Personalised content engine',
    'Lead-gen + onboarding infrastructure',
    'Community + retention systems',
    'Data dashboards + reporting',
    'Templates, prompts, scripts and SOPs',
    'Dedicated support and optimisation',
    'Access to internal frameworks, tools and libraries',
];

const outcomes = [
    'More time to think, build, create and lead',
    'Clarity and structure across your business',
    'Higher output with lower effort',
    'Consistent content without burnout',
    'Better client delivery and retention',
    'A backend that supports growth, not chaos',
    'Revenue scaling without hiring a full team',
    'A business that performs even when you take time off',
];

const audienceItems = [
    'More leads and sales without breaking their bandwidth',
    'A content engine that performs like an in-house media team',
    'Distribution that amplifies their brand and authority',
    'Audience growth driven by free value, trust and consistency',
    'Clients who stay longer and refer naturally',
    "Systems that don't just connect, they work together",
    'A backend that supports scale instead of stalling it',
    'Operational clarity to think like a founder, not a firefighter',
    'Infrastructure that matches the ambition of their brand',
    'Leverage without hiring or sacrificing margin',
    'A competitive edge in an AI-accelerated market',
];

const faqs = [
    { q: 'Do I need to be "techy"?', a: 'No, we build and maintain everything for you.' },
    { q: 'What platforms can this connect to?', a: 'We customise to the tools you already use.' },
    { q: 'Will this replace my personality or authenticity?', a: 'No, your AI team exists to amplify you, not replace you.' },
    { q: 'Is this a course?', a: "No. It's a done-for-you + done-with-you implementation sprint." },
    { q: 'How do I know what assistants I need?', a: 'We map it out in your personalised AI team plan.' },
    { q: 'How much does it cost?', a: 'Pricing varies based on the assistants, workflows and systems your business needs. After your application, we map the exact build required to support your growth and provide a tailored proposal.' },
];

// Button Component
const Button = ({
    children,
    href = '#',
    variant = 'primary',
    size = 'default',
    className = '',
    onClick,
}: {
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary';
    size?: 'default' | 'large';
    className?: string;
    onClick?: () => void;
}) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0";
    const sizes = {
        default: 'px-6 py-3 text-sm md:px-8 md:py-4 md:text-base',
        large: 'px-8 py-4 text-base md:px-12 md:py-5 md:text-lg',
    };
    const variants = {
        primary: { background: colors.cadmiumRed, color: colors.white },
        secondary: { background: colors.darkNight, color: colors.white },
    };

    if (onClick) {
        return (
            <button onClick={onClick} className={`${baseStyles} ${sizes[size]} ${className}`} style={variants[variant]}>
                {children}
            </button>
        );
    }

    return (
        <a href={href} className={`${baseStyles} ${sizes[size]} ${className}`} style={variants[variant]}>
            {children}
        </a>
    );
};

// Scroll to top
const ScrollToTop = ({ show }: { show: boolean }) => (
    <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        style={{ background: colors.cadmiumRed, color: colors.white }}
    >
        <Icons.ArrowUp />
    </button>
);

export default function ShortPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessType: '',
        bottlenecks: '',
        goals: '',
        teamSize: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitStatus('success');

        // Reset form after 2 seconds
        setTimeout(() => {
            setIsModalOpen(false);
            setSubmitStatus('idle');
            setFormData({
                name: '',
                email: '',
                businessType: '',
                bottlenecks: '',
                goals: '',
                teamSize: '',
            });
        }, 2000);
    };

    return (
        <main className="min-h-screen overflow-x-hidden">
            {/* Application Form Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(8px)' }}
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8 relative"
                        style={{ background: colors.white }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:rotate-90"
                            style={{ background: colors.seashell, color: colors.darkNight }}
                        >
                            <Icons.X />
                        </button>

                        {submitStatus === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: `${colors.cadmiumRed}20` }}>
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={colors.cadmiumRed} strokeWidth="3">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: colors.darkNight }}>Application Received!</h3>
                                <p className="text-lg" style={{ color: colors.regentGrey }}>We'll send your personalized AI Team Plan to your inbox shortly.</p>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: colors.darkNight }}>Apply for Your AI Team Plan</h2>
                                <p className="mb-6" style={{ color: colors.regentGrey }}>Tell us about your business and we'll create a personalized blueprint.</p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkNight }}>Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#B1162C] transition-colors"
                                            style={{ borderColor: colors.platinum, background: colors.white }}
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkNight }}>Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#B1162C] transition-colors"
                                            style={{ borderColor: colors.platinum, background: colors.white }}
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    {/* Business Type */}
                                    <div className="relative">
                                        <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkNight }}>Business Type *</label>
                                        <select
                                            name="businessType"
                                            value={formData.businessType}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#B1162C] transition-colors appearance-none cursor-pointer"
                                            style={{ borderColor: colors.platinum, background: colors.white, paddingRight: '3rem' }}
                                        >
                                            <option value="">Select your business type</option>
                                            <option value="creator">Creator</option>
                                            <option value="coach">Coach</option>
                                            <option value="consultant">Consultant</option>
                                            <option value="founder">Founder</option>
                                            <option value="small-business">Small Business Owner</option>
                                        </select>
                                        <div className="absolute right-4 top-[2.7rem] pointer-events-none">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={colors.darkNight} strokeWidth="2">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Team Size */}
                                    <div className="relative">
                                        <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkNight }}>Team Size *</label>
                                        <select
                                            name="teamSize"
                                            value={formData.teamSize}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#B1162C] transition-colors appearance-none cursor-pointer"
                                            style={{ borderColor: colors.platinum, background: colors.white, paddingRight: '3rem' }}
                                        >
                                            <option value="">Select your team size</option>
                                            <option value="solo">Solo</option>
                                            <option value="2-5">2-5 people</option>
                                            <option value="6-10">6-10 people</option>
                                            <option value="11+">11+ people</option>
                                        </select>
                                        <div className="absolute right-4 top-[2.7rem] pointer-events-none">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={colors.darkNight} strokeWidth="2">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Bottlenecks */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkNight }}>Current Bottlenecks *</label>
                                        <textarea
                                            name="bottlenecks"
                                            value={formData.bottlenecks}
                                            onChange={handleInputChange}
                                            required
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#B1162C] transition-colors resize-none"
                                            style={{ borderColor: colors.platinum, background: colors.white }}
                                            placeholder="What's slowing you down? (e.g., content creation, client onboarding, admin tasks)"
                                        />
                                    </div>

                                    {/* Goals */}
                                    <div>
                                        <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkNight }}>Main Goals *</label>
                                        <textarea
                                            name="goals"
                                            value={formData.goals}
                                            onChange={handleInputChange}
                                            required
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#B1162C] transition-colors resize-none"
                                            style={{ borderColor: colors.platinum, background: colors.white }}
                                            placeholder="What do you want to achieve? (e.g., scale revenue, free up time, improve systems)"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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

            {/* ===== CTA 1 - HERO ===== */}
            <section className="min-h-screen flex items-center py-16 relative overflow-hidden" style={{ background: colors.seashell }}>
                {/* Wave Background */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'url(/wave-background.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                    backgroundRepeat: 'no-repeat'
                }} />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(${colors.darkNight} 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left: Content */}
                        <div className="max-w-3xl">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.1]" style={{ color: colors.darkNight }}>
                                <span style={{ color: colors.cadmiumRed }}>AI-<i>Ify</i></span> Your Small Business
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 leading-tight" style={{ color: colors.mirage }}>
                                Earn like a team of ten. Operate with the clarity and freedom of one.
                            </p>
                            <p className="text-base md:text-lg mb-8 md:mb-10 max-w-xl leading-relaxed" style={{ color: colors.regentGrey }}>
                                Custom AI assistants built specifically for your business, so you stop drowning in day-to-day tasks and finally create the consistency, space and growth your work deserves.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                <Button onClick={() => setIsModalOpen(true)} size="large">
                                    Reveal Your AI Team Plan
                                    <Icons.ArrowRight />
                                </Button>
                            </div>
                            <p className="text-sm" style={{ color: colors.regentGrey }}>
                                Find out exactly which AI roles will remove your workload and unlock scale.
                            </p>
                        </div>

                        {/* Right: Image Grid */}
                        <div className="hidden lg:grid grid-cols-2 gap-4 auto-rows-fr">
                            {/* Top Left - Crystal */}
                            <div className="row-span-2 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                <img src="/ai-crystal.png" alt="AI Technology" className="w-full h-full object-cover" />
                            </div>
                            {/* Top Right - Portrait */}
                            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                <img src="/ai-portrait.png" alt="AI Assistant" className="w-full h-full object-cover" />
                            </div>
                            {/* Bottom Right - Brain */}
                            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                <img src="/ai-brain.png" alt="AI Intelligence" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] pointer-events-none opacity-30 md:opacity-50" style={{ background: `radial-gradient(circle, ${colors.cadmiumRed}20 0%, transparent 70%)`, filter: 'blur(60px)' }} />
            </section>

            {/* ===== SECTION 2 - THE PROBLEM ===== */}
            <section className="py-16 md:py-24" style={{ background: colors.white }}>
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mb-12 md:mb-16">

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6" style={{ color: colors.darkNight }}>Why You Need This Now</h2>
                        <p className="text-lg md:text-xl" style={{ color: colors.regentGrey }}>The pressure you&apos;re feeling isn&apos;t personal: it&apos;s structural and the data proves it.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 mb-12 md:mb-16">
                        {stats.map((stat, i) => (
                            <div key={i} className="p-5 md:p-7 rounded-xl md:rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group border" style={{ background: colors.seashell, borderColor: 'transparent' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = colors.cadmiumRed + '40')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}>
                                <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 md:mb-3 transition-transform group-hover:scale-105" style={{ color: colors.cadmiumRed }}>{stat.number}</span>
                                <p className="text-sm md:text-base leading-snug" style={{ color: colors.regentGrey }}>{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mb-12 md:mb-16">
                        <h3 className="text-xl md:text-2xl font-bold mb-6" style={{ color: colors.darkNight }}>And it&apos;s showing up the same way for almost every founder right now:</h3>
                        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                            {painPoints.map((point, i) => (
                                <div key={i} className="flex items-start gap-3 md:gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md" style={{ background: colors.seashell }}>
                                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: colors.cadmiumRed }}>
                                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                                    </span>
                                    <p className="text-sm md:text-base" style={{ color: colors.mirage }}>{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 md:p-12 rounded-2xl md:rounded-3xl text-center relative overflow-hidden" style={{ background: colors.darkNight, color: colors.white }}>
                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(${colors.white} 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
                        <div className="relative z-10">
                            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: colors.cadmiumRed }}>Meanwhile:</p>
                            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium">AI has already reset the pace of business.<br /><span style={{ color: colors.regentGrey }}>If you&apos;re not using it, you&apos;re operating at a disadvantage.</span></p>
                            <p className="text-2xl md:text-3xl font-bold mt-6" style={{ color: colors.cadmiumRed }}>It&apos;s time to build your own AI team.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 3 - THE SOLUTION ===== */}
            <section id="solution" className="py-16 md:py-24 scroll-mt-20" style={{ background: colors.darkNight, color: colors.white }}>
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mb-12 md:mb-16">

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6">Meet Your AI Team</h2>
                        <p className="text-base md:text-lg mb-2" style={{ color: colors.platinum }}>Your AI Team is a set of custom-built AI assistants designed around the actual needs of your business.</p>
                        <p className="text-base md:text-lg" style={{ color: colors.regentGrey }}>Each assistant operates like a specialist role, without the cost, management or complexity of hiring.</p>
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: colors.softPink }}>Your AI Team may include:</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
                        {aiTeam.map((member, i) => (
                            <div key={i} className="p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden" style={{ background: colors.mirage }}>
                                {/* Background Image */}
                                <div className="absolute inset-0 opacity-20">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none" style={{ background: member.gradient, filter: 'blur(40px)' }} />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 text-xl md:text-2xl font-extrabold transition-transform group-hover:scale-110 shadow-lg" style={{ background: member.gradient, color: colors.white }}>{member.initial}</div>
                                    <h3 className="text-lg md:text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-sm italic mb-4" style={{ color: colors.softPink }}>{member.nickname}</p>
                                    <p className="text-sm md:text-base leading-relaxed" style={{ color: colors.platinum }}>{member.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-8 md:p-12 rounded-2xl md:rounded-3xl text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.prussianBlue} 0%, ${colors.regalBlue} 100%)` }}>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(${colors.white} 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                        <div className="relative z-10">
                            <p className="text-lg md:text-xl font-semibold mb-4">No templates. No generic bots.</p>
                            <p className="mb-4 text-sm md:text-base" style={{ color: colors.platinum }}>We build AI team members that understand your offers, clients, language, data and unique way of working.</p>
                            <p className="font-bold text-base md:text-lg" style={{ color: colors.softPink }}>Every transcript, every piece of content, every SOP becomes fuel for a business that runs smarter and scales faster.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA 2 - MID PAGE ===== */}
            <section className="py-12 md:py-16 lg:py-20" style={{ background: colors.seashell }}>
                <div className="max-w-5xl mx-auto px-4 md:px-6">
                    <div className="p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl text-center shadow-2xl relative overflow-hidden" style={{ background: colors.white }}>
                        <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, ${colors.cadmiumRed}, ${colors.prussianBlue})` }} />

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 md:mb-6" style={{ color: colors.darkNight }}>See Your Recommended AI Team</h2>
                        <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: colors.regentGrey }}>Get a personalised blueprint showing the assistants, workflows and systems your business actually needs.</p>
                        <Button onClick={() => setIsModalOpen(true)} size="large">Get Your AI Team Plan<Icons.ArrowRight /></Button>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 5 - THE HUMAN ADVANTAGE ===== */}
            <section className="py-16 md:py-24" style={{ background: colors.white }}>
                <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-8" style={{ color: colors.darkNight }}>Connection Is Your Competitive Advantage</h2>
                    <div className="space-y-6 md:space-y-8">
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium" style={{ color: colors.mirage }}>AI has increased the volume of content but it hasn&apos;t increased connection.</p>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold" style={{ color: colors.cadmiumRed }}>And connection is your only true competitive advantage.</p>
                        <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: colors.mirage }}>To build it, you need space, space to think, create, lead, communicate and show up as the human your audience follows.</p>
                        <p className="text-lg md:text-xl font-bold" style={{ color: colors.darkNight }}>Right now, you&apos;re buried in execution. Your AI team gives you that space back.</p>
                        <p className="text-base md:text-lg" style={{ color: colors.mirage }}>It handles the workload so you can return to the role that actually grows the business:</p>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4 my-6 md:my-8">
                            {['The strategist', 'The storyteller', 'The leader'].map((role, i) => (
                                <span key={i} className="px-5 py-2.5 rounded-full text-base md:text-lg font-semibold shadow-md" style={{ background: colors.white, color: colors.prussianBlue, border: `2px solid ${colors.prussianBlue}` }}>{role}</span>
                            ))}
                        </div>
                        <div className="pt-6 md:pt-8">
                            <p className="text-lg md:text-xl" style={{ color: colors.mirage }}>In a world where AI can do almost everything,</p>
                            <p className="text-xl md:text-2xl font-bold mt-2" style={{ color: colors.darkNight }}>the one thing it cannot replace is you.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 6 - HOW IT WORKS ===== */}
            <section id="process" className="py-16 md:py-24 scroll-mt-20" style={{ background: colors.seashell }}>
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-16">

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: colors.darkNight }}>How It Works</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
                        {processSteps.map((step, i) => (
                            <div key={i} className="p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group" style={{ background: colors.white }}>
                                <span className="absolute -top-6 -right-4 text-8xl md:text-9xl font-extrabold opacity-[0.07] transition-transform group-hover:scale-110 select-none" style={{ color: colors.cadmiumRed }}>{step.num}</span>
                                <div className="flex items-center gap-3 mb-4 relative z-10">
                                    <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: colors.cadmiumRed, color: colors.white }}>{step.num}</span>
                                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: colors.regentGrey }}>Step {i + 1}</span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-3 relative z-10" style={{ color: colors.darkNight }}>{step.title}</h3>
                                <p className="text-sm md:text-base relative z-10" style={{ color: colors.regentGrey }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center"><Button onClick={() => setIsModalOpen(true)} size="large">Apply for Your AI Team<Icons.ArrowRight /></Button></div>
                </div>
            </section>

            {/* ===== SECTION 7 - WHAT'S INCLUDED ===== */}
            <section className="py-16 md:py-24" style={{ background: colors.prussianBlue, color: colors.white }}>
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-16">

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Your Package Includes</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-12">
                        {packageItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 md:p-6 rounded-xl transition-all duration-300 hover:bg-white/20 group" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{ background: colors.softPink }}>
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={colors.prussianBlue} strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <span className="text-base md:text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xl md:text-2xl font-semibold" style={{ color: colors.softPink }}>We don&apos;t install templates. We build the infrastructure your business actually needs.</p>
                </div>
            </section>

            {/* ===== SECTION 8 - THE OUTCOME ===== */}
            <section className="py-16 md:py-24" style={{ background: colors.seashell }}>
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-16">

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: colors.darkNight }}>What Life Looks Like After</h2>
                        <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: colors.regentGrey }}>With your AI team running the day-to-day, you get:</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12 md:mb-16">
                        {outcomes.map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 md:p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group" style={{ background: colors.white }}>
                                <span className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0 transition-all group-hover:scale-110 group-hover:rotate-12" style={{ background: colors.cadmiumRed, color: colors.white }}>+</span>
                                <p className="text-sm md:text-base font-medium" style={{ color: colors.mirage }}>{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center p-8 md:p-12 rounded-2xl" style={{ background: colors.white }}>
                        <p className="text-lg md:text-xl mb-2" style={{ color: colors.mirage }}>This is your key to operating like you&apos;ve secured a seven-figure investment,</p>
                        <p className="text-xl md:text-2xl font-bold" style={{ color: colors.darkNight }}>without giving up equity, hiring staff, or burning out.</p>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 9 - WHO THIS IS FOR ===== */}
            <section className="py-16 md:py-24" style={{ background: colors.white }}>
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-16">

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: colors.darkNight }}>Who This Is For</h2>
                        <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: colors.regentGrey }}>This is for creators, coaches, consultants, founders and small-business owners who want:</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-12 md:mb-16">
                        {audienceItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 md:p-5 rounded-xl border-l-4 transition-all duration-300 hover:shadow-md hover:translate-x-1 group" style={{ background: colors.seashell, borderColor: colors.cadmiumRed }}>
                                <div className="w-2 h-2 rounded-full flex-shrink-0 transition-transform group-hover:scale-150" style={{ background: colors.cadmiumRed }} />
                                <span className="text-sm md:text-base" style={{ color: colors.mirage }}>{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-xl md:text-2xl text-center font-bold" style={{ color: colors.darkNight }}>If you&apos;re ready to evolve, this is your moment.</p>
                </div>
            </section>

            {/* ===== SECTION 10 - FAQ ===== */}
            <section id="faq" className="py-16 md:py-24 scroll-mt-20" style={{ background: colors.seashell }}>
                <div className="max-w-3xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-16">

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: colors.darkNight }}>Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300" style={{ background: colors.white, boxShadow: openFaq === i ? '0 10px 40px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.04)', border: openFaq === i ? `2px solid ${colors.cadmiumRed}30` : '2px solid transparent' }}>
                                <button className="w-full p-6 md:p-7 flex justify-between items-center text-left font-semibold text-base md:text-lg transition-all" style={{ color: colors.darkNight }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    <span className="pr-4">{faq.q}</span>
                                    <span className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === i ? 'rotate-180' : ''}`} style={{ background: openFaq === i ? colors.cadmiumRed : colors.seashell, color: openFaq === i ? colors.white : colors.mirage }}><Icons.ChevronDown /></span>
                                </button>
                                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? '250px' : '0' }}>
                                    <p className="px-6 md:px-7 pb-6 md:pb-7 text-base md:text-lg leading-relaxed" style={{ color: colors.regentGrey }}>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA 3 ===== */}
            <section id="apply" className="py-20 md:py-32 lg:py-40 scroll-mt-20 relative overflow-hidden" style={{ background: colors.darkNight }}>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full" style={{ background: colors.cadmiumRed, filter: 'blur(120px)' }} />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full" style={{ background: colors.prussianBlue, filter: 'blur(120px)' }} />
                </div>
                <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8" style={{ color: colors.white }}>Apply for Your AI Team Plan</h2>
                    <p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-2xl mx-auto leading-relaxed" style={{ color: colors.platinum }}>Your custom build. Your clarity. Your next level, delivered to your inbox.</p>
                    <p className="text-base md:text-lg mb-12 md:mb-14 max-w-2xl mx-auto" style={{ color: colors.regentGrey }}>Ready to scale with clarity, confidence and leverage?</p>
                    <Button onClick={() => setIsModalOpen(true)} size="large" className="shadow-2xl">Apply for Your AI Team<Icons.ArrowRight /></Button>
                    <p className="mt-8 text-base md:text-lg font-semibold" style={{ color: colors.softPink }}>Apply now to build your AI Team, before your competitors do.</p>
                </div>
            </section>
        </main>
    );
}
