import { FloristForm } from './florist-form';

export function AiFlorist() {
  return (
    <section
      id="florist"
      aria-labelledby="florist-title"
      className="bg-olive scroll-mt-6 text-white [--ring:var(--color-cream)]"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm font-medium tracking-[0.3em] uppercase">
          AI florist
        </p>
        <h2
          id="florist-title"
          className="font-heading mt-3 text-4xl md:text-5xl"
        >
          Not sure what to choose?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg">
          Tell us who it is for and what the moment is. We will suggest three
          bouquets from our shop and explain why.
        </p>
        <FloristForm />
      </div>
    </section>
  );
}
