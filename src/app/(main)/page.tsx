import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="layout-container">
      <h1 className="my-10 font-serif text-[clamp(3rem,15cqi,4.5rem)] [line-height:1.1cap] tracking-[-0.025em]">
        HELLO
        <br />
        <span className="pl-8">WORLD</span>
      </h1>
      <div className="pt-14 py-24 layout-grid-container">
        <div className="col-[1_/_7] sm:col-[3_/_7] lg:col-[4_/_7]">
          <p className="text-base sm:text-lg mb-8">
            Hi! I&apos;m a software developer who works on the full-stack web.
            My field of interests is quite extensive, ranging from web
            development and database engineering to distributed systems, and
            cats.
          </p>
          <Button href="/work">Explore work</Button>
        </div>
      </div>
    </main>
  );
}
