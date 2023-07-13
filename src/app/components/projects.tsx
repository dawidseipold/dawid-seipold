import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { Icons } from '@/components/utils/icons';
import Link from 'next/link';
import React from 'react';

const CARDS = [1, 2, 3];

const Projects = () => {
  return (
    <Section>
      <div className="flex flex-col gap-y-2">
        <Section.Title asChild size={'large'}>
          <h2>Projects</h2>
        </Section.Title>

        <Section.Description>My recent projects that Im proud of</Section.Description>
      </div>

      <ul className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4">
        {CARDS.map((card, index) => (
          <Card key={index} textAlign="left">
            <Card.Icon>LOGO</Card.Icon>

            <Card.Title size={'small'}>
              <h3>Project {index + 1}</h3>
            </Card.Title>

            <Card.Description>
              As you all know this website is all about me so it wouldnt hurt anyone to introduce
              myself a little and explain what Im all about
            </Card.Description>

            <div className="mt-4 flex flex-col gap-y-8">
              <ul className="flex flex-col gap-y-2 text-neutral-200">
                <li className="flex items-center gap-x-2">
                  <Icons.CheckCircle size={20} />
                  <span>Durable and fast with multi tier storage.</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <Icons.CheckCircle size={20} />
                  <span>Durable and fast with multi tier storage.</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <Icons.CheckCircle size={20} />
                  <span>Durable and fast with multi tier storage.</span>
                </li>
              </ul>

              <div className="flex flex-col gap-y-2">
                <Link
                  href="/link"
                  className="flex items-center justify-between rounded-full bg-neutral-950/25 px-6 py-2"
                >
                  Read More
                  <Icons.ArrowUpRight />
                </Link>

                <Link
                  href="/link"
                  className="flex items-center justify-between rounded-full bg-neutral-950 px-6 py-2"
                >
                  <span>Live preview</span>
                  <Icons.ArrowUpRight />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </ul>

      <Link href="/projects">See more</Link>
    </Section>
  );
};

export default Projects;
