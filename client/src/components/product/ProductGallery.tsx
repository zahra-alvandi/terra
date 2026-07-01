import type { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductGallery({ product }: Props) {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-3xl border border-border">
        <img
          src={product.image}
          alt={product.title}
          className="
  aspect-[4/5]
  w-full
  max-h-[520px]
  object-cover
"
        />
      </div>

      <div className="flex gap-3">
        {product.gallery.map((image, index) => (
          <button
            key={index}
            className="overflow-hidden rounded-xl border border-border"
          >
            <img
              src={image}
              alt={`${product.title}-${index}`}
              className="
  h-24
  w-24

  md:h-20
  md:w-20

  object-cover
"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
