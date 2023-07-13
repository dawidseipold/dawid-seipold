import Badge from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const POSTS = [1, 2, 3, 4, 5, 6];
const TAGS = [{ text: 'coding' }, { text: 'nextjs' }];

const Blog = () => {
  return (
    <Section>
      <div className="flex flex-col gap-y-2">
        <Section.Title asChild size={'large'}>
          <h2>Blog</h2>
        </Section.Title>

        <Section.Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Section.Description>
      </div>

      <ul className="flex flex-col gap-y-4 lg:grid lg:grid-cols-3 lg:gap-x-4">
        {POSTS.map((post, index) => (
          <li key={index}>
            <Card textAlign="left">
              <Card.Title size={'small'} type={'link'} asChild>
                <Link href={'/link'}>Article title that is a little longer than normal</Link>
              </Card.Title>

              <Card.Description>Reveal link effect on hover make it a link.</Card.Description>

              <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-2">
                {TAGS.map((tag, index) => (
                  <Badge key={index} asChild>
                    <li>{tag.text}</li>
                  </Badge>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Blog;
