import MainHero from '@/components/MainHero';
import Animals from '../components/Animals';
import Features from '@/components/Features';
import DonateTiles from '@/components/DonateTiles';

export default function Home() {
  return (
    <main>
      <MainHero />
      <Animals />
      <Features />
      <DonateTiles />
    </main>
  );
}
