import MainLayout from "@/app/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProduct";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
    </MainLayout>
  );
}
