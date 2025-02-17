export const menus: Imenu[] = [
  { id: 1, name: 'خانه', link: '/', position: 1 },
  { id: 2, name: 'محصولات', link: '/products', position: 2 },
  { id: 3, name: 'تماس باما', link: '/', position: 3 },
  {
    id: 4,
    name: 'کالای دیجیتال',
    link: '/',
    position: 4,
    subMenu: [
      { id: 1, name: 'موبایل', link: '/', position: 1 },
      { id: 2, name: 'لپ تاپ', link: '/', position: 2 },
    ],
  },
];
