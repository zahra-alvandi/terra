import toast from "react-hot-toast";
import TerraToast from "@/components/ui/TerraToast";

export function showAddToCartToast(title: string) {
  toast.custom(() => <TerraToast title={title} />, {
    duration: 2200,
    position: "top-center",
  });
}
