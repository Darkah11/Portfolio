// components/BlockReveal.jsx or BlockReveal.tsx
"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const BlockReveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  // Detect when the element is in view (trigger once)
  const isInView = useInView(ref, { amount: 0.5 });
  // Controls to manually start the animation
  const controls = useAnimation();

   useEffect(() => {
    if (isInView) {
      // Start the animation sequence when entering view
      controls.start("visible");
    } else {
      // Reset the animation sequence when leaving view
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const blockVariants = {
    hidden: { x: "-100%" }, // Start completely to the left
    visible: {
      x: "100%", // Slide across to the right
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // Smooth easing function
        delay: delay,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay + 0.4, // Reveal text after the block is halfway through
        duration: 0.3,
      },
    },
  };

  return (
    <div ref={ref} className={`relative overflow-hidden w-fit ${className}`}>
      {/* The text element, initially hidden */}
      <motion.div variants={textVariants} initial="hidden" animate={controls}>
        {children}
      </motion.div>

      {/* The revealing block element */}
      <motion.div
        variants={blockVariants}
        initial="hidden"
        animate={controls}
        // Position the block absolutely over the text container
        className="absolute top-0 left-0 right-0 bottom-0 bg-white z-10" // Use your desired color
      />
    </div>
  );
};

export default BlockReveal;
