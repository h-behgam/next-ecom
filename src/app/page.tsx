import HomePageTemplate from '@/components/front/home-page';
import SingleSlide from '@/components/front/single-slide';

export default function Home() {
  return (
    <>
      <SingleSlide src='/assets/images/baner3.webp' alt='Hero' />
      <main className='container-home flex w-full flex-col items-center gap-8 sm:items-start'>
        <HomePageTemplate />
      </main>
    </>
  );
}
