import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {/* Light mode logo */}
          <Image
            src="/assets/skytienda-logo-mono-clearbg.svg"
            alt="Skytienda"
            width={140}
            height={28}
            className="dark:hidden"
            priority
          />
          {/* Dark mode logo */}
          <Image
            src="/assets/skytienda-logo-darkbg.svg"
            alt="Skytienda"
            width={140}
            height={28}
            className="hidden dark:block"
            priority
          />
        </>
      ),
    },
  };
}
