import FrontFooterLayout from './FrontFooter';
import FrontHeaderLayout from './FrontHeader';

type FrontLayoutProps = {
  children: React.ReactNode;
};
export default function FrontLayout({ children }: FrontLayoutProps) {
  return (
    <>
      <FrontHeaderLayout />
      {children}
      <FrontFooterLayout />
    </>
  );
}
