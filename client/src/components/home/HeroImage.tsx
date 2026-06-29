import heroImage from "@/app/assets/images/hero-ceramic.jpg";

export default function HeroImage() {
  return (
    <div className="order-1 flex justify-center lg:order-2">
      <div className="relative">
        {/* Background Shape */}

        <div className="absolute -left-10 top-10 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <img
          src={heroImage}
          alt="Handmade ceramic collection"
          className="
relative
z-10
w-full
max-w-[470px]
aspect-[4/5]
rounded-[36px]
object-cover
shadow-2xl
transition-transform
duration-700
hover:scale-[1.03]
"
        />
      </div>
    </div>
  );
}
