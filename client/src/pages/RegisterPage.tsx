import Container from "@/components/layout/Container";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="py-24">
      <Container>
        <RegisterForm />
      </Container>
    </section>
  );
}