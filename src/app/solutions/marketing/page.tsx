"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

// Campaign types
const campaignTypes = [
  {
    title: "Territory Expansion",
    icon: "🌟",
    description: "Take over new markets with engaging social media content across multiple platforms, optimized with scientific precision.",
    features: ["Distribution Schedule", "Territory Analytics", "Automated Deployment"],
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    title: "Customer Loyalty Program",
    icon: "📧",
    description: "Design loyalty schemes that keep your clients coming back for more, no matter what the competition offers.",
    features: ["Personalized Outreach", "Client Segmentation", "Results Tracking"],
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Market Domination",
    icon: "📈",
    description: "Eliminate competition and become the one who knocks in your industry with targeted advertising.",
    features: ["Resource Allocation", "Performance Measurement", "Target Acquisition"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

const features = [
  {
    title: "Empire Management",
    description: "Plan, execute, and track your marketing empire from a single dashboard.",
    icon: "🏙️",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    title: "Distribution Schedule",
    description: "Time your product releases perfectly across all channels for maximum impact.",
    icon: "📅",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Territory Intelligence",
    description: "Track performance metrics and generate insights about your market territory.",
    icon: "🔍",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Gus Fring's Automation",
    description: "As methodical and precise as the chicken man himself. Streamline your workflows.",
    icon: "🍗",
    gradient: "from-red-500/20 to-rose-500/20",
  },
];

const metrics = [
  { value: "99.1%", label: "Pure Marketing Effectiveness" },
  { value: "85%", label: "Less Time Spent on Territory Management" },
  { value: "65%", label: "Increased Market Domination" },
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
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#FFFACD] to-[#FFD700] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-40 -left-64 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-40 -right-64 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
      />

      <div className="container py-24 relative">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="tag inline-block"
          >
            Empire Building Solution
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text mt-6"
          >
            Say My Brand's Name!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#010D3E]/80 tracking-tight mt-6"
          >
            Become the one who knocks on your industry's door with powerful marketing automation
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
            Distribution Strategies
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
          <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-sm border border-white/20 shadow-xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/20 blur-2xl" />
            <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 blur-2xl" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text">
                "I am not in marketing, I am the marketing"
              </h2>
              <p className="text-[#010D3E]/80 mt-4 text-lg max-w-2xl mx-auto">
                Join thousands who have transformed their mild-mannered business into the danger of their industry
              </p>
              <a 
                href="/auth"
                className="btn btn-primary mt-8 inline-block"
              >
                Let's Cook... Projects!
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
