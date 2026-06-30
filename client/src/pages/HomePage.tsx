import MainLayout from "@/app/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProduct";
import Divider from "@/components/ui/Divider";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <FeaturedCategories />
      <Divider />
      <FeaturedProducts />
      <Divider />
    </MainLayout>
  );
}
