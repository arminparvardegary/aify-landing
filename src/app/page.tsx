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

// SVG Icons Component
const Icons = {
  TrendDown: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M23 18L13.5 8.5L8.5 13.5L1 6" />
      <path d="M17 18H23V12" />
    </svg>
  ),
  Robot: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <circle cx="8" cy="16" r="1" />
      <circle cx="16" cy="16" r="1" />
    </svg>
  ),
  BarChart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  Zap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Heart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  Briefcase: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  ChevronDown: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
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
  Star: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

// Data
const stats = [
  { number: '30-70%', desc: 'Organic reach dropped since 2021' },
  { number: '34%', desc: 'Audience loyalty fallen since 2020' },
  { number: '220%', desc: 'AI content growth year over year' },
  { number: '60-70%', desc: 'Of week spent on admin, not growth' },
  { number: '70%', desc: 'Creators exit within 12-18 months' },
  { number: '50-70%', desc: 'Margin cut by hiring one person' },
];

// Updated pain points - added the missing one
const painPoints = [
  "You're doing too much for too little return.",
  "Output expectations have doubled; your capacity hasn't.",
  'Tech changes weekly and you "just want it done properly."',
  "You've outgrown your workflow but don't know what to build next.",
  "Content takes hours, reach is inconsistent, conversions unpredictable.",
  "You spend more time inside the business than leading it.",
  "Burnout rises because you're wearing every hat.",
  "Hiring even one person can cut your margin by 50 to 70%.",
];

// Updated reality items - added the missing one
const realityItems = [
  { Icon: Icons.TrendDown, text: 'Organic reach is declining across all platforms.' },
  { Icon: Icons.Robot, text: 'AI-generated content now competes directly with human creators.' },
  { Icon: Icons.BarChart, text: 'Content supply has exploded; attention has not.' },
  { Icon: Icons.Zap, text: 'Algorithms reward structure, consistency and volume, not creativity alone.' },
  { Icon: Icons.Briefcase, text: 'Operational load for small businesses has never been higher.' },
  { Icon: Icons.Heart, text: 'Audiences want clarity, speed, relevance and connection.' },
  { Icon: Icons.Users, text: 'Founders are expected to be strategists, creators, operators and analysts at once.' },
];

// Fixed AI Team descriptions
const aiTeam = [
  {
    initial: 'C',
    name: 'Content Strategist AI',
    nickname: 'Cara, your content engine in heels',
    desc: 'Plans your editorial calendar, researches your niche, drafts content, and repurposes everything you create into reels, emails, carousels and scripts.',
    color: colors.softPink,
    image: '/ai-content-writer.png',
  },
  {
    initial: 'S',
    name: 'Client Success AI',
    nickname: "Sarah, your client's favourite person",
    desc: 'Handles onboarding, check-ins, feedback collection, and ensures every client feels seen, heard and supported throughout their journey.',
    color: colors.regalBlue,
    image: '/ai-support.png',
  },
  {
    initial: 'T',
    name: 'Operations & Systems AI',
    nickname: 'Tom, your operational backbone',
    desc: 'Organises workflow, manages tasks and priorities, builds SOPs, fixes bottlenecks and keeps everything moving without babysitting.',
    color: colors.mirage,
    image: '/ai-email.png',
  },
  {
    initial: 'M',
    name: 'Marketing & Analytics AI',
    nickname: 'Megan, your strategic marketer',
    desc: 'Builds campaigns, writes landing pages, analyses performance and turns your data into decisions that drive growth.',
    color: colors.cadmiumRed,
    image: '/ai-social-media.png',
  },
  {
    initial: 'D',
    name: 'Community AI',
    nickname: 'Dave, the one who never forgets to reply',
    desc: 'Starts conversations, nurtures relationships, prompts engagement, checks in with your audience and keeps your community active, warm and ready to buy.',
    color: colors.prussianBlue,
    image: '/ai-social-media.png',
  },
  {
    initial: 'L',
    name: 'Sales Support AI',
    nickname: 'Lorrie, your quiet closer',
    desc: 'Pre-qualifies leads, prepares call notes, drafts follow-ups, handles objections and keeps pipeline momentum strong.',
    color: colors.regentGrey,
    image: '/ai-sales.png',
  },
];

