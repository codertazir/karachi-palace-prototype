export function PageHeading({ eyebrow, title, urdu, intro }: { eyebrow: string; title: string; urdu?: string; intro?: string }) {
  return (
    <section className="ember-glow grain relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="mt-5 animate-rise text-5xl leading-[1.05] text-foreground md:text-7xl">{title}</h1>
        {urdu && <p className="mt-3 font-urdu text-2xl text-primary md:text-3xl">{urdu}</p>}
        {intro && <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}
