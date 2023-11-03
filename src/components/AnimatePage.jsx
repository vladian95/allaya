'use client';

import Home from '@/app/page';
import Website from '@/app/website/page';
import { AnimatePresence, motion } from 'framer-motion';
const animations = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 51 },
};

const AnimatePage = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatePage;
