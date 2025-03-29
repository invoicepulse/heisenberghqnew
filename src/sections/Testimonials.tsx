"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import React, { use } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Yo, this platform is like, totally the bomb! The chemistry between features is pure science, bitch!",
    imageSrc: avatar1.src,
    name: "Jesse P.",
    username: "@sciencebitch",
  },
  {
    text: "My productivity has reached 99.1% purity since I started using Heisenberg HQ. I am the one who knocks out tasks.",
    imageSrc: avatar2.src,
    name: "Walter W.",
    username: "@heisenberg",
  },
  {
    text: "Better call Heisenberg HQ when you need to manage your business! It's all good, man!",
    imageSrc: avatar3.src,
    name: "Saul G.",
    username: "@bettercallsaul",
  },
  {
    text: "As someone who values precision, Heisenberg HQ gives me exactly what I need to run my business with clinical efficiency.",
    imageSrc: avatar4.src,
    name: "Gustavo F.",
    username: "@lospollos",
  },
  {
    text: "This platform helps me keep all my operations running smoothly. No half measures when it comes to project management.",
    imageSrc: avatar5.src,
    name: "Mike E.",
    username: "@nomorehalfmeasures",
  },
  {
    text: "Minerals! They're not rocks! And this app helps me catalog my entire collection with pristine organization.",
    imageSrc: avatar6.src,
    name: "Hank S.",
    username: "@minerals_collector",
  },
  {
    text: "Heisenberg HQ has helped our DEA office streamline operations and catch... I mean, it's a great product for legitimate business.",
    imageSrc: avatar7.src,
    name: "Steve G.",
    username: "@definitely_not_dea",
  },
  {
    text: "With Heisenberg HQ, we can easily assign tasks, track our RV locations, and manage cook schedules all in one place.",
    imageSrc: avatar8.src,
    name: "Skinny P.",
    username: "@churchyo",
  },
  {
    text: "Even my lawyer's lawyer needs this app. The user interface is as clean as a vacuum repair shop.",
    imageSrc: avatar9.src,
    name: "Ed G.",
    username: "@disappearer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, imageSrc, name, username }) => (
                <div className="card" key={username}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={imageSrc}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 tracking-tight">{username}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Lab Reports</div>
          </div>

          <h2 className="section-title mt-5">What Our Partners Say</h2>
          <p className="section-des mt-5">
            From precise chemistry to powerful empire-building features, our formula has become essential for associates around
            the world. No half measures.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
