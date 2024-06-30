import Image from 'next/image';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const docs: {
  label: string;
  href: string;
  description: string;
}[] = [
  {
    label: 'NextJS',
    href: 'https://nextjs.org/docs',
    description: 'Full-stack framework for building web apps',
  },
  {
    label: 'Tailwind',
    href: 'https://tailwindcss.com/',
    description: 'Library of configurable utility classes',
  },
  {
    label: 'clsx',
    href: 'https://github.com/lukeed/clsx',
    description: 'Utility for conditional classNames',
  },
  {
    label: 'HeadlessUI',
    href: 'https://headlessui.com/',
    description: 'Unstyled UI components built for Tailwind ',
  },
  {
    label: 'HeroIcons React',
    href: 'https://github.com/tailwindlabs/heroicons#react',
    description: 'A library of SVG icons as react components',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24 text-center">
      <h1 className="group">
        <GlobeAltIcon className="mx-auto size-10 text-blue-700 transition-colors group-hover:text-green-700" />
        Hello World!
      </h1>
      <p>
        Thanks for starting your project with this template! If you have any
        questions, concerns, or would like to make a contribution, visit the{' '}
        <a href="https://github.com/ghall89/nextjs-template" target="_blank">
          GitHub repo
        </a>
      </p>
      <p>
        This template comes with various dependencies preinstalled. Please check
        out the documentation below:
      </p>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {docs.map((doc) => (
          <a
            key={doc.label}
            href={doc.href}
            target="_blank"
            className="rounded-xl border-2 border-gray-200 bg-white px-3 py-6 text-black shadow-sm transition-transform hover:bg-gray-50 hover:text-gray-700 active:scale-95"
          >
            <h2> {doc.label}</h2>
            <p>{doc.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
