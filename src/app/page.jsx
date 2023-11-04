import Link from 'next/link';
import Image from 'next/image';
import AnimatePage from '@/components/AnimatePage';
// import HomeBg from '@/components/homeBg/HomeBg';
import mainImg from '@/assets/images/allaya-main.png';
import './globals.scss';

export default function Home() {
  return (
    <AnimatePage>
      <section className="home">
        {/* <HomeBg /> */}
        <h1 className="home__title">
          <Image src={mainImg} alt="logo" className="home__img" />
        </h1>
        <div className="home__links">
          <Link href="/website">website</Link>
        </div>
      </section>
    </AnimatePage>
  );
}
