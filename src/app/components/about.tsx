import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import Slider from '@/components/utils/slider';

const CARDS = [
  {
    title: 'Brief',
    description:
      'As you all know this website is all about me so it wouldnt hurt anyone to introduce myself a little and explain what Im all about',
    children: (
      <>
        <Slider />
      </>
    ),
  },
  {
    title: 'Skills',
    description:
      'As you all know this website is all about me so it wouldnt hurt anyone to introduce myself a little and explain what Im all about',
    children: (
      <>
        <Slider />
      </>
    ),
  },
  {
    title: 'Technologies',
    description:
      'As you all know this website is all about me so it wouldnt hurt anyone to introduce myself a little and explain what Im all about',
    children: (
      <>
        <Slider />
      </>
    ),
  },
  {
    title: 'My plans',
    description:
      'As you all know this website is all about me so it wouldnt hurt anyone to introduce myself a little and explain what Im all about',
    children: (
      <>
        <Slider />
      </>
    ),
  },
];

const About = () => {
  return (
    <Section>
      <div className="flex flex-col gap-y-2">
        <Section.Title asChild size={'large'}>
          <h2>About Me</h2>
        </Section.Title>

        <Section.Description>
          The platform tailored for the serverless revolution
        </Section.Description>
      </div>

      <ul className="flex flex-col gap-x-4 gap-y-4 md:grid md:grid-cols-2 md:grid-rows-2">
        {CARDS.map((card, index) => (
          <li key={index} className="col-span-1 row-span-1">
            <Card textAlign="left">
              <Card.Title asChild size={'small'}>
                <h3>{card.title}</h3>
              </Card.Title>

              <Card.Description>{card.description}</Card.Description>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default About;
