import { Globe } from 'lucide-react';

import LinkBox from '@/components/LinkBox';
import { docs } from '@/lib/docs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24 text-center">
      <h1 className="group">
        <Globe className="mx-auto size-10 text-blue-700 transition-colors group-hover:text-green-700" />
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
          <LinkBox
            key={doc.label}
            href={doc.href}
            label={doc.label}
            description={doc.description}
          />
        ))}
      </div>
    </main>
  );
}
