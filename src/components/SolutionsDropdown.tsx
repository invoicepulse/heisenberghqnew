"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const solutions = [
  {
    title: "Marketing",
    description: "Enhance your marketing efforts",
    path: "/solutions/marketing",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Product",
    description: "Build better products with data-driven insights",
    path: "/solutions/product",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Analytics",
    description: "Transform data into actionable insights",
    path: "/solutions/analytics",
    color: "from-emerald-500/20 to-blue-500/20",
  },
  {
    title: "Finance",
    description: "Streamline financial operations and reporting",
    path: "/solutions/finance",
    color: "from-orange-500/20 to-red-500/20",
  },
];

export const SolutionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-black/60 hover:text-black flex items-center gap-1"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Solutions
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-black/5 overflow-hidden"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.path}
                className={`block p-4 hover:bg-gradient-to-r ${solution.color} transition-colors`}
              >
                <h3 className="font-medium text-black">{solution.title}</h3>
                <p className="text-sm text-black/60 mt-1">{solution.description}</p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
