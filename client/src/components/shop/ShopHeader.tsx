import Container from "@/components/layout/Container";

type Props = {
  productCount: number;
};

export default function ShopHeader({ productCount }: Props) {
  return (
    <section dir="ltr" className="border-b border-border bg-background">
      <Container>
        <div className="py-14 md:py-16">
          {/* Top Row */}

          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Shop
            </p>

            <p dir="rtl" className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">
                {productCount}
              </span>{" "}
              محصول
            </p>
          </div>

          {/* Brand Message */}

          <p className="mt-6 max-w-xl [font-family:var(--font-display)] text-xl leading-relaxed text-text-primary md:text-2xl">
            Crafted with Earth.
            <br />
            Made for Home.
          </p>
        </div>
      </Container>
    </section>
  );
}
