// next
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function MainLayout({ children }: Props) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
