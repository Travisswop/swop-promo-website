'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const RevealRightMotion = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1 },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default RevealRightMotion;
