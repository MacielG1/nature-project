import Image from 'next/image';
import Link from 'next/link';
import Button from './UI/Button';

export default function DonateTiles() {
  return (
    <section className="overflow-hidden bg-white pt-32 pb-10 mx-5">
      <div className="mx-auto max-w-6xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className=" lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 flex justify-center  items-center flex-col">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
              Help Nature
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              As individuals, we can make a significant impact on nature by
              taking simple steps. Planting trees, reducing waste are some ways
              we can contribute to the preservation of our planet.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              If you want to make a direct impact, consider donating. Your
              contributions can help support initiatives like reforestation and
              wildlife protection and many more.
            </p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.globalgiving.org"
            >
              <Button className="dark:bg-green-500 text-lg mt-3 py-6 px-8 dark:hover:bg-green-600 rounded-2xl text-black font-semibold">
                Donate
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents  flex-col">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src="/nature8.avif"
                alt="nature"
                width={400}
                height={300}
                className="aspect-[7/5] w-[17rem] md:w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8 ">
              <div className="order-first max-md:-ml-[12rem] flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src="/nature12.avif"
                  alt="nature"
                  width={400}
                  height={300}
                  className="aspect-[4/3] w-[7rem] md:w-[21rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src="/nature11.avif"
                  alt="nature"
                  width={400}
                  height={300}
                  className="aspect-[7/5] w-[10rem] md:w-[22rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>

              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src="/nature10.avif"
                  alt="nature"
                  width={400}
                  height={300}
                  className="aspect-[4/3] w-[11rem] md:w-[25rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
