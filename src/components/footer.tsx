import Logo from './logo';
import Container from './container';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <Container className="flex flex-col gap-y-4 border-t border-neutral-300/10 py-8 md:flex-row md:justify-between md:pt-8">
        {/* Make bigger */}
        <Logo />

        <ul className="flex flex-col gap-y-2 md:flex-row md:gap-x-4">
          <li className="font-semibold tracking-wide text-neutral-300 hover:underline">
            <Link href="/terms">Terms of Service</Link>
          </li>
          <li className="font-semibold tracking-wide text-neutral-300 hover:underline">
            <Link href="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
