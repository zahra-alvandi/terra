import MainLayout from "@/app/layouts/MainLayout";
import Container from "@/components/layout/Container";

export default function HomePage() {
  return (
    <MainLayout>
      <main className="min-h-screen bg-stone-100">
        <Container>
          <h1 className="pt-20 text-center text-5xl font-bold text-amber-700">
            Terra
          </h1>
        </Container>
      </main>
    </MainLayout>
  );
}