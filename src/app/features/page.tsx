"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

const features = [
  {
    title: "Task Management",
    description: "Create, assign, and track tasks with ease. Use custom fields and labels to organize work your way.",
    size: "large",
    gradient: "from-purple-500/20 to-blue-500/20",
    hover: "hover:from-purple-500/30 hover:to-blue-500/30",
  },
  {
    title: "Team Collaboration",
    description: "Real-time updates and comments keep everyone in sync. Share files and feedback instantly.",
    size: "small",
    gradient: "from-blue-500/20 to-cyan-500/20",
    hover: "hover:from-blue-500/30 hover:to-cyan-500/30",
  },
  {
    title: "Project Analytics",
    description: "Get insights into project progress, team performance, and resource allocation.",
    size: "small",
    gradient: "from-emerald-500/20 to-blue-500/20",
    hover: "hover:from-emerald-500/30 hover:to-blue-500/30",
  },
  {
    title: "Custom Workflows",
    description: "Design workflows that match your team's unique processes and requirements.",
    size: "small",
    gradient: "from-orange-500/20 to-rose-500/20",
    hover: "hover:from-orange-500/30 hover:to-rose-500/30",
  },
  {
    title: "Resource Management",
    description: "Efficiently allocate team members and track resource utilization across projects.",
    size: "small",
    gradient: "from-pink-500/20 to-purple-500/20",
    hover: "hover:from-pink-500/30 hover:to-purple-500/30",
  },
  {
    title: "Integrations",
    description: "Connect with your favorite tools for a seamless workflow experience.",
    size: "large",
    gradient: "from-blue-500/20 to-indigo-500/20",
    hover: "hover:from-blue-500/30 hover:to-indigo-500/30",
  },
];

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.21, 1.11, 0.81, 0.99] // spring animation
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-3xl p-8 shadow-lg transition-all duration-300 
        bg-gradient-to-br ${feature.gradient} ${feature.hover}
        backdrop-blur-sm border border-white/20
        ${feature.size === "large" ? "md:col-span-2" : "col-span-1"}`}
    >
      {/* Decorative elements */}
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
};

export default function Features() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // New rotating animation values
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#E2E8FF] to-[#D2DCFF] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-40 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-40 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />
      
      <div className="container py-24 relative">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="tag inline-block"
          >
            Features Overview
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text mt-6"
          >
            Everything you need to manage projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#010D3E]/80 tracking-tight mt-6"
          >
            A comprehensive suite of tools designed to streamline your workflow and boost team productivity
          </motion.p>

          {/* Decorative Images */}
          <motion.div
            style={{ y: y1 }}
            className="absolute -left-20 top-0 opacity-50"
          >
            <Image src={pyramidImage} alt="Decoration" width={100} height={100} />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute -right-20 bottom-0 opacity-50"
          >
            <Image src={tubeImage} alt="Decoration" width={100} height={100} />
          </motion.div>
        </div>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-32"
        >
          <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-white/40 to-white/80 backdrop-blur-sm border border-white/20 shadow-xl">
            {/* Decorative elements */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />
            <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text">
                Why choose our platform?
              </h2>
              <div className="mt-8 grid gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-2">🚀 Built for scale</h3>
                  <p className="text-[#010D3E]/80">
                    Whether you&apos;re a small team or a large enterprise, our platform grows with you.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-2">🎯 Focus on what matters</h3>
                  <p className="text-[#010D3E]/80">
                    Eliminate busy work and focus on delivering value to your customers.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-2">💡 Continuous innovation</h3>
                  <p className="text-[#010D3E]/80">
                    Regular updates and new features to keep you ahead of the competition.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Breaking Bad Inspired Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-40 mb-20"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tighter"
            >
              <span className="bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text">
                The Chemistry of Productivity
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#010D3E]/70 mt-4 max-w-3xl mx-auto"
            >
              Breaking the barriers of traditional project management
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              style={{ 
                rotate: rotation,
                scale: scale
              }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 backdrop-blur-lg"></div>
                <div className="absolute inset-4 rounded-full bg-purple-500/30 backdrop-blur-lg"></div>
                <div className="absolute inset-8 rounded-full bg-indigo-500/40 backdrop-blur-lg flex items-center justify-center">
                  <span className="text-7xl md:text-8xl font-bold text-white">Hb</span>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 backdrop-blur-sm bg-white/30 rounded-xl border border-white/20 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-2 text-[#001E80]">I Am The One Who Manages</h3>
                <p className="text-[#010D3E]/80">
                  Our task management system ensures nothing falls through the cracks. You're not in the project management business, you're in the empire business.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 backdrop-blur-sm bg-white/30 rounded-xl border border-white/20 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-2 text-[#001E80]">99.1% Pure Efficiency</h3>
                <p className="text-[#010D3E]/80">
                  We've refined the formula for project success. Our platform is engineered to eliminate impurities in your workflow and crystallize your productivity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="p-6 backdrop-blur-sm bg-white/30 rounded-xl border border-white/20 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-2 text-[#001E80]">Say My Name</h3>
                <p className="text-[#010D3E]/80">
                  When your clients ask who's responsible for such impeccable project delivery, you know exactly what to say. You're Heisenberg. You're the danger.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <a 
              href="/auth" 
              className="inline-block py-4 px-8 bg-black text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Let's Cook... Projects!
            </a>
            <p className="mt-3 text-[#010D3E]/60 italic">No RVs or hazmat suits required.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
