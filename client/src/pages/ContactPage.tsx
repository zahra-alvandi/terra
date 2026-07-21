import Container from "@/components/layout/Container";
import ContactCard from "@/components/contact/ContactCard";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-24">
      <Container>
        <ContactCard>
          <ContactForm />
        </ContactCard>
      </Container>
    </section>
  );
}