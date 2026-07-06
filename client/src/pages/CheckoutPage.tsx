import Container from "@/components/layout/Container";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import CheckoutPayment from "@/components/checkout/CheckoutPayment";

export default function CheckoutPage() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-3xl font-semibold text-text-primary">
          تکمیل سفارش
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>

          <CheckoutSummary />
        </div>
        <CheckoutPayment />
      </Container>
    </section>
  );
}
