import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useCart } from "@/context/CartContext";
import { createOrder } from "@/services/orderService";

import Container from "@/components/layout/Container";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import CheckoutPayment from "@/components/checkout/CheckoutPayment";

type CheckoutFormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
};

export default function CheckoutPage() {
  const methods = useForm<CheckoutFormData>({
    mode: "onSubmit",
  });

  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [receipt, setReceipt] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: CheckoutFormData) => {
    if (!receipt) {
      toast.error("لطفاً رسید پرداخت را بارگذاری کنید.");
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const orderNumber = `TR-${Date.now()}`;

    await createOrder(
      {
        orderNumber,

        firstName: data.firstName,
        lastName: data.lastName,

        phone: data.phone,
        address: data.address,

        totalPrice: cartTotal,

        items: cartItems.map((item) => ({
          productId: item.product.id,
          title: item.product.title,
          image: item.product.image,
          price: item.product.price,
          quantity: item.quantity,
        })),
      },
      receipt,
    );

    clearCart();
    methods.reset();

    setReceipt(null);
    setIsSubmitting(false);

    toast.success("سفارش با موفقیت ثبت شد.");

    navigate("/order-success", {
      state: {
        orderNumber,
      },
    });
  };

  return (
    <section className="py-20">
      <Container>
        <h1 className="text-3xl font-semibold text-text-primary">
          تکمیل سفارش
        </h1>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="mt-10 grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <CheckoutForm />
              </div>

              <CheckoutSummary />
            </div>

            <CheckoutPayment
              receipt={receipt}
              setReceipt={setReceipt}
              isSubmitting={isSubmitting}
            />
          </form>
        </FormProvider>
      </Container>
    </section>
  );
}
