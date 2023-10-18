import { AnimalsIcons } from '@/assets/Animals';
import { cn } from '@/utils/cn';
import React from 'react';

const animals = [
  {
    name: 'Elephant',
    description:
      'Elephants are the largest land mammals, known for their intelligence, social bonds, and significance in conservation efforts.',
    icon: <AnimalsIcons.elephant className="w-7 h-7" />,
  },

  {
    name: 'Tiger',
    description:
      'Tigers are large carnivorous cats, known for their striking orange coat with black stripes and their role as a keystone species in ecosystems.',
    icon: <AnimalsIcons.tiger className="w-7 h-7" />,
  },
  {
    name: 'Giraffe',
    description:
      "Giraffes are the world's tallest land animals, recognized for their long necks, graceful appearance and herbivorous diet.",
    icon: <AnimalsIcons.giraffe className="w-7 h-7" />,
  },
  {
    name: 'Lion',
    description:
      'The lion, often referred to as the "king of the jungle," is a symbol of strength and majesty in the animal kingdom.',
    icon: <AnimalsIcons.lion className="w-7 h-7" />,
  },
  {
    name: 'Hippopotamus',
    description:
      'Hippos are large, semi-aquatic mammals known for their massive size, territorial behavior and powerful jaws.',
    icon: <AnimalsIcons.hippopotamus className="w-7 h-7" />,
  },
  {
    name: 'Koala',
    description:
      'Koalas are marsupials native to Australia, recognized for their tree-dwelling habits and eucalyptus leaf diet.',
    icon: <AnimalsIcons.koala className="w-7 h-7" />,
  },
  {
    name: 'Penguin',
    description:
      'Penguins are flightless birds adapted to a life in the water, known for their tuxedo-like plumage and waddling gait.',
    icon: <AnimalsIcons.penguin className="w-7 h-7" />,
  },
  {
    name: 'Zebra',
    description:
      'Zebras are known for their distinctive black and white stripes and they are native to Africa.',
    icon: <AnimalsIcons.zebra className="w-7 h-7" />,
  },
];

export default function Animals() {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-16 text-center">
          Wonderful animals found in our nature
        </h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <dl className="col-span-4 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {animals.map((animal, index) => (
              <div key={index}>
                <dt className="text-lg font-semibold leading-6 text-gray-900">
                  <div className="flex gap-3 items-center ">
                    <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-600">
                      {animal.icon}
                    </span>
                    <span>{animal.name}</span>
                  </div>
                </dt>
                <dd className="mt-2 text-base leading-6 text-gray-600">
                  {animal.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
