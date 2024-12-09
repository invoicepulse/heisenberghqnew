"use client";
import AuthButton from "@/components/AuthButton";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="section-heading text-center max-w-[800px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Sign up for free today
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-des mt-5"
          >
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your
            efforts.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-2 mt-10 justify-center"
          >
            <a href="https://apps.senseflows.fun" className="btn btn-primary">
              Get for free
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
