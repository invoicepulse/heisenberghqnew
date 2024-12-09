"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

// Campaign types
const campaignTypes = [
  {
    title: "Social Media",
    icon: "🚀",
    description: "Create and schedule engaging social media content across multiple platforms with AI-powered optimization.",
    features: ["Content Calendar", "Analytics Dashboard", "Automated Posting"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Email Marketing",
    icon: "📧",
    description: "Design and automate personalized email campaigns with advanced segmentation and A/B testing.",
    features: ["Template Builder", "Audience Segmentation", "Campaign Analytics"],
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Paid Advertising",
    icon: "📈",
    description: "Manage and optimize your ad campaigns across multiple platforms with real-time performance tracking.",
    features: ["Budget Management", "Ad Performance", "Audience Targeting"],
    gradient: "from-rose-500/20 to-orange-500/20",
  },
];

const features = [
  {
    title: "Campaign Management",
    description: "Plan, execute, and track your marketing campaigns from a single dashboard.",
    icon: "📊",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Content Calendar",
    description: "Schedule and organize your content across all marketing channels.",
    icon: "📅",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Analytics Dashboard",
    description: "Track performance metrics and generate insights in real-time.",
    icon: "📈",
    gradient: "from-rose-500/20 to-orange-500/20",
  },
  {
    title: "Automation Tools",
    description: "Streamline your marketing workflows with intelligent automation.",
    icon: "⚡",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
];

const metrics = [
  { value: "3x", label: "Higher Engagement Rates" },
  { value: "65%", label: "Time Saved on Campaign Planning" },
  { value: "45%", label: "Improved ROI" },
];

// Campaign Type Card Component
const CampaignTypeCard = ({ campaign, index }: { campaign: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className={`bg-gradient-to-br ${campaign.gradient} backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20`}
  >
    <div className="text-4xl mb-4">{campaign.icon}</div>
    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-br from-black to-[#001E80] text-transparent bg-clip-text">
      {campaign.title}
    </h3>
    <p className="text-[#010D3E]/80 mb-6">{campaign.description}</p>
    <ul className="space-y-2">
      {campaign.features.map((feature: string) => (
        <li key={feature} className="flex items-center">
          <span className="mr-2">•</span>
          <span className="text-[#010D3E]/80">{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

// Feature Card Component
const FeatureCard = ({ feature, index }: { feature: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.21, 1.11, 0.81, 0.99],
    }}
    className={`relative overflow-hidden rounded-3xl p-8 shadow-lg
      bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border border-white/20 transition-all duration-300
      hover:scale-[1.02]`}
  >
    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-white/5 to-white/30 blur-2xl" />
    <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full bg-gradient-to-br from-white/5 to-white/30 blur-2xl" />
    
    <div className="relative z-10">
      <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-br from-black to-[#001E80] text-transparent bg-clip-text">
        {feature.title}
      </h3>
      <p className="mt-4 text-[#010D3E]/80 text-lg">{feature.description}</p>
    </div>
  </motion.div>
);

export default function MarketingSolution() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#FFE8F7] to-[#FFD6EF] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-40 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-40 -right-64 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
      />

      <div className="container py-24 relative">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="tag inline-block"
          >
            Marketing Solution
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text mt-6"
          >
            Elevate Your Marketing Game
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#010D3E]/80 tracking-tight mt-6"
          >
            Create, manage, and optimize your marketing campaigns with powerful automation
          </motion.p>

          {/* Decorative Images */}
          <motion.div style={{ y: y1 }} className="absolute -left-20 top-0 opacity-50">
            <Image src={pyramidImage} alt="Decoration" width={100} height={100} />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute -right-20 bottom-0 opacity-50">
            <Image src={tubeImage} alt="Decoration" width={100} height={100} />
          </motion.div>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold bg-gradient-to-br from-black to-[#001E80] text-transparent bg-clip-text">
                {metric.value}
              </h3>
              <p className="text-[#010D3E]/60 mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Campaign Types Section */}
        <section className="max-w-4xl mx-auto my-32">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text">
            Campaign Types
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {campaignTypes.map((campaign, index) => (
              <CampaignTypeCard key={campaign.title} campaign={campaign} index={index} />
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-32"
        >
          <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 shadow-xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl" />
            <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-2xl" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text">
                Ready to supercharge your marketing efforts?
              </h2>
              <p className="text-[#010D3E]/80 mt-4 text-lg max-w-2xl mx-auto">
                Join thousands of marketers who have transformed their campaigns
              </p>
              <a 
                href="https://apps.senseflows.fun"
                className="btn btn-primary mt-8 inline-block"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
