import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { Icons } from '@/components/utils/icons';
import Image from 'next/image';
import React from 'react';

const PROJECTS = [1, 2, 3, 4, 5, 6, 7, 8];

const ProjectsPage = () => {
  return (
    <Section>
      <div className="flex flex-col gap-y-4">
        <Section.Title size={'large'}>Projects</Section.Title>
        <Section.Description>
          All the projects I have worked on and Im proud of.
        </Section.Description>
      </div>

      <ul className="flex flex-col gap-x-4 gap-y-4 lg:grid lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <li key={index}>
            <Card textAlign={'left'} className="gap-y-8">
              <div className="flex flex-col gap-y-4">
                <Card.Icon>LOGO</Card.Icon>

                <Card.Title size={'small'}>Project Name</Card.Title>

                <Card.Description>
                  Short project description explainging what it does and what its for.
                </Card.Description>
              </div>

              <ul className="flex items-center gap-x-4 self-end">
                <li className="flex h-8 w-8 items-center justify-center text-neutral-600">
                  <Icons.Moon />
                </li>
                <li className="flex h-8 w-8 items-center justify-center text-neutral-600">
                  <Icons.ArrowUpRight />
                </li>
                <li className="flex h-8 w-8 items-center justify-center text-neutral-600">
                  <Icons.Logo />
                </li>
                <li className="flex h-8 w-8 items-center justify-center text-neutral-600">
                  <Icons.Sun />
                </li>
                <li className="flex h-8 w-8 items-center justify-center text-neutral-600">
                  <Icons.Paperclip />
                </li>
              </ul>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ProjectsPage;
