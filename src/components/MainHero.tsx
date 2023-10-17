import Button from './UI/Button';
import Link from 'next/link';

export default function MainHero() {
  return (
    <div
      className="relative isolate "
      style={{
        backgroundImage: 'url(/nature2.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className=" sm:min-h-[48rem] flex items-center justify-center py-24 sm:py-32 lg:pb-40 pt-56"
        style={{ backdropFilter: 'blur(9px)' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-wide pt-16 text-neutral-950 sm:text-6xl">
              <span className="text-green-600">Nature</span> Connecting with the
              World Around Us
            </h1>
            <p className="mt-6 text-lg leading-7 text-neutral-300">
              Discover the wonders of nature, from incredible landscapes to the
              fascinating creatures of our planet. Explore and take a closer
              look at the environment and its beauty.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <Link
                  href="https://github.com/MacielG1" // change to project repo
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="dark:bg-green-500 text-lg py-6 px-8 dark:hover:bg-green-600 rounded-2xl text-black font-semibold duration-200 transition">
                    GitHub
                  </Button>
                </Link> */}
              <Link
                href="https://github.com/MacielG1" // change to project repo
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="link">GitHub Project</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