const processSteps = [
  { num: '01', title: 'Apply & Tell Us Your Bottlenecks', desc: 'We audit your business, workflows, capacity gaps and goals.' },
  { num: '02', title: 'Receive Your Custom AI Team Plan', desc: 'A tailored blueprint showing the exact assistants, workflows and automations you need.' },
  { num: '03', title: 'We Build, Integrate & Test Everything', desc: 'Your AI assistants, content engine, workflows, dashboards and systems, all done for you.' },
  { num: '04', title: 'Scale With Ongoing Optimisation', desc: 'We maintain, refine and evolve your AI team as your business grows.' },
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
  'Access to our internal frameworks, tools, and libraries',
];

const outcomes = [
  'More time to think, build, create and lead',
  'Clarity and structure across the business',
  'Higher output with lower effort',
  'Consistent content without burnout',
  'Better client experiences',
  'Modern, reliable systems',
  'Growth without hiring stress',
  'A business that performs even when you take time off',
  'A competitive advantage in 2026 and beyond',
];

const audienceItems = [
  'More leads + sales without breaking bandwidth',
  'A content engine that performs like an in-house media team',
  'Distribution that amplifies brand and authority',
  'Trust-building content at scale',
  'Better retention and high-lifetime-value clients',
  'Systems that work together, not against each other',
  'Operational clarity instead of constant firefighting',
  'Infrastructure that supports scale',
  'Leverage without payroll blowouts',
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
  onClick
}: {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'large';
  className?: string;
  onClick?: () => void;
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0";
  const sizes = {
    default: 'px-6 py-3 text-sm md:px-8 md:py-4 md:text-base',
    large: 'px-8 py-4 text-base md:px-12 md:py-5 md:text-lg',
  };

  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return { background: colors.cadmiumRed, color: colors.white };
      case 'secondary':
        return { background: colors.darkNight, color: colors.white };
      case 'outline':
        return { background: 'transparent', color: colors.darkNight, border: `2px solid ${colors.darkNight}` };
      default:
        return { background: colors.cadmiumRed, color: colors.white };
    }
  };

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${sizes[size]} ${className}`}
        style={getStyles()}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={`${baseStyles} ${sizes[size]} ${className}`}
      style={getStyles()}
    >
      {children}
    </a>
  );
};



export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

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
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 shadow-lg' : 'py-4 md:py-5'
        }`}
        style={{ background: 'rgba(246, 242, 239, 0.98)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#" className="text-xl md:text-2xl font-extrabold tracking-tight">
            <span style={{ color: colors.cadmiumRed }}>AI</span>
            <span style={{ color: colors.darkNight }}>-<i>Ify</i></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#solution" className="text-sm font-medium hover:text-[#B1162C] transition-colors" style={{ color: colors.mirage }}>Solution</a>
            <a href="#process" className="text-sm font-medium hover:text-[#B1162C] transition-colors" style={{ color: colors.mirage }}>How It Works</a>
            <a href="#faq" className="text-sm font-medium hover:text-[#B1162C] transition-colors" style={{ color: colors.mirage }}>FAQ</a>
            <Button onClick={() => setIsModalOpen(true)} size="default">Apply Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: colors.darkNight }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden border-t ${
            mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ background: colors.seashell, borderColor: colors.platinum }}
        >
          <div className="px-4 py-6 flex flex-col gap-4">
            <a href="#solution" onClick={() => setMobileMenuOpen(false)} className="py-3 font-medium border-b" style={{ color: colors.mirage, borderColor: colors.platinum }}>Solution</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="py-3 font-medium border-b" style={{ color: colors.mirage, borderColor: colors.platinum }}>How It Works</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-3 font-medium border-b" style={{ color: colors.mirage, borderColor: colors.platinum }}>FAQ</a>
            <Button onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }} className="w-full text-center mt-2">Apply Now</Button>
          </div>
        </div>
      </nav>

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
                <p className="text-lg" style={{ color: colors.regentGrey }}>We&apos;ll send your personalised AI Team Plan to your inbox shortly.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: colors.darkNight }}>Apply for Your AI Team Plan</h2>
                <p className="mb-6" style={{ color: colors.regentGrey }}>Tell us about your business and we&apos;ll create a personalised blueprint.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 md:pt-24 pb-16 relative overflow-hidden" style={{ background: colors.seashell }}>
        {/* Wave Background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(/wave-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat'
        }} />
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(${colors.darkNight} 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
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

        {/* Decorative Circle */}
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] pointer-events-none opacity-5 rounded-full" style={{
          background: colors.cadmiumRed,
          filter: 'blur(60px)'
        }} />


      </section>

      {/* CTA #1 - After Hero */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: colors.white }}>
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div
            className="p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl text-center relative overflow-hidden shadow-xl border-2"
            style={{ background: colors.prussianBlue, borderColor: colors.regalBlue }}
          >
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(${colors.white} 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5 text-white">Reveal Your AI Team Plan</h3>
              <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: colors.platinum }}>
                In five minutes, get a clear breakdown of the exact AI assistants your business needs to remove bottlenecks, lift capacity and scale with ease.
              </p>
              <Button onClick={() => setIsModalOpen(true)} size="large">
                Reveal Your AI Team Plan
                <Icons.ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24" style={{ background: colors.white }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12 md:mb-16">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6" style={{ color: colors.darkNight }}>
              Why You Need This Now
            </h2>
            <p className="text-lg md:text-xl" style={{ color: colors.regentGrey }}>
              The pressure you&apos;re feeling isn&apos;t personal, it&apos;s structural.
            </p>
          </div>

          {/* Data Section */}
          <div className="mb-12 md:mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: colors.cadmiumRed }}>
              The data is clear:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 md:p-7 rounded-xl md:rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group border"
                  style={{ background: colors.seashell, borderColor: 'transparent' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = colors.cadmiumRed + '40'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                >
                  <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 md:mb-3 transition-transform group-hover:scale-105" style={{ color: colors.cadmiumRed }}>
                    {stat.number}
                  </span>
                  <p className="text-sm md:text-base leading-snug" style={{ color: colors.regentGrey }}>{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pain Points */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6" style={{ color: colors.darkNight }}>
              And here&apos;s what founders actually experience every day:
            </h3>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {painPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 md:gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md"
                  style={{ background: colors.seashell }}
                >
                  <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: colors.cadmiumRed }}>
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </span>
                  <p className="text-sm md:text-base" style={{ color: colors.mirage }}>{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Meanwhile Box */}
          <div className="p-8 md:p-12 rounded-2xl md:rounded-3xl text-center relative overflow-hidden" style={{ background: colors.darkNight, color: colors.white }}>
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(${colors.white} 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }} />
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: colors.cadmiumRed }}>Meanwhile:</p>
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium">
                AI has already reset the pace of business.<br />
                <span style={{ color: colors.regentGrey }}>If you&apos;re not using it, you&apos;re operating at a disadvantage.</span>
              </p>
              <p className="text-2xl md:text-3xl font-bold mt-6" style={{ color: colors.cadmiumRed }}>
                It&apos;s time to build your own AI team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Section */}
      <section className="py-16 md:py-24" style={{ background: colors.seashell }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 text-xs font-bold tracking-widest uppercase rounded mb-4 md:mb-6" style={{ background: colors.prussianBlue, color: colors.white }}>
              SECTION 3
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6" style={{ color: colors.darkNight }}>
              The New Reality
            </h2>
            <p className="text-lg md:text-xl" style={{ color: colors.regentGrey }}>
              You&apos;re not imagining the pressure. The industry has evolved faster than most small businesses can keep up with:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 mb-12 md:mb-16">
            {realityItems.map((item, i) => (
              <div
                key={i}
                className="flex flex-col p-5 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group border"
                style={{ background: colors.white, borderColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = colors.prussianBlue + '40'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: colors.prussianBlue, color: colors.white }}
                >
                  <item.Icon />
                </div>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: colors.mirage }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div
            className="p-8 md:p-12 rounded-2xl md:rounded-3xl text-center border-2"
            style={{ background: colors.prussianBlue, color: colors.white, borderColor: colors.regalBlue }}
          >
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
              <strong>People aren&apos;t burning out because they&apos;re incapable.</strong><br />
              <span style={{ color: colors.softPink }}>They&apos;re burning out because the current model no longer works.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA #2 - Mid-Page */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: colors.seashell }}>
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div
            className="p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl text-center shadow-2xl relative overflow-hidden border-2"
            style={{ background: colors.white, borderColor: colors.cadmiumRed }}
          >
            <div className="absolute top-0 left-0 w-full h-2" style={{ background: colors.cadmiumRed }} />

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 md:mb-6" style={{ color: colors.darkNight }}>
              Find Out What Your Business Actually Needs
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: colors.regentGrey }}>
              In five minutes, discover the precise AI roles, workflows and systems that would free your time, reduce costs and multiply your output.
            </p>
            <Button onClick={() => setIsModalOpen(true)} size="large">
              Reveal Your AI Team Plan
              <Icons.ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      {/* AI Team Section */}
      <section id="solution" className="py-16 md:py-24 scroll-mt-20" style={{ background: colors.darkNight, color: colors.white }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12 md:mb-16">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6">
              Meet Your AI Team
            </h2>
            <p className="text-base md:text-lg" style={{ color: colors.platinum }}>
              Your AI Team is a custom-built set of AI assistants designed around the actual needs of your business.
            </p>
            <p className="text-base md:text-lg mt-2" style={{ color: colors.regentGrey }}>
              Each AI assistant operates like a specialist role, without the cost, management, or complexity of hiring.
            </p>
          </div>

          <p className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: colors.softPink }}>
            Your AI Team may include:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            {aiTeam.map((member, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden"
                style={{ background: colors.mirage }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 text-xl md:text-2xl font-extrabold transition-transform group-hover:scale-110 shadow-lg"
                    style={{ background: member.color, color: colors.white }}
                  >
                    {member.initial}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm italic mb-4" style={{ color: colors.softPink }}>{member.nickname}</p>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: colors.platinum }}>{member.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="p-8 md:p-12 rounded-2xl md:rounded-3xl text-center relative overflow-hidden border-2"
            style={{ background: colors.prussianBlue, borderColor: colors.regalBlue }}
          >
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(${colors.white} 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
            <div className="relative z-10">
              <p className="text-lg md:text-xl font-semibold mb-4" style={{ color: colors.white }}>We don&apos;t install generic automations.</p>
              <p className="mb-4 text-sm md:text-base" style={{ color: colors.platinum }}>
                We build an AI team that understands your offers, your clients, your language, your data, and the way you work.
              </p>
              <p className="font-bold text-base md:text-lg" style={{ color: colors.softPink }}>
                Every transcript, every piece of content, every SOP becomes fuel for a business that runs smarter and scales faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 md:py-24" style={{ background: colors.seashell }}>
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-8" style={{ color: colors.darkNight }}>
            Why This Matters
          </h2>

          <div className="space-y-6 md:space-y-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium" style={{ color: colors.mirage }}>
              AI has increased the volume of content…<br />
              <span style={{ color: colors.regentGrey }}>but it hasn&apos;t increased human connection.</span>
            </p>

            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold" style={{ color: colors.cadmiumRed }}>
              Connection is your only competitive advantage.
            </p>

            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: colors.mirage }}>
              To build it, you need space: space to think, create, lead and show up as the founder your audience wants to follow.
            </p>

            <p className="text-lg md:text-xl font-bold" style={{ color: colors.darkNight }}>
              Your AI team gives you that space back.
            </p>

            <p className="text-base md:text-lg" style={{ color: colors.mirage }}>
              It handles execution so you can return to your highest-value role:
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 my-6 md:my-8">
              {['the strategist', 'the storyteller', 'the leader'].map((role, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 rounded-full text-base md:text-lg font-semibold shadow-md"
                  style={{ background: colors.white, color: colors.prussianBlue, border: `2px solid ${colors.prussianBlue}` }}
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="pt-6 md:pt-8">
              <p className="text-lg md:text-xl" style={{ color: colors.mirage }}>
                Because in a world where AI can do almost everything,
              </p>
              <p className="text-xl md:text-2xl font-bold mt-2" style={{ color: colors.darkNight }}>
                the one thing it cannot replace is you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-16 md:py-24 scroll-mt-20" style={{ background: colors.white }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: colors.darkNight }}>
              How It Works
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: colors.regentGrey }}>
              Four simple steps to transform your business
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group"
                style={{ background: colors.seashell }}
              >
                {/* Large background number */}
                <span
                  className="absolute -top-6 -right-4 text-8xl md:text-9xl font-extrabold opacity-[0.07] transition-transform group-hover:scale-110 select-none"
                  style={{ color: colors.cadmiumRed }}
                >
                  {step.num}
                </span>

                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: colors.cadmiumRed, color: colors.white }}
                  >
                    {step.num}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: colors.regentGrey }}>Step {i + 1}</span>
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3 relative z-10" style={{ color: colors.darkNight }}>{step.title}</h3>
                <p className="text-sm md:text-base relative z-10" style={{ color: colors.regentGrey }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button onClick={() => setIsModalOpen(true)} size="large">
              Apply for Your AI Team
              <Icons.ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-16 md:py-24" style={{ background: colors.prussianBlue, color: colors.white }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Your Package Includes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-12">
            {packageItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 md:p-6 rounded-xl transition-all duration-300 hover:bg-white/20 group"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: colors.softPink }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={colors.prussianBlue} strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-base md:text-lg">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xl md:text-2xl font-semibold" style={{ color: colors.softPink }}>
            Everything is tailored to your business.
          </p>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-16 md:py-24" style={{ background: colors.seashell }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: colors.darkNight }}>
              What Life Looks Like After
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: colors.regentGrey }}>
              With your AI team running the day-to-day, you get:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
            {outcomes.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 md:p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                style={{ background: colors.white }}
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0 transition-all group-hover:scale-110 group-hover:rotate-12"
                  style={{ background: colors.cadmiumRed, color: colors.white }}
                >
                  +
                </span>
                <p className="text-sm md:text-base font-medium" style={{ color: colors.mirage }}>{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center p-8 md:p-12 rounded-2xl" style={{ background: colors.white }}>
            <p className="text-lg md:text-xl mb-2" style={{ color: colors.mirage }}>
              It&apos;s the leverage of a seven-figure investment
            </p>
            <p className="text-xl md:text-2xl font-bold" style={{ color: colors.darkNight }}>
              without giving up equity, hiring staff or burning out.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24" style={{ background: colors.white }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: colors.darkNight }}>
              Who This Is For
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: colors.regentGrey }}>
              Creators, coaches, consultants, founders and small-business owners who want:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-12 md:mb-16">
            {audienceItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 md:p-5 rounded-xl border-l-4 transition-all duration-300 hover:shadow-md hover:translate-x-1 group"
                style={{ background: colors.seashell, borderColor: colors.cadmiumRed }}
              >
                <div className="w-2 h-2 rounded-full flex-shrink-0 transition-transform group-hover:scale-150" style={{ background: colors.cadmiumRed }} />
                <span className="text-sm md:text-base" style={{ color: colors.mirage }}>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-center font-bold" style={{ color: colors.darkNight }}>
            If you&apos;re ready to evolve, this is your moment.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 scroll-mt-20" style={{ background: colors.seashell }}>
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: colors.darkNight }}>
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg" style={{ color: colors.regentGrey }}>
              Got questions? We&apos;ve got answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: colors.white,
                  boxShadow: openFaq === i ? '0 10px 40px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                  border: openFaq === i ? `2px solid ${colors.cadmiumRed}30` : '2px solid transparent'
                }}
              >
                <button
                  className="w-full p-6 md:p-7 flex justify-between items-center text-left font-semibold text-base md:text-lg transition-all"
                  style={{ color: colors.darkNight }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="pr-4">{faq.q}</span>
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    style={{ background: openFaq === i ? colors.cadmiumRed : colors.seashell, color: openFaq === i ? colors.white : colors.mirage }}
                  >
                    <Icons.ChevronDown />
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? '250px' : '0' }}
                >
                  <p className="px-6 md:px-7 pb-6 md:pb-7 text-base md:text-lg leading-relaxed" style={{ color: colors.regentGrey }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply" className="py-20 md:py-32 lg:py-40 scroll-mt-20 relative overflow-hidden" style={{ background: colors.darkNight }}>
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full" style={{ background: colors.cadmiumRed, filter: 'blur(120px)' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full" style={{ background: colors.prussianBlue, filter: 'blur(120px)' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">


          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8" style={{ color: colors.white }}>
            Unlock Your Personalised Build Blueprint
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl mb-12 md:mb-14 max-w-2xl mx-auto leading-relaxed" style={{ color: colors.platinum }}>
            See the exact AI team we&apos;d create for your business, mapped, explained and tailored to your goals, so you can scale with clarity and confidence.
          </p>

          <Button onClick={() => setIsModalOpen(true)} size="large" className="shadow-2xl hover:shadow-cadmiumRed/20">
            Reveal Your AI Team Plan
            <Icons.ArrowRight />
          </Button>

          <p className="mt-8 text-base md:text-lg" style={{ color: colors.regentGrey }}>
            Apply now to build your AI Team before your competitors do.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-20" style={{ background: colors.darkNight, color: colors.white, borderTop: `1px solid ${colors.mirage}` }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <a href="#" className="text-2xl md:text-3xl font-extrabold hover:opacity-80 transition-opacity">
              <span style={{ color: colors.cadmiumRed }}>AI</span><span>-<i>Ify</i></span>
            </a>
            <p className="text-base text-center md:text-left" style={{ color: colors.regentGrey }}>
              Custom AI assistants for small businesses.
            </p>
            <p className="text-sm md:text-base" style={{ color: colors.regentGrey }}>
              &copy; 2026 AI-Ify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
