import AnimatePage from '@/components/AnimatePage';
import Link from 'next/link';

const Website = () => {
  return (
    <AnimatePage>
      <div>
        <Link href="/">home</Link>
      </div>
    </AnimatePage>
  );
};

export default Website;
