'use client';

import { useState } from 'react';
import { NAVIGATION } from '@/utils/constants';
import { cn } from '@/utils/helpers/cn';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Components
import Container from './container';
import Logo from './logo';
import { Icons } from './utils/icons';
import Navigation from './navigation';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Page Scroll Handler
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 0) {
      setScrolled(true);
      return;
    }

    setScrolled(false);
    return;
  });

  return (
    <motion.header
      initial={{ y: 'calc(-100%+0.5rem)', opacity: 0 }}
      animate={{ y: scrolled ? '0.5rem' : '1rem', opacity: 100 }}
      transition={{ duration: 0.25 }}
      className={cn('sticky top-1 z-50 mx-4 transition-all ease-out lg:top-4')}
    >
      <Container
        className={cn(
          'relative flex items-center justify-between rounded-full border border-neutral-200/20 bg-neutral-100/90 py-3 backdrop-blur-lg dark:border-neutral-600/20 dark:bg-neutral-950/90 sm:px-6 md:px-8 md:py-4 lg:py-6'
        )}
      >
        <Logo />
        <div className="flex lg:hidden" onClick={() => setOpen((prev) => !prev)}>
          {open ? <Icons.X /> : <Icons.Menu />}
        </div>

        {/* TODO: Add resume button after the menu */}
        <Navigation
          className={cn(
            open ? 'flex' : 'hidden',
            'absolute left-0 top-[calc(100%+0.5rem)] w-full flex-col gap-y-4 rounded-2xl bg-stone-100 p-4 text-center dark:bg-stone-950',
            'lg:static lg:flex lg:w-max lg:flex-row lg:gap-x-6 lg:bg-transparent lg:p-0 lg:dark:bg-transparent'
          )}
        >
          {NAVIGATION.map((element) => (
            <Navigation.Element
              key={element.name}
              className={cn({ ['font-bold text-blue-400']: pathname === element.url })}
              href={element.url}
            >
              {element.name}
            </Navigation.Element>
          ))}
        </Navigation>
      </Container>
    </motion.header>
  );
};

export default Header;
