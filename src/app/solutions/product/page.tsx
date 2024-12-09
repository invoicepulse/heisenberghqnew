"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

const productFeatures = [
  {
    title: "Roadmap Planning",
    icon: "🗺️",
    description: "Create and manage product roadmaps with collaborative planning tools.",
    features: ["Timeline View", "Priority Management", "Resource Allocation"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "User Research",
    icon: "🔍",
    description: "Gather and analyze user feedback to make data-driven product decisions.",
    features: ["Survey Tools", "User Analytics", "Feedback Management"],
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Sprint Management",
    icon: "🏃",
    description: "Plan and track sprints with agile project management tools.",
    features: ["Sprint Planning", "Task Tracking", "Team Collaboration"],
    gradient: "from-rose-500/20 to-orange-500/20",
  },
];

const features = [
  {
    title: "Feature Management",
    description: "Track and prioritize feature requests and development.",
    icon: "⚙️",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Release Planning",
    description: "Plan and coordinate product releases effectively.",
    icon: "🚀",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Team Collaboration",
    description: "Foster seamless collaboration between product teams.",
    icon: "👥",
    gradient: "from-rose-500/20 to-orange-500/20",
  },
  {
    title: "Progress Tracking",
    description: "Monitor development progress and milestones.",
    icon: "📊",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
];

const metrics = [
  { value: "40%", label: "Faster Time to Market" },
  { value: "2x", label: "Feature Adoption Rate" },
  { value: "50%", label: "Reduced Development Cycles" },
];

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

const ProductFeatureCard = ({ feature, index }: { feature: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20`}
  >
    <div className="text-4xl mb-4">{feature.icon}</div>
    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-br from-black to-[#001E80] text-transparent bg-clip-text">
      {feature.title}
    </h3>
    <p className="text-[#010D3E]/80 mb-6">{feature.description}</p>
    <ul className="space-y-2">
      {feature.features.map((f: string) => (
        <li key={f} className="flex items-center">
          <span className="mr-2">•</span>
          <span className="text-[#010D3E]/80">{f}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function ProductSolution() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#FFE8F7] to-[#FFD6EF] relative overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-40 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-40 -right-64 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
      />

      <div className="container py-24 relative">
        <div className="max-w-3xl mx-auto text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="tag inline-block"
          >
            Product Solution
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text mt-6"
          >
            Build Better Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#010D3E]/80 tracking-tight mt-6"
          >
            Streamline your product development process with powerful collaboration tools
          </motion.p>

          <motion.div style={{ y: y1 }} className="absolute -left-20 top-0 opacity-50">
            <Image src={pyramidImage} alt="Decoration" width={100} height={100} />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute -right-20 bottom-0 opacity-50">
            <Image src={tubeImage} alt="Decoration" width={100} height={100} />
          </motion.div>
        </div>

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

        <section className="max-w-4xl mx-auto my-32">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text">
            Product Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {productFeatures.map((feature, index) => (
              <ProductFeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </section>

        <section ref={sectionRef} className="max-w-4xl mx-auto my-32">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-32"
        >
          <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/20 shadow-xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-2xl" />
            <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-2xl" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text">
                Ready to transform your product development?
              </h2>
              <p className="text-[#010D3E]/80 mt-4 text-lg max-w-2xl mx-auto">
                Join thousands of teams who have already revolutionized their product development process
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
