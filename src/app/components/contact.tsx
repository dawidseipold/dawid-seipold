import Badge from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import Description from '@/components/ui/typography/description';
import Title from '@/components/ui/typography/title';
import { Icons } from '@/components/utils/icons';
import Image from 'next/image';
import Link from 'next/link';

const SOCIALS = [1, 2, 3];

const Contact = () => {
  return (
    <Section className="sm:gap-y-8">
      <div className="flex flex-col gap-y-2">
        <Section.Title asChild size={'large'}>
          <h2>Contact</h2>
        </Section.Title>
        <Section.Description>You can send me a personal message</Section.Description>
      </div>

      <form
        action="submit"
        className="flex flex-col items-start gap-y-8 rounded-3xl bg-white/5 p-8 text-start"
      >
        <div className="flex flex-col gap-y-4">
          <span className="text-2xl font-bold">Im interested in...</span>

          <select>
            <option>Website</option>
            <option>Hiring</option>
            <option>Partnership</option>
            <option>Other</option>
          </select>
        </div>

        <div className="flex w-full flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="name" className="text-xl font-medium text-neutral-300">
              Your name
            </label>
            <input type="text" name="name" className="rounded-xl px-6 py-2" />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email" className="text-xl font-medium text-neutral-300">
              Your email
            </label>
            <input type="email" name="email" className="rounded-xl px-6 py-2" />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="message" className="text-xl font-medium text-neutral-300">
              Your message
            </label>
            <textarea name="message" className="min-h-[4rem] rounded-xl px-6 py-2" />
          </div>

          <div className="my-4 flex cursor-pointer items-center gap-x-2">
            <Icons.Paperclip />
            <span className="text-lg font-bold">Add attachment</span>
          </div>

          <button className="flex w-full items-center justify-center rounded-full bg-white/5 py-4 text-xl font-bold hover:bg-white/10">
            Submit
          </button>
        </div>
      </form>

      <div className="mt-8 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <Title asChild size={'large'}>
            <h4>Follow Me</h4>
          </Title>
          <Description>If you want to know about me</Description>
        </div>

        <ul className="flex flex-col gap-y-4 sm:flex-row sm:justify-center sm:gap-x-4">
          {SOCIALS.map((social, index) => (
            <Card
              key={index}
              type={'link'}
              asChild
              textAlign="left"
              className="group flex-row items-center justify-between"
            >
              <Link href={'/link'}>
                <div className="flex items-center gap-x-4">
                  <Icons.Twitter className="fill-white group-hover:fill-emerald-500 group-hover:text-emerald-500" />
                  <Card.Title className="group-hover:text-emerald-500">Twitter</Card.Title>
                </div>

                <Icons.ArrowUpRight className="group-hover:text-emerald-500 sm:hidden" />
              </Link>
            </Card>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Contact;
