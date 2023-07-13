'use client';

import Container from '@/components/container';
import { Icons } from '@/components/utils/icons';
import Image from 'next/image';
import Link from 'next/link';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useState } from 'react';
import { cn } from '@/utils/helpers/cn';
import { cva } from 'class-variance-authority';

const SOCIALS = [
  {
    name: 'resume',
    description: 'Lorem ipsum dolor sit',
    url: '/resume.pdf',
    options: { download: true },
    color: 'red',
  },
  {
    name: 'github',
    description: 'Lorem ipsum dolor sit',
    url: 'https://www.github.com/dawidseipold',
    options: { target: '_blank', rel: 'noopener noreferrer' },
    color: 'blue',
  },
  {
    name: 'linkedin',
    description: 'Lorem ipsum dolor sit',
    url: 'https://www.linkedin.com/in/dawid-seipold/',
    options: { target: '_blank', rel: 'noopener noreferrer' },
    color: 'purple',
  },
];

const Hero = () => {
  const [activeColor, setActiveColor] = useState('default');
  const [activeElement, setActiveElement] = useState({
    color: 'default',
    title: '',
    description: '',
  });

  return (
    <section>
      <Container className="relative flex flex-col gap-y-8 py-8">
        <div className="mt-8 flex flex-col items-center justify-center gap-y-4 text-center md:gap-y-8">
          <h1
            className={cn(
              'bg-gradient-to-r bg-clip-text text-6xl font-extrabold text-transparent sm:text-7xl lg:text-8xl',
              {
                ['from-emerald-500 from-20% to-emerald-200']: activeColor === 'default',
                ['from-red-500 from-20% to-red-200']: activeColor === 'red',
                ['from-blue-500 from-20% to-blue-200']: activeColor === 'blue',
                ['from-purple-500 from-20% to-purple-200']: activeColor === 'purple',
              }
            )}
          >
            Dawid Seipold
          </h1>
          <p className="mb-8 text-base font-medium text-neutral-300 sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quos obcaecati facere
            nobis maxime eum!
          </p>

          <div
            className={cn('absolute h-full w-full opacity-10 blur-[256px]', {
              ['bg-emerald-500']: activeColor === 'default',
              ['bg-red-500']: activeColor === 'red',
              ['bg-blue-500']: activeColor === 'blue',
              ['bg-purple-500']: activeColor === 'purple',
            })}
          />

          <ul className="flex w-full flex-col items-center justify-center gap-y-2 md:flex-row md:gap-x-2">
            {SOCIALS.map(({ name, description, url, options, color }) => (
              <li
                key={name}
                className="flex w-full flex-col gap-y-2 rounded-lg bg-white/5 p-4 backdrop-blur transition first:rounded-t-2xl last:rounded-b-2xl hover:scale-[1.02] hover:bg-white/10 md:first:rounded-t-3xl md:last:rounded-b-3xl"
                onMouseLeave={() => setActiveColor(() => 'default')}
                onMouseEnter={() => setActiveColor(() => color)}
              >
                <h2>{name}</h2>
                <span>{description}</span>
                <button>
                  <Link
                    className="flex items-center justify-center gap-x-2 font-bold uppercase tracking-wider"
                    href={url}
                    {...options}
                  >
                    Visit
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
