import { useCart } from "@/context/CartContext";
import CartItemCard from "./CartItemCard";

export default function CartList() {
  const { cartItems } = useCart();

  return (
    <div className="space-y-6">
      {cartItems.map((item) => (
        <CartItemCard key={item.product.id} item={item} />
      ))}
    </div>
  );
}
