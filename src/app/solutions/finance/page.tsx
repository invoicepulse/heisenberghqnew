"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

const financeTools = [
  {
    title: "Empire Planning",
    icon: "📝",
    description: "Build your empire with proper budgets, forecasts, and financial planning - one batch at a time.",
    features: ["Budget Cooking", "Cash Flow Chemistry", "Empire Goals"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Laundering Management",
    icon: "💳",
    description: "Track and categorize your expenses with automated precision. Perfectly legal, of course.",
    features: ["Receipt Documenting", "Expense Filtering", "Approval Chain"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "The Financials Lab",
    icon: "📊",
    description: "Generate comprehensive financial reports that even Gus Fring would approve of.",
    features: ["Crystal Clear Reports", "Real-time Formulations", "Legal Compliance"],
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
];

const features = [
  {
    title: "AI Bookkeeping Partner",
    description: "Like having your own Mike Ehrmantraut handling the books - efficient and discreet.",
    icon: "🤖",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Tax Manipulation",
    description: "Perfectly legal tax preparation and compliance. Saul Goodman approved.",
    icon: "📑",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Invoice Chemistry",
    description: "Create invoices as pure as the blue stuff, collect payments just as efficiently.",
    icon: "📄",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Financial Territory Analysis",
    description: "Get insights into your financial performance and expand your territory.",
    icon: "📈",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

const metrics = [
  { value: "99.1%", label: "Pure Financial Accuracy" },
  { value: "87%", label: "Less Time Spent Counting Cash" },
  { value: "45%", label: "Reduced 'Wastage' in Operations" },
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

const FinanceToolCard = ({ tool, index }: { tool: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className={`bg-gradient-to-br ${tool.gradient} backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20`}
  >
    <div className="text-4xl mb-4">{tool.icon}</div>
    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-br from-black to-[#001E80] text-transparent bg-clip-text">
      {tool.title}
    </h3>
    <p className="text-[#010D3E]/80 mb-6">{tool.description}</p>
    <ul className="space-y-2">
      {tool.features.map((feature: string) => (
        <li key={feature} className="flex items-center">
          <span className="mr-2">•</span>
          <span className="text-[#010D3E]/80">{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function FinanceSolution() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#D1FFD1] to-[#9DFFA9] relative overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-40 -left-64 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-40 -right-64 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"
      />

      <div className="container py-24 relative">
        <div className="max-w-3xl mx-auto text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="tag inline-block"
          >
            Money Lab
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text mt-6"
          >
            The Money Chemistry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#010D3E]/80 tracking-tight mt-6"
          >
            Cook up perfect financial processes and gain control over your empire's finances
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
            Financial Lab Equipment
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {financeTools.map((tool, index) => (
              <FinanceToolCard key={tool.title} tool={tool} index={index} />
            ))}
          </div>
        </section>

        <section ref={sectionRef} className="max-w-4xl mx-auto my-32">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text">
            Special Ingredients
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
          <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-green-500/20 to-green-300/20 backdrop-blur-sm border border-white/20 shadow-xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-green-500/20 to-green-300/20 blur-2xl" />
            <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-gradient-to-br from-green-300/20 to-green-500/20 blur-2xl" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text">
                Ready to break bad with your financial operations?
              </h2>
              <p className="text-[#010D3E]/80 mt-4 text-lg max-w-2xl mx-auto">
                Join thousands who have transformed their financial processes. We are the ones who count.
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
