import Link from 'next/link';

import './page.scss';
import AnimatePage from '@/components/AnimatePage';

export default function Home() {
  return (
    // <AnimatePresence mode="wait">
    //   <motion.main
    //     className="main"
    //     initial={{ opacity: 0, y: 100 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     exit={{ opacity: 0, y: 51 }}
    //     transition={{ duration: 1 }}
    //   >
    <AnimatePage>
      <div className="main">
        <Link href="/website">website</Link>
      </div>
    </AnimatePage>

    //   </motion.main>
    // </AnimatePresence>
  );
}
