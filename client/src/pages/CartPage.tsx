import Container from "@/components/layout/Container";
import { useCart } from "@/context/CartContext";
// import { formatPrice } from "@/utils/formatPrice";
import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummery";
import EmptyCart from "@/components/cart/EmptyCart";

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <section className="py-20">
      <Container>
        <h1 className="text-3xl font-semibold text-text-primary">سبد خرید</h1>

        <div className="mt-10">
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Items */}
              <div className="lg:col-span-2">
                <CartList />
              </div>

              <CartSummary />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
