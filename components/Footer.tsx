import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';
import { TbBrandLeetcode } from 'react-icons/tb';

export default function Footer() {
  return (
    <footer className="my-8">
      <h3 className="text-center text-2xl">Snehal Thombare</h3>
      <ul className="my-4 flex items-center justify-center gap-6 text-[1.6rem]">
        <li className="cursor-pointer transition-transform duration-75 hover:translate-y-[-5px] hover:text-accent-400">
          <Link
            href="https://www.linkedin.com/in/snehal-pandurang-thombare-367095258/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
        </li>
        <li className="cursor-pointer transition-transform duration-75 hover:translate-y-[-5px] hover:text-accent-400">
          <Link
            href="https://github.com/snehal-18-tech"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
          </Link>
        </li>
       
        <li className="cursor-pointer transition-transform duration-75 hover:translate-y-[-5px] hover:text-accent-400">
          <Link
            href="https://auth.geeksforgeeks.org/user/suhaanbhandary1/practice"
            aria-label="GeeksForGeeks"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiGeeksforgeeks />
          </Link>
        </li>
      </ul>
    
    </footer>
  );
}
