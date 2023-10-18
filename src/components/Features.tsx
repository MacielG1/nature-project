import Image from 'next/image';
const imageData = [
  {
    src: 'nature4.avif',
    caption: "Nature's wonders remind us of the simple joys in life.",
  },
  {
    src: 'nature5.avif',
    caption:
      "Let's protect the delicate balance of nature for our children and their children.",
  },
  {
    src: 'nature6.avif',
    caption:
      'Green spaces provide solace and inspiration for our bodies and minds.',
  },
  {
    src: 'nature7.avif',
    caption:
      'Biodiversity is a treasure we must safeguard for the sake of all beings.',
  },
  {
    src: 'nature9.avif',
    caption:
      "The ocean's beauty and ecosystems captivate our curiosity, connecting us to the natural world.",
  },
  {
    src: '/nature3.avif',
    caption:
      "Let's take care of our planet, it's our responsibility to preserve the beauty of nature.",
  },
];
export default function Features() {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-16 pt-24 text-center">
        Importance of Nature
      </h2>
      <div className="mx-16 lg:mx-32 pb-16 md:pb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {imageData.map((image) => (
          <div
            className="relative flex aspect-[16/9] cursor-default flex-col items-center justify-center min-h-[100px] max-h-[300px] "
            key={image.caption}
          >
            <div className="group flex  select-none w-full items-center justify-center overflow-hidden rounded-2xl ">
              <p
                className="absolute bottom-0 flex justify-center items-center w-full z-10  lg:h-[20%] rounded-b-2xl  bg-black bg-opacity-40 text-white "
                aria-label="Delete Button"
              >
                <span className="text-xs sm:text-sm text-center p-4">
                  {image.caption}
                </span>
              </p>

              <Image
                src={image.src}
                alt={image.caption}
                width={350}
                height={350}
                style={{ width: '100%', height: 'auto' }}
                priority
                unoptimized
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRgACAABXRUJQVlA4WAoAAAAgAAAANQMAzgEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDhMEQAAAC81g3MAB1CKUpSi/4GI6H8AAA=="
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
