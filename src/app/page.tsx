import HomePageTemplate from '@/components/front/home-page';
import Hero from '@/components/front/home-page/hero';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <main className='container-home flex w-full flex-col items-center gap-8 sm:items-start'>
        <HomePageTemplate />
      </main>
    </>
  );
}
