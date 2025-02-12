import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';

export default function BuyByCategory() {
  const categories: CategoriesType[] = [
    { id: 1, name: 'موبایل', image: '/assets/images/mobile.png', link: '#' },
    {
      id: 2,
      name: 'کالای دیجیتال',
      image: '/assets/images/digitals.png',
      link: '#',
    },
    {
      id: 3,
      name: 'آرایشی بهداشتی',
      image: '/assets/images/health.png',
      link: '#',
    },
    { id: 4, name: 'طلا و نقره', image: '/assets/images/gold.png', link: '#' },
    {
      id: 5,
      name: 'ورزش و سفر',
      image: '/assets/images/sports.png',
      link: '#',
    },
    {
      id: 6,
      name: 'خانه و آشپزخانه',
      image: '/assets/images/home.png',
      link: '#',
    },
  ];
  return (
    <Container>
      <div className='flex flex-col gap-4'>
        <h2 className='mb-2 text-center text-xl font-bold text-slate-700 md:text-2xl md:font-medium lg:mb-6'>
          خرید بر اساس دسته بندی
        </h2>
        <div className='grid grid-cols-[repeat(auto-fit,10rem)] place-content-center md:place-content-between gap-16 sm:gap-4'>
          {categories.map((category) => (
            <Link
              href={category.link}
              key={category.id}
              className='flex flex-col items-center text-slate-700'
            >
              <Image
                src={category.image}
                alt={category.name}
                className=''
                width={100}
                height={100}
              />
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
